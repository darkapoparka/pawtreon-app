import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
const root = process.cwd();
const data = JSON.parse(await readFile(resolve(root, 'docs/design/routes.json'), 'utf8'));
const ids = new Set();
for (const route of data.routes) {
  if (ids.has(route.id)) throw new Error(`Duplicate route id: ${route.id}`);
  ids.add(route.id);
  for (const key of ['id', 'path', 'title', 'kind', 'group', 'access']) {
    if (!route[key]) throw new Error(`Missing ${key} on ${route.id}`);
  }
  if (!route.sections.length || !route.states.length) throw new Error(`Incomplete contract: ${route.id}`);
}
for (const route of data.routes) {
  for (const target of [route.back, ...route.actions.map(a => a.to)]) {
    if (!ids.has(target)) throw new Error(`Unknown destination ${target} on ${route.id}`);
  }
}
const template = await readFile(resolve(root, 'docs/design/workbench-template.html'), 'utf8');
const html = template.replace('__ROUTES__', JSON.stringify(data).replaceAll('<', '\\u003c'));
await mkdir(resolve(root, 'docs/design/wireframes'), { recursive: true });
await writeFile(resolve(root, 'docs/design/wireframes/index.html'), html);
const rows = data.routes.map(r => `| [${r.id}](wireframes/index.html#${r.id}) | \`${r.path}\` | ${r.title} | ${r.access} |`).join('\n');
const contracts = data.routes.map(r => `## ${r.id} — ${r.title}\n\nPath: \`${r.path}\`. Access: ${r.access}. Template: ${r.kind}.\n\n${r.sections.map(s => `- ${s}`).join('\n')}\n\nActions: ${r.actions.map(a => `${a.label} → ${a.to}`).join('; ')}.\n\nStates: ${r.states.join(', ')}.\n`).join('\n');
const document = `# Route and screen catalogue\n\nGenerated from \`routes.json\` by \`node scripts/generate-design.mjs\`. ${data.routes.length} screen contracts, including overlays and the not-found boundary. These are not all implemented production URLs. Product paths omit the /bg or /en prefix. Auth callbacks and payment webhooks are service endpoints, not visual pages.\n\n| Screen | Planned path | Title | Access |\n| --- | --- | --- | --- |\n${rows}\n\n# Per-screen contracts\n\n${contracts}`;
await writeFile(resolve(root, 'docs/design/ROUTES.md'), document.replaceAll('\\n','\n'));
console.log(`Validated ${data.routes.length} screen contracts and all destinations. Generated standalone wireframes and ROUTES.md.`);

await mkdir(resolve(root, 'public/design'), { recursive: true });
await writeFile(resolve(root, 'public/design/wireframes.html'), html);

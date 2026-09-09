import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// Documentation only: never writes images, runtime routes or approvals.
const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const checkOnly = process.argv.includes("--check");
const readJson = (path) => JSON.parse(readFileSync(resolve(root, path), "utf8"));
const { routes } = readJson("docs/design/routes.json");
const art = readJson("docs/design/screen-art-direction.json");
const folderFor = (id) => art.folderNames[id] ?? id;
const cell = (value) => String(value).replaceAll("|", "\\|").replaceAll("\n", " ");
const list = (items) => items.map((item, i) => `${i + 1}. ${item}`).join("\n");
const link = (id) => `../${folderFor(id)}/README.md`;
const outputs = new Map();
const ids = new Set();
const folders = new Set();
const stateNotes = {
  default: "Normal content; actions reflect access and readiness. Illustrative data only.",
  loading: "Reserve layout with skeletons; no blank page or jumping footer.",
  empty: "Explain what is absent; offer relevant browse, create or reset action.",
  error: "Useful retry; preserve query, input and intended destination.",
  offline: "Retain context; never imply payment or server writes succeeded.",
  "permission-denied": "No private content; explain safe sign-in/access recovery.",
  "location-denied": "Keep manual city selection usable; no repeated permission prompt.",
  "not-found": "Safe missing/removed message; recover through browse or search.",
  paused: "Explicit paused state; no enabled donation action.",
  resolved: "Show outcome and updates; remove ongoing urgency and donation action.",
  completed: "Show completed campaign/outcome, not an active fundraiser CTA.",
  "funding-unavailable": "Explain unavailable giving; offer relevant practical help.",
  "goal-reached": "Explain funding policy and eligibility, not an unexplained request for more.",
  "invalid-amount": "Inline amount error; retain recipient and typed input.",
  "invalid-email": "Adjacent email guidance without account enumeration.",
  "rate-limited": "Show safe retry timing; retain input and destination.",
  submitting: "One pending action; prevent duplicate submission.",
  resending: "Resend progress/cooldown; no false delivery confirmation.",
  searching: "Keep city query visible; reserve result area.",
  uploading: "Per-file progress and cancel/remove; retain text fields.",
  "upload-failed": "Retry/remove affected file without losing story or successful uploads.",
  "validation-error": "Inline errors and useful summary; preserve values and focus first error.",
  "save-conflict": "Explain conflicting edit; compare/reload, never silently overwrite.",
  "beneficiary-not-ready": "Content progress and payment readiness are separate.",
  pending: "Await trusted confirmation; no receipt or automatic second charge.",
  succeeded: "Server-confirmed outcome and receipt, not success inferred from redirect.",
  failed: "Explain failed operation and offer safe retry/support with context retained.",
  canceled: "Cancellation with a return path, not a completed contribution.",
  expired: "Explain expiry and the relevant reissue/reverification action.",
  "invalid-link": "Safe invalid-link message with fresh-link recovery.",
  revoked: "No protected workspace content; explain unavailable access.",
  "already-accepted": "Show existing membership status without accepting twice.",
  "wrong-account": "Appropriate sign-in recovery without exposing other invitations.",
  submitted: "Submission received, not automatically published or payout-ready.",
  "needs-changes": "Specific corrections and return to the affected form step.",
  published: "Content publication and monetary readiness remain distinct.",
  rejected: "Decision, permitted reason and correction/appeal/support route.",
  "not-ready": "Explain prerequisites; no fabricated balance or active payout action.",
  "pending-verification": "Show pending review and the available next steps.",
  ready: "Name the precise capability available; do not imply unrelated verification.",
  held: "Permitted hold explanation and support; not paid-out money.",
  "pending-invite": "Invite, role and status with authorized revoke/resend actions.",
  "last-owner-blocked": "Explain last-owner protection and ownership-transfer recovery.",
  "not-started": "Explain required evidence and privacy before beginning.",
  reviewing: "Evidence under review; no premature approval badge.",
  approved: "Exact scope and date of approval, not an unlimited trust claim.",
  locked: "Another reviewer is editing; prevent conflicting decisions.",
  "already-reviewed": "Show recorded decision and audit context; no duplicate decision.",
  copied: "Confirm only after public canonical URL copying succeeds.",
  "copy-failed": "Manual copy or alternative share method; no false success toast."
};
if (!Array.isArray(routes) || !routes.length) throw new Error("Missing routes");
for (const r of routes) {
  const folder = folderFor(r.id);
  if (!/^[a-z0-9-]+$/.test(folder) || ids.has(r.id) || folders.has(folder)) {
    throw new Error(`Invalid or duplicate screen: ${r.id}`);
  }
  ids.add(r.id); folders.add(folder);
  for (const state of r.states) {
    if (!stateNotes[state]) throw new Error(`Missing state guide: ${r.id}/${state}`);
  }
}
for (const id of [...Object.keys(art.byId), ...Object.keys(art.folderNames)]) {
  if (!ids.has(id)) throw new Error(`Unknown art-direction screen: ${id}`);
}
for (const r of routes) {
  for (const id of [r.back, ...r.actions.map((action) => action.to)]) {
    if (!ids.has(id)) throw new Error(`Broken transition: ${r.id} -> ${id}`);
  }
  const folder = folderFor(r.id), detail = art.byId[r.id] ?? {};
  const reference = detail.reference ?? art.byGroup[r.group];
  if (!reference) throw new Error(`Missing visual direction: ${r.id}`);
  const composition = detail.composition ?? r.sections;
  const surface = r.path.startsWith("overlay:") ? "overlay" : r.path === "not-found.tsx" ? "boundary" : "planned route";
  const fields = r.fields.length ? "| Label | Input | Contract example/options |\n| --- | --- | --- |\n" + r.fields.map(([label, type, example]) => `| ${cell(label)} | ${cell(type)} | ${cell(example || "Not specified")} |`).join("\n") : "No additional data-entry fields are enumerated. Search/filter controls still follow the hierarchy and shared flows above; do not invent extra personal-data collection.";
  const states = r.states.map((state) => `| ${cell(state)} | ${cell(stateNotes[state])} |`).join("\n");
  const actions = r.actions.map((action) => `- **${action.label}** -> [${action.to}](${link(action.to)})`).join("\n");
  const review = [...(detail.review ?? []), "Match accepted type, colors, controls and spacing; do not independently redesign this screen.", "Review long Bulgarian copy, mobile widths, visible focus, 44px touch areas and keyboard/safe-area behavior.", "Use one context-appropriate footer, never stacked global and task bars.", "Verify relevant states before considering the screen complete.", "Public browsing must not become sign-in-gated; permission handling applies only where an action or record requires it."];
  const spec = `# ${r.title}\n\nGenerated packet: edit [routes.json](../../routes.json) and [art direction](../../screen-art-direction.json), then regenerate.\n\n` +
    `**Screen ID:** \`${r.id}\`\n\n**Surface:** ${surface}\n\n**Planned path:** \`${r.path}\`\n\n**Access:** ${r.access}\n\n**Family:** ${r.group}\n\nThis is not a finished image, implemented production route or owner approval. Product paths omit locale prefixes.\n\n` +
    `## Visual reference\n\n${reference}\n\n[Reference research](../../REFERENCE-APPS.md) · [Shared UI specification](../../UI-SPEC.md) · [Screen workflow](../../SCREEN-WORKFLOW.md)\n\n` +
    `## Information hierarchy\n\n${list(r.sections)}\n\n## Composition\n\n${list(composition)}\n\n` +
    `## Actions and transitions\n\n${actions}\n- **Back:** [${r.back}](${link(r.back)})\n\nEdge cases and persistence follow [FLOWS.md](../../FLOWS.md). Prototype labels do not establish live actions.\n\n` +
    `## Inputs\n\n${fields}\n\n## States to design separately\n\n| State | Visual/interaction requirement |\n| --- | --- |\n${states}\n\n` +
    `## Review checklist\n\n${review.map((item) => `- [ ] ${item}`).join("\n")}\n\n` +
    `## Artifacts\n\n[Existing low-fidelity wireframe](../../wireframes/index.html#${r.id}) · [Individual image brief](IMAGEGEN.md)\n\n` +
    `Future concept naming: \`concepts/mobile-390.${r.states[0]}.v1.png\`. Later browser evidence: \`verification/browser-390.${r.states[0]}.png\`. These are naming conventions, not existing-file claims. Record exact owner-approved files and remaining issues in REVIEW.md after review.\n`;
  const brief = `# Image brief: ${r.title}\n\nOne screen, not a flow collage. Read [screen contract](README.md), [UI-SPEC](../../UI-SPEC.md) and [workflow](../../SCREEN-WORKFLOW.md). This brief is not an existing generation.\n\n` +
    `## Target\n\nScreen: \`${r.id}\`; initial state: \`${r.states[0]}\`; surface: ${surface}. Compose one readable first viewport at 390x844 browser-content proportions. Other states (${r.states.slice(1).join(", ") || "none defined"}) require separate images when applicable.\n\n` +
    `## Direction\n\n${reference}\n\n${art.byGroup[r.group]}\n\nWhite surfaces, dark ink and restrained teal. Editorial serif only for campaign headings; readable sans-serif elsewhere. Reuse an actual attached accepted Pawtreon reference; a filename alone is not an attachment.\n\n` +
    `## Draw\n\n${list(composition)}\n\n` +
    `## Content and state\n\nKeep the contract's defined inputs, actions, organizer identity and access rules. Initial state: ${stateNotes[r.states[0]]} Deeper content scrolls; do not shrink text to fit it all. Use clearly labeled illustrative concept data, never invented real donations or verified status.\n\n` +
    `## Avoid\n\nNo multi-phone boards, hardware, fake iOS status bar, beige chrome, huge floating plus, handwriting, mismatched icons, copied third-party branding, preselected monthly giving or invented features. No precise colony pins. Payment UI must not imply provider approval or functional card capture.\n\n` +
    `## Output and review\n\nImport and inspect the actual image before recording \`concepts/mobile-390.${r.states[0]}.v1.png\` as present. Compare with accepted homepage/detail components. A PNG does not prove working interactions or finish the route.\n`;
  outputs.set(`docs/design/screens/${folder}/README.md`, spec);
  outputs.set(`docs/design/screens/${folder}/IMAGEGEN.md`, brief);
}
const entries = routes.map((r) => ({ id: r.id, folder: folderFor(r.id), path: r.path, group: r.group, states: r.states, spec: `${folderFor(r.id)}/README.md`, brief: `${folderFor(r.id)}/IMAGEGEN.md` }));
outputs.set("docs/design/screens/manifest.json", JSON.stringify({ schemaVersion: 1, source: "../routes.json", artDirection: "../screen-art-direction.json", note: "Coverage only; not image generation, implementation or owner approval.", entries }, null, 2) + "\n");
const index = `# Pawtreon individual screens\n\n${routes.length} screen/overlay/boundary packets generated from the existing catalogue. This is not ${routes.length} finished high-fidelity screens.\n\n` +
  `Start with [homepage](homepage/README.md), [case detail](case-detail/README.md), [campaign detail](campaign-detail/README.md), [donation](donation/README.md) and [create](create/README.md).\n\n` +
  `Each folder has a specification and a separate image-generation brief. One screen and state per image. The earlier homepage/campaign pair remains the visual reference; multi-screen boards are exploration only.\n\n` +
  `[Workflow](../SCREEN-WORKFLOW.md) · [Reference apps](../REFERENCE-APPS.md) · [Shared geometry/tokens](../UI-SPEC.md) · [Coverage manifest](manifest.json)\n\n` +
  `| Folder | Canonical ID | Planned path | Family |\n| --- | --- | --- | --- |\n` + entries.map((entry) => `| [${entry.folder}](${entry.spec}) | ${cell(entry.id)} | \`${cell(entry.path)}\` | ${cell(entry.group)} |`).join("\n") +
  `\n\n## Maintenance\n\nRun \`node scripts/generate-screen-folders.mjs\` or add \`--check\` for a non-writing consistency check. Edit packets through canonical inputs. Actual PNGs and REVIEW.md are never generated, deleted or treated as approvals by this script.\n`;
outputs.set("docs/design/screens/README.md", index);
let different = 0;
for (const [relative, content] of outputs) {
  const path = resolve(root, relative);
  const current = existsSync(path) ? readFileSync(path, "utf8") : null;
  if (current !== content) {
    different += 1;
    if (checkOnly) console.error(`Missing or stale: ${relative}`);
    else {
      mkdirSync(dirname(path), { recursive: true });
      writeFileSync(path, content, "utf8");
    }
  }
}
if (checkOnly && different) process.exitCode = 1;
else console.log(`${checkOnly ? "Checked" : "Generated"} ${routes.length} screen folders, ${outputs.size} documentation files and route/state links. No images or approvals written.`);

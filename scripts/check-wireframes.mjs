import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
const routes = JSON.parse(await readFile('docs/design/routes.json', 'utf8')).routes;
const base = process.env.PAWTREON_CHECK_URL || 'http://127.0.0.1:4183';
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const context = await browser.newContext({ viewport: { width: 390, height: 980 } });
const page = await context.newPage();
const errors = [];
page.on('pageerror', error => errors.push(error.message));
const results = [];
await mkdir('docs/verification', { recursive: true });
try {
  await page.goto(base + '/design/wireframes.html', { waitUntil: 'networkidle' });
  for (const width of [320, 360, 390, 430]) {
    await page.setViewportSize({ width, height: 980 });
    await page.locator('#width-picker').selectOption(String(width));
    for (const route of routes) {
      await page.locator('#screen-picker').selectOption(route.id);
      await page.waitForFunction(id => document.querySelector('#contract code')?.textContent === id, route.path);
      const screen = page.locator('#app-screen');
      const overflow = await screen.evaluate(el => el.scrollWidth > el.clientWidth + 1);
      results.push({ id: route.id, width, overflow, rendered: (await screen.innerText()).trim().length > 0 });
    }
  }
  await page.setViewportSize({ width: 390, height: 980 });
  await page.locator('#width-picker').selectOption('390');
  const accessibility = [];
  for (const id of ['home', 'campaign', 'create-basics', 'donate', 'account']) {
    await page.locator('#screen-picker').selectOption(id);
    await page.waitForFunction(id => document.querySelector('#screen-picker')?.value === id && location.hash === '#' + id, id);
    await page.locator('#device').screenshot({ path: `docs/verification/${id}-390.png` });
    const scan = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
    accessibility.push({ id, violations: scan.violations.map(v => ({ id: v.id, impact: v.impact, nodes: v.nodes.map(n => n.target) })) });
  }
  const failures = results.filter(r => r.overflow || !r.rendered);
  const report = { generatedAt: new Date().toISOString(), checked: results.length, failures, pageErrors: errors, accessibility, results };
  await writeFile('docs/verification/wireframe-checks.json', JSON.stringify(report, null, 2) + '\n');
  console.log(JSON.stringify({ checked: results.length, failures, pageErrors: errors, accessibility }, null, 2));
  if (failures.length || errors.length || accessibility.some(x => x.violations.length)) process.exitCode = 1;
} finally {
  await browser.close();
}

# Individual-screen design workflow

Status: screen organization is established; high-fidelity screen concepts and owner approval remain pending. The existing 53-entry route catalogue is not 53 finished designs.

## Source hierarchy

1. PRD.md and FLOWS.md define the product and behavior.
2. routes.json is the canonical screen/overlay/boundary index.
3. UI-SPEC.md governs shared geometry, tokens, accessibility and responsive rules.
4. screen-art-direction.json contains route-specific visual notes, without replacing the functional catalogue.
5. screens/<name>/README.md and IMAGEGEN.md are generated review packets, one per catalogue entry.
6. A concept image is art direction, not proof that the interaction works. A browser screenshot is implementation evidence, not automatically owner approval.

Run `node scripts/generate-screen-folders.mjs` after editing canonical route/art-direction inputs. Run the same command with `--check` to detect stale packets and broken coverage. The generator must not delete or overwrite PNGs or review notes.

## Folder convention

Each screen folder contains README.md (purpose, layout, actions, inputs, states, review checklist and wireframe link) and IMAGEGEN.md (a single-screen brief). Add actual files only when they exist: `concepts/mobile-390.default.v1.png`, state variants such as `mobile-390.empty.v1.png`, and `verification/browser-390.default.png` after implementation. Those paths are naming examples, not a claim of files already present.

An eventual REVIEW.md records the exact approved filename, what the owner accepted, remaining issues and the browser comparison. Never make `approved.png` simply by renaming an unreviewed generation.

## Review sequence

Homepage -> case detail -> campaign detail -> donation amount and pending/result states -> create choice and four wizard steps -> account and organization profiles -> remaining discovery/account/workspace/review screens.

First establish the shared visual system on the homepage and the two detail pages. Do not generate the other 50 screens independently and try to make them consistent afterward. Reuse the accepted header, buttons, card geometry, type, icons, spacing and form primitives.

## Image-generation contract

Generate one screen and one named state per image at realistic 390x844 browser-content proportions; also review 360x800 in the browser. Show the first viewport, not an entire long page squeezed into an elongated phone. For content below the fold, create a separately labeled scrolled view. Do not draw iOS hardware, a fake status bar or a home indicator inside the web UI.

Use the actual earlier homepage/campaign reference when attached. An opaque image ID or a filename on another machine is not an attached reference. Import and inspect the real reference file before claiming it is stored in this repository. The selected chat image has not been automatically copied to the Windows checkout.

No multi-phone presentation boards as acceptance artifacts. No beige app chrome, giant raised plus, mismatched icon families, decorative handwriting, fake donors, preselected monthly donations, invented verified badges, hidden costs or new product features added by the image generator. Example data must be clearly marked in review material and never become real fundraising evidence.

## Review gates

Visual gate: owner accepts the exact screen, not just an attractive collage. Compare header/card/footer components with the previous accepted screens. Check long Bulgarian copy, Cyrillic rendering, readable funding figures and photo crops.

Interaction gate: every visible action has a destination or state change; Back, cancel, keyboard, safe areas, focus, sorting and filter behavior are documented. Public pages work without forced login. Detail/payment/publishing pages use one focused footer rather than stacked bottom bars.

Implementation gate: compare the rendered browser with the accepted concept at 320, 360, 390 and 430 widths; test relevant empty/loading/error/permission and task-specific states. Accessibility and payment truthfulness override an image artifact. Do not reduce text below the shared specification to make a mockup fit.

All 53 screen folders are design work units. Shared legal templates, parameterized profiles and overlays are not separate backend products; reuse implementations where the route contract allows it.

## Organization checks performed, 2026-09-09

`node scripts/generate-screen-folders.mjs` generated 53 folders, 106 per-screen Markdown packets, one Markdown index and one JSON manifest. `node scripts/generate-screen-folders.mjs --check` passed; all catalogue IDs, transition targets and named state guides were validated. A separate relative-link check covered the 107 generated Markdown files and found no missing local targets. `pnpm lint` and `git diff --check` passed.

No high-fidelity PNGs exist under the new screen folders yet. Image generation, importing the earlier chat reference, owner approval and rendered-frontend comparison remain pending. No application routes, dependencies, cloud resources or production deployment were changed by this screen-organization task.

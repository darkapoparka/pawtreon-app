# End-to-end UX flows

These are implementation contracts and prototype journeys, not claims that the backend exists. Route IDs resolve through `routes.json`; product paths omit the locale prefix. Authentication, verification, payment and review outcomes cannot be established by a wireframe click.

## F01 — Discover a case

`home -> location (optional) -> filters (optional) -> search/map -> case -> back`.

Visitor can browse without an account or location permission. Manual city is the default. The species row and sheet use one query model. Opening the sheet snapshots applied state; Apply commits, Cancel discards. Searching/filtering replaces the promotional area with relevant results. Sort and map/list controls affect that same result set. Selecting a card opens its canonical detail URL; browser Back restores city, filters, view and scroll. A denied geolocation request offers manual city selection, not a blocking alert loop. Empty results identify the active constraints and offer Reset; failed search preserves the query.

## F02 — Support a campaign or case

`campaign/case -> donate -> approved provider-hosted checkout -> donation-status -> receipt -> original fundraiser`.

Recipient, amount, currency, fees and resulting total appear before payment. Custom amounts are validated server-side and against the provider's supported range. Public donor-name privacy is separate from receipt email and marketing consent. No preselected platform tip. No requirement to create an account solely for giving when the approved provider supports guest checkout.

The donation result starts pending. Only a trusted webhook or server query can mark success. Refresh, duplicate tabs, repeated clicks and retries must not duplicate charges. A cancel/decline returns to editable amount selection; pending means pending, not failure. A succeeded payment links to an access-controlled receipt; a guest receipt uses a short-lived opaque authorization mechanism, not an enumerable ID. Failed email delivery does not undo payment, and has a retry path. If provider eligibility/beneficiary readiness is not established, show funding unavailable and practical-help alternatives. Never collect card details in the prototype.

## F03 — Personal sign-in and onboarding

`sign-in/sign-up -> check-email -> server auth callback -> onboarding (first time) -> intended destination`.

Use one human identity. Link expiry, resend cooldown, offline and invalid email have explicit states. Avoid account-enumerating copy. Callback validation must use an allowlisted local return path, not a user-controlled external redirect. A completed sign-in should restore the selected case/create intention, not dump the user at a generic dashboard. Profile city/language can be completed without creating an organization. The prototype's 'preview email step' does not send email or establish a session.

## F04 — Create or join an organization

`account/onboarding -> organization-new -> workspace -> verification -> payouts (only after processor approval)` or `invitation -> sign-in -> invitation -> workspace`.

The human becomes an owner only of the organization they actually create. Clinic/store/organization is an entity type, not a privilege. Invites declare the role and expire. Wrong-account, revoked invite and already-accepted states are handled without role escalation. Verification documents stay private. Rejecting verification must explain corrections and must not delete the organization's drafts. Payout readiness is separate from public profile creation and content review. Switching identities must visibly change the author and server-side permission context.

## F05 — Publish an animal case

`create -> create-basics -> create-story -> create-funding -> create-review -> create-status -> manage-fundraiser`.

Select acting identity and 'animal case'. Enter animal/group, species, need, approximate location, responsible carer and true story. Add original photos and any private supporting records. Choose money, practical help or both; foster-only cases skip financial amounts. Review public fields separately from private evidence. Draft saving is persistent and versioned. Contributor submits to an authorized manager; owner/manager submits to platform moderation. Submission is not publication and publication is not permission to accept money.

On validation errors keep all inputs and focus the first invalid field. Upload failure does not clear the story. A session expiry retains the draft and returns to the same step after login. Save conflict offers reload/compare instead of silently overwriting another editor. Back preserves values. Exiting offers save/discard appropriately, never a fake 'saved' toast before persistence.

## F06 — Publish the winter-shelter campaign

Same wizard, with 'campaign' selected. Budget collects actual shelter count, material costs, placement/maintenance plan, responsible organizer, evidence and shortfall/surplus handling. Ask for the owner's real target rather than importing a generated amount. Related cases may be linked with authorization, but money enters exactly one fundraiser ledger. Review includes approximate versus private locations, beneficiary readiness and the actual use-of-funds statement. After approval, share the canonical campaign page; after construction, post dated photographs and redacted receipts.

## F07 — Help without donating

`case -> offer-help -> sign-in when needed -> offer-help -> help-sent -> notifications`.

Offer food, materials, transport or foster help. Explain who receives contact details and obtain consent. No precise animal-location data is automatically sent. Submission means an offer was delivered, not that transport/foster placement is approved. Allow cancellation and communicate acceptance/decline. Urgent animal welfare cases need a real local emergency contact workflow; Pawtreon must not imply that posting a form dispatches rescuers.

## F08 — Save, follow and manage personal activity

Saving while signed out preserves the intended item through login. Saves and follows are distinct: saving does not automatically subscribe to email. `account -> saved/donations/notifications/settings` provides private activity and clear empty states. Opening a saved resolved item shows resolved status. Donation history reflects trusted processor states, with refunds/disputes visible. Sensitive changes and deletion requests require recent authentication and a reviewed retention policy.

## F09 — Organizer operations

`workspace -> manage-list -> manage-fundraiser -> update-editor -> public updates`.

Show the active personal/org identity and role. Owners/managers edit/publish; contributors prepare permitted drafts. Posting an update validates author rights and separates public media from private receipts. Resolving or pausing an item updates discovery and the donation CTA; it does not erase the ledger. Budget edits after donations require a reason and public change history. Team changes re-check authorization and prevent loss of the last owner. Payout page explains each state and delegates sensitive collection to the approved provider.

## F10 — Review and report

`report -> acknowledgement`; reviewer uses `review-queue/admin-reports -> review-detail -> decision -> organizer notification -> corrections`.

Protect reporter identity. Content review, legal-entity verification and payment onboarding are separate decisions. Reviewer cannot approve their own campaign. Every decision needs actor, timestamp, reason and immutable audit history. Concurrent reviews need locking/version checks. Request-changes returns the organizer to the correct draft section. Suspensions halt further donations where required without hiding prior transactions. An appeal/contact route must be available. Public reporting is not a public accusation feed.

## F11 — Shared interaction requirements

Keyboard focus enters and exits sheets predictably; Escape and an explicit close button work. Mobile forms remain usable with the software keyboard. Back navigation restores scroll and values. Pending/loading states reserve layout, announce relevant changes and cannot resemble success. Retry preserves context. Offline writes do not masquerade as completed server actions. Long names and Bulgarian copy are tested at real viewport widths and 200% zoom.

## F12 — Start from an external source

`external URL -> source preview -> dedupe/canonical-match check -> create draft -> organizer/evidence review -> case/campaign`.

Pasting a supported external URL may prefill source title/text/media only where permitted. Keep source attribution and the original URL, do not import engagement counts, and show what was imported versus organizer-authored. If a canonical case already exists, route to it instead of creating a duplicate. Source import does not establish authorization, verification or payment readiness. The user must select the acting identity and complete the normal create/review steps. Sharing the resulting canonical Pawtreon URL out to third-party networks must not create another fundraiser.

## External/service routes, not visual pages

Auth callback, signed upload URL creation, donation session creation, provider webhooks, health/readiness and sitemap/robots are server endpoints. They need technical contracts/tests, not separate invented mobile mockups. Map tiles and checkout are provider surfaces and must not be recreated as fake payment functionality.

# Route and screen catalogue

Generated from `routes.json` by `node scripts/generate-design.mjs`. 53 screen contracts, including overlays and the not-found boundary. These are not all implemented production URLs. Product paths omit the /bg or /en prefix. Auth callbacks and payment webhooks are service endpoints, not visual pages.

| Screen | Planned path | Title | Access |
| --- | --- | --- | --- |
| [home](wireframes/index.html#home) | `/` | Cases near you | public |
| [campaigns](wireframes/index.html#campaigns) | `/campaigns` | Community campaigns | public |
| [search](wireframes/index.html#search) | `/search` | Search results | public |
| [map](wireframes/index.html#map) | `/map` | Help in your area | public |
| [case](wireframes/index.html#case) | `/cases/[slug]` | Help Misho recover | public |
| [campaign](wireframes/index.html#campaign) | `/campaigns/[slug]` | Winter homes for street cats | public |
| [case-updates](wireframes/index.html#case-updates) | `/cases/[slug]/updates` | Misho’s progress | public |
| [campaign-updates](wireframes/index.html#campaign-updates) | `/campaigns/[slug]/updates` | Shelters taking shape | public |
| [person](wireframes/index.html#person) | `/people/[handle]` | Personal organizer | public |
| [organization](wireframes/index.html#organization) | `/organizations/[slug]` | Organization profile | public |
| [offer-help](wireframes/index.html#offer-help) | `/cases/[slug]/help` | Offer practical help | signed-in |
| [help-sent](wireframes/index.html#help-sent) | `/cases/[slug]/help/status` | Your help offer | signed-in |
| [donate](wireframes/index.html#donate) | `/donate/[fundraiserId]` | Choose your contribution | public; provider eligibility gate |
| [donation-status](wireframes/index.html#donation-status) | `/donations/[donationId]/status` | Donation status | owner or expiring guest token |
| [receipt](wireframes/index.html#receipt) | `/donations/[donationId]/receipt` | Contribution receipt | owner or expiring guest token |
| [sign-in](wireframes/index.html#sign-in) | `/sign-in` | Welcome back | public |
| [sign-up](wireframes/index.html#sign-up) | `/sign-up` | Join Pawtreon | public |
| [check-email](wireframes/index.html#check-email) | `/auth/check-email` | Check your email | public |
| [auth-error](wireframes/index.html#auth-error) | `/auth/error` | This sign-in link expired | public |
| [onboarding](wireframes/index.html#onboarding) | `/onboarding` | How will you help? | signed-in |
| [organization-new](wireframes/index.html#organization-new) | `/organizations/new` | Create your organization | signed-in |
| [invitation](wireframes/index.html#invitation) | `/invitations/[token]` | Join a Pawtreon team | invited authenticated identity |
| [account](wireframes/index.html#account) | `/account` | Your Pawtreon | signed-in |
| [settings](wireframes/index.html#settings) | `/account/settings` | Account settings | signed-in |
| [saved](wireframes/index.html#saved) | `/account/saved` | Saved cases and campaigns | signed-in |
| [donations](wireframes/index.html#donations) | `/account/donations` | Your contributions | signed-in |
| [notifications](wireframes/index.html#notifications) | `/account/notifications` | Updates for you | signed-in |
| [create](wireframes/index.html#create) | `/create` | What needs help? | signed-in; return-to after auth |
| [create-basics](wireframes/index.html#create-basics) | `/create/[kind]/[draftId]/basics` | Start with the essentials | draft owner or contributor |
| [create-story](wireframes/index.html#create-story) | `/create/[kind]/[draftId]/story` | Tell their story | draft owner or contributor |
| [create-funding](wireframes/index.html#create-funding) | `/create/[kind]/[draftId]/funding` | Plan the help needed | draft owner or contributor |
| [create-review](wireframes/index.html#create-review) | `/create/[kind]/[draftId]/review` | Review before submitting | owner/manager publishes; contributor submits for review |
| [create-status](wireframes/index.html#create-status) | `/create/[kind]/[draftId]/status` | Submission status | draft owner or workspace member |
| [workspace](wireframes/index.html#workspace) | `/workspaces/[workspaceId]` | Organizer workspace | active workspace membership |
| [manage-list](wireframes/index.html#manage-list) | `/workspaces/[workspaceId]/fundraisers` | Your cases and campaigns | active workspace membership |
| [manage-fundraiser](wireframes/index.html#manage-fundraiser) | `/workspaces/[workspaceId]/fundraisers/[fundraiserId]` | Manage winter homes | scoped member; operation-specific role |
| [update-editor](wireframes/index.html#update-editor) | `/workspaces/[workspaceId]/fundraisers/[fundraiserId]/updates/new` | Share a progress update | owner/manager; contributor drafts |
| [payouts](wireframes/index.html#payouts) | `/workspaces/[workspaceId]/payouts` | Funding and payouts | owner/finance-authorized; recent auth |
| [members](wireframes/index.html#members) | `/workspaces/[workspaceId]/members` | Your team | owner; manager limited read |
| [verification](wireframes/index.html#verification) | `/workspaces/[workspaceId]/verification` | Organizer verification | owner or authorized manager |
| [workspace-settings](wireframes/index.html#workspace-settings) | `/workspaces/[workspaceId]/settings` | Workspace settings | owner/manager; operation-specific checks |
| [report](wireframes/index.html#report) | `/report?subject=[type:id]` | Report a concern | public with abuse prevention |
| [review-queue](wireframes/index.html#review-queue) | `/admin/reviews` | Review queue | platform reviewer; MFA/recent auth |
| [review-detail](wireframes/index.html#review-detail) | `/admin/reviews/[reviewId]` | Review a submission | assigned/authorized platform reviewer |
| [admin-reports](wireframes/index.html#admin-reports) | `/admin/reports` | Reported content | platform reviewer |
| [support](wireframes/index.html#support) | `/help` | Help and contact | public |
| [terms](wireframes/index.html#terms) | `/legal/terms` | Terms of use | public |
| [privacy](wireframes/index.html#privacy) | `/legal/privacy` | Privacy notice | public |
| [donation-policy](wireframes/index.html#donation-policy) | `/legal/donations` | Donation and funding policy | public |
| [not-found](wireframes/index.html#not-found) | `not-found.tsx` | We could not find this page | public |
| [filters](wireframes/index.html#filters) | `overlay: filters` | Find the right cause | public |
| [location](wireframes/index.html#location) | `overlay: location` | Choose your area | public |
| [share](wireframes/index.html#share) | `overlay: share` | Help others discover this | public |

# Per-screen contracts

## home — Cases near you

Path: `/`. Access: public. Template: home.

- Compact wordmark / Varna selector / account
- Search and species filters
- Winter-shelter campaign banner
- Sort and map control
- Animal-led two-column case cards

Actions: Open a case → case; Support winter homes → campaign; View map → map.

States: default, loading, empty, error, offline, permission-denied.

## campaigns — Community campaigns

Path: `/campaigns`. Access: public. Template: catalog.

- Search campaigns
- Need and location filters
- Featured winter initiative
- Campaign cards with organizer, goal and status

Actions: Open campaign → campaign; Create a campaign → create.

States: default, loading, empty, error, offline, permission-denied.

## search — Search results

Path: `/search`. Access: public. Template: search.

- Query field with clear action
- Shared species and advanced filter state
- Result count and sort
- Cases and campaigns distinguished in results

Actions: Open result → case; Adjust filters → filters; Map results → map.

States: default, loading, empty, error, offline, permission-denied.

## map — Help in your area

Path: `/map`. Access: public. Template: map.

- Manual city selection; permission only on request
- Coarse-area map and cluster pins
- Selected case preview sheet
- List/map switch with filters retained

Actions: Open selected case → case; Back to list → home; Choose city → location.

States: default, loading, empty, error, offline, location-denied.

## case — Help Misho recover

Path: `/cases/[slug]`. Access: public. Template: case.

- Animal gallery; status and need
- Named personal organizer and coarse area
- Raised / target if financial
- Story, budget and evidence summary
- Latest update; report link

Actions: Donate → donate; Help another way → offer-help; Read updates → case-updates; Organizer profile → person; Share → share; Report concern → report.

States: default, loading, error, offline, not-found, paused, resolved, funding-unavailable.

## campaign — Winter homes for street cats

Path: `/campaigns/[slug]`. Access: public. Template: campaign.

- Immersive cat photograph and editorial headline
- White sheet: organizer and campaign purpose
- Funding progress and itemized shelter budget
- Related cases and dated evidence-backed updates
- Optional approved coarse-area map

Actions: Support campaign → donate; See updates → campaign-updates; Organization profile → organization; Share → share; Report concern → report.

States: default, loading, error, offline, not-found, paused, completed, funding-unavailable.

## case-updates — Misho’s progress

Path: `/cases/[slug]/updates`. Access: public. Template: updates.

- Dated animal-care timeline
- Responsible author for each update
- Treatment progress and redacted spend evidence
- Resolved outcome shown without ongoing urgency

Actions: Back to case → case; Follow updates → sign-in.

States: default, loading, empty, error, offline, permission-denied.

## campaign-updates — Shelters taking shape

Path: `/campaigns/[slug]/updates`. Access: public. Template: updates.

- Construction and installation timeline
- Photos with dates and organizer attribution
- Materials spend and remaining work
- Budget changes explained transparently

Actions: Back to campaign → campaign; Follow campaign → sign-in.

States: default, loading, empty, error, offline, permission-denied.

## person — Personal organizer

Path: `/people/[handle]`. Access: public. Template: profile.

- Avatar, name and approximate service area
- Personal organizer label; accurate verification scope
- Active cases and campaigns
- Past outcomes and public updates

Actions: View case → case; View campaign → campaign; Report profile → report.

States: default, loading, empty, error, offline, permission-denied.

## organization — Organization profile

Path: `/organizations/[slug]`. Access: public. Template: profile.

- Logo, clinic/store/organization type
- Published contact details and intentional business location
- Named responsible team and verification scope
- Cases, campaigns and outcome updates

Actions: View campaign → campaign; View case → case; Report profile → report.

States: default, loading, empty, error, offline, permission-denied.

## offer-help — Offer practical help

Path: `/cases/[slug]/help`. Access: signed-in. Template: form.

- Choose food, materials, transport or foster help
- Describe availability and approximate area
- Private contact-consent statement
- Sent request is not an accepted placement

Actions: Send help offer (prototype) → help-sent; Back to case → case.

States: default, loading, empty, error, offline, permission-denied.

## help-sent — Your help offer

Path: `/cases/[slug]/help/status`. Access: signed-in. Template: status.

- Request status: submitted, seen, accepted or declined
- Organizer response expectations
- Cancel request / contact support
- No location or contact details publicly exposed

Actions: Return to case → case; View notifications → notifications.

States: default, loading, error, offline, permission-denied.

## donate — Choose your contribution

Path: `/donate/[fundraiserId]`. Access: public; provider eligibility gate. Template: donate.

- Recipient and supported case/campaign
- Suggested amounts plus custom amount
- Transparent total and fees; no prechecked tip
- Receipt email and public-name privacy
- Provider-hosted payment handoff; no card fields in prototype

Actions: Preview payment status → donation-status; Return to fundraiser → campaign.

States: default, loading, error, offline, funding-unavailable, invalid-amount, goal-reached.

## donation-status — Donation status

Path: `/donations/[donationId]/status`. Access: owner or expiring guest token. Template: status.

- Pending while server verifies the payment
- Confirmed outcome only from trusted provider event
- Failure/retry without creating duplicate charges
- Receipt and return links after success

Actions: Preview receipt → receipt; Return to campaign → campaign; Try another amount → donate.

States: pending, succeeded, failed, canceled, offline, not-found, permission-denied.

## receipt — Contribution receipt

Path: `/donations/[donationId]/receipt`. Access: owner or expiring guest token. Template: receipt.

- Recipient and case/campaign reference
- Amount/currency, fee treatment and date
- Provider transaction reference, no card secrets
- Receipt is not automatically a tax-deductibility certificate

Actions: View donation history → donations; Contact support → support; Return to campaign → campaign.

States: default, loading, error, permission-denied, not-found.

## sign-in — Welcome back

Path: `/sign-in`. Access: public. Template: auth.

- Email-link sign-in
- Optional supported social login after setup
- Return-to-route preserved
- No simulated authenticated production session

Actions: Preview email step → check-email; Create an account → sign-up.

States: default, submitting, invalid-email, rate-limited, error, offline.

## sign-up — Join Pawtreon

Path: `/sign-up`. Access: public. Template: auth.

- Name and email
- Terms/privacy acknowledgement separate from marketing
- One human account; organizations added after sign-in
- No mandatory donation to register

Actions: Preview email step → check-email; Already have an account → sign-in.

States: default, loading, empty, error, offline, permission-denied.

## check-email — Check your email

Path: `/auth/check-email`. Access: public. Template: status.

- Email-link instructions
- Resend cooldown and change-email option
- Expired-link recovery
- No account enumeration through errors

Actions: Preview verified onboarding → onboarding; Change email → sign-in.

States: default, resending, expired, rate-limited, error, offline.

## auth-error — This sign-in link expired

Path: `/auth/error`. Access: public. Template: status.

- Clear recovery without leaking account status
- Request a fresh link
- Restore intended destination after valid login

Actions: Request another link → sign-in; Browse cases → home.

States: expired, invalid-link, error, offline.

## onboarding — How will you help?

Path: `/onboarding`. Access: signed-in. Template: form.

- Personal profile basics
- Default city and language
- Optional create/join organization next
- Skip organization setup; no fundraising claim yet

Actions: Continue to account → account; Set up an organization → organization-new.

States: default, loading, empty, error, offline, permission-denied.

## organization-new — Create your organization

Path: `/organizations/new`. Access: signed-in. Template: form.

- Clinic / store / organization entity type
- Public name and service area
- Authority-to-represent declaration
- Verification and payout setup are separate next steps

Actions: Create workspace (prototype) → workspace; Use personal profile → account.

States: default, loading, empty, error, offline, permission-denied.

## invitation — Join a Pawtreon team

Path: `/invitations/[token]`. Access: invited authenticated identity. Template: status.

- Inviting organization and inviter
- Explicit role and permission summary
- Accept / decline; expiry and revoked state
- Confirm matching email without exposing other invitations

Actions: Accept invitation (prototype) → workspace; Decline and return → account.

States: default, expired, revoked, already-accepted, wrong-account, error.

## account — Your Pawtreon

Path: `/account`. Access: signed-in. Template: account.

- Personal identity and organization switcher
- Saved items, donations and notifications
- My cases/campaigns and draft access
- Settings and sign-out

Actions: Personal workspace → workspace; Saved items → saved; Donation history → donations; Notifications → notifications; Account settings → settings; Add organization → organization-new; Sign out (prototype) → home.

States: default, loading, empty, error, offline, permission-denied.

## settings — Account settings

Path: `/account/settings`. Access: signed-in. Template: form.

- Name, city and language
- Notification and privacy preferences
- Sensitive changes require recent authentication
- Export/delete request with financial-retention explanation

Actions: Save settings (prototype) → account; Read privacy policy → privacy.

States: default, loading, empty, error, offline, permission-denied.

## saved — Saved cases and campaigns

Path: `/account/saved`. Access: signed-in. Template: catalog.

- Cases/campaigns tabs
- Saved cards with current status
- Remove saved item without nested card buttons
- Useful empty state with browse link

Actions: Open saved case → case; Open saved campaign → campaign; Browse cases → home.

States: default, loading, empty, error, offline, permission-denied.

## donations — Your contributions

Path: `/account/donations`. Access: signed-in. Template: list.

- Donation history with amount and recipient
- Pending, paid, refunded and disputed states distinct
- Receipt access and support
- No public donor-email exposure

Actions: View contribution → donation-status; Open receipt → receipt; Donation policy → donation-policy.

States: default, loading, empty, error, offline, permission-denied.

## notifications — Updates for you

Path: `/account/notifications`. Access: signed-in. Template: list.

- Updates from followed cases
- Help-offer and moderation status changes
- Read/unread control
- Notification preferences and empty state

Actions: Read case update → case-updates; Open workspace → workspace; Preferences → settings.

States: default, loading, empty, error, offline, permission-denied.

## create — What needs help?

Path: `/create`. Access: signed-in; return-to after auth. Template: choice.

- Acting personal/organization identity
- Animal case: specific animal or small group
- Campaign: coordinated community initiative
- Existing resumable drafts

Actions: Start an animal case → create-basics; Start a campaign → create-basics; Resume draft → create-story.

States: default, loading, empty, error, offline, permission-denied.

## create-basics — Start with the essentials

Path: `/create/[kind]/[draftId]/basics`. Access: draft owner or contributor. Template: wizard.

- Step 1 of 4; acting identity and kind
- Animal/group name or campaign title
- Species, need and coarse location
- No automatic GPS publication

Actions: Save and continue → create-story; Save draft and exit → workspace.

States: default, loading, empty, error, offline, permission-denied.

## create-story — Tell their story

Path: `/create/[kind]/[draftId]/story`. Access: draft owner or contributor. Template: wizard.

- Step 2 of 4; values preserved on back
- Story, planned action and responsible person
- Photos, rights declaration and upload progress
- Private evidence is not public gallery media

Actions: Save and continue → create-funding; Save draft and exit → workspace.

States: default, uploading, upload-failed, validation-error, save-conflict, offline.

## create-funding — Plan the help needed

Path: `/create/[kind]/[draftId]/funding`. Access: draft owner or contributor. Template: wizard.

- Step 3 of 4; money, practical help, or both
- Budget rows and target in minor units
- Beneficiary readiness and private evidence
- No-money case skips target and shows help request

Actions: Review draft → create-review; Save draft and exit → workspace.

States: default, validation-error, upload-failed, beneficiary-not-ready, save-conflict, offline.

## create-review — Review before submitting

Path: `/create/[kind]/[draftId]/review`. Access: owner/manager publishes; contributor submits for review. Template: wizard.

- Step 4 of 4; public preview
- Budget, location privacy and acting identity
- Unresolved fields and processor readiness clearly listed
- Publishing agreements and honest review expectation

Actions: Submit for review (prototype) → create-status; Edit story → create-story; Save draft and exit → workspace.

States: default, validation-error, permission-denied, submitting, error, offline.

## create-status — Submission status

Path: `/create/[kind]/[draftId]/status`. Access: draft owner or workspace member. Template: status.

- Pending review, changes needed, published or rejected
- Specific actionable reviewer feedback
- Payment readiness remains separate from content approval
- Resume editing without duplicating a fundraiser

Actions: View in workspace → manage-fundraiser; Edit draft → create-story; Browse cases → home.

States: submitted, needs-changes, published, rejected, error, permission-denied.

## workspace — Organizer workspace

Path: `/workspaces/[workspaceId]`. Access: active workspace membership. Template: workspace.

- Acting identity switcher and role
- Cases/campaigns needing action; drafts
- Review and payout readiness without fake metrics
- Recent updates and tasks

Actions: Manage fundraisers → manage-list; Create new → create; Verification → verification; Payout settings → payouts; Team members → members; Workspace settings → workspace-settings.

States: default, loading, empty, error, offline, permission-denied.

## manage-list — Your cases and campaigns

Path: `/workspaces/[workspaceId]/fundraisers`. Access: active workspace membership. Template: list.

- Search and draft/published/resolved filters
- Status, need and organizer-owned totals
- Resume draft and manage published item
- Contributor restrictions visible but enforced server-side

Actions: Manage winter homes → manage-fundraiser; Resume draft → create-story; Create another → create.

States: default, loading, empty, error, offline, permission-denied.

## manage-fundraiser — Manage winter homes

Path: `/workspaces/[workspaceId]/fundraisers/[fundraiserId]`. Access: scoped member; operation-specific role. Template: workspace.

- Public preview and current status
- Budget, progress and review feedback
- Post update, edit with audit, pause or resolve
- Financial and evidence access by permission

Actions: Preview public campaign → campaign; Post an update → update-editor; Edit draft/details → create-basics; View payouts → payouts.

States: default, loading, empty, error, offline, permission-denied.

## update-editor — Share a progress update

Path: `/workspaces/[workspaceId]/fundraisers/[fundraiserId]/updates/new`. Access: owner/manager; contributor drafts. Template: form.

- Dated headline and truthful progress
- Photos and redacted expense evidence
- Public/private document distinction
- Preview before publishing

Actions: Publish update (prototype) → campaign-updates; Save and return → manage-fundraiser.

States: default, loading, empty, error, offline, permission-denied.

## payouts — Funding and payouts

Path: `/workspaces/[workspaceId]/payouts`. Access: owner/finance-authorized; recent auth. Template: workspace.

- Provider approval and beneficiary readiness
- Hosted onboarding; no bank-detail collection in prototype
- Pending/available/paid/refunded/disputed amounts separate
- Payout failure reasons and reconciliation history

Actions: Read funding policy → donation-policy; Contact support → support; Return to workspace → workspace.

States: not-ready, pending-verification, ready, held, failed, permission-denied, offline.

## members — Your team

Path: `/workspaces/[workspaceId]/members`. Access: owner; manager limited read. Template: form.

- Members and role descriptions
- Invite by email; expiry and revoke
- Prevent removing the last owner
- No contributor escalation through client fields

Actions: Preview invitation → invitation; Return to workspace → workspace.

States: default, pending-invite, expired, last-owner-blocked, permission-denied, error.

## verification — Organizer verification

Path: `/workspaces/[workspaceId]/verification`. Access: owner or authorized manager. Template: form.

- What verification does and does not mean
- Private organization/clinic supporting documents
- Review status and corrections
- Payout-provider verification is separate

Actions: Submit evidence (prototype) → workspace; Contact support → support.

States: not-started, submitted, reviewing, approved, needs-changes, rejected, expired, permission-denied.

## workspace-settings — Workspace settings

Path: `/workspaces/[workspaceId]/settings`. Access: owner/manager; operation-specific checks. Template: form.

- Name, entity type and service area
- Intentional public contacts; precise colony data never public
- Membership ownership changes protected
- Archive policy retains financial records

Actions: Save settings (prototype) → workspace; Preview profile → organization.

States: default, loading, empty, error, offline, permission-denied.

## report — Report a concern

Path: `/report?subject=[type:id]`. Access: public with abuse prevention. Template: form.

- Subject being reported
- Fraud, misleading evidence, animal welfare or privacy reason
- Optional private contact; no public accusation page
- Acknowledgement and review expectations

Actions: Preview report acknowledgement → support; Return to case → case.

States: default, loading, empty, error, offline, permission-denied.

## review-queue — Review queue

Path: `/admin/reviews`. Access: platform reviewer; MFA/recent auth. Template: admin.

- Submitted cases/campaigns and organizer evidence
- Assigned/unassigned filters and age
- Private evidence accessible only by role
- No public admin navigation

Actions: Open review → review-detail; Reported content → admin-reports.

States: default, loading, empty, error, permission-denied.

## review-detail — Review a submission

Path: `/admin/reviews/[reviewId]`. Access: assigned/authorized platform reviewer. Template: admin.

- Public preview beside restricted evidence
- Identity and factual evidence checks are separate
- Approve / request changes / reject with reason
- Immutable audit and no approval of own submission

Actions: Record review decision (prototype) → review-queue; View public preview → campaign.

States: default, locked, already-reviewed, permission-denied, error.

## admin-reports — Reported content

Path: `/admin/reports`. Access: platform reviewer. Template: admin.

- Triage by reason and severity
- Protect reporter identity
- Pause/remove with documented policy reason
- Appeal and audit history

Actions: Inspect subject → review-detail; Back to reviews → review-queue.

States: default, loading, empty, error, permission-denied.

## support — Help and contact

Path: `/help`. Access: public. Template: form.

- Donation, account and case help topics
- App is not an emergency response service
- Private support request, no public medical documents
- Response expectations and status reference

Actions: Preview request saved → account; Donation policy → donation-policy; Browse cases → home.

States: default, loading, empty, error, offline, permission-denied.

## terms — Terms of use

Path: `/legal/terms`. Access: public. Template: legal.

- Platform role, eligibility and acceptable content
- Organizer responsibilities and moderation/appeals
- Account suspension and jurisdiction
- Dated owner/legal-review placeholder; not approved legal text

Actions: Privacy notice → privacy; Donation policy → donation-policy; Return to help → support.

States: default, loading, empty, error, offline, permission-denied.

## privacy — Privacy notice

Path: `/legal/privacy`. Access: public. Template: legal.

- Data categories, purposes and lawful-basis review
- Private evidence, donor privacy and public location precision
- Processors, retention, rights and contact details
- Owner/legal review required before launch

Actions: Terms of use → terms; Account preferences → settings; Contact support → support.

States: default, loading, empty, error, offline, permission-denied.

## donation-policy — Donation and funding policy

Path: `/legal/donations`. Access: public. Template: legal.

- Recipient and processor; platform fee disclosure
- Refunds, disputes, unused funds and cancellation
- No guaranteed outcome or automatic tax deduction
- Provider approval and reviewed legal text required

Actions: Contact support → support; Return to campaign → campaign.

States: default, loading, empty, error, offline, permission-denied.

## not-found — We could not find this page

Path: `not-found.tsx`. Access: public. Template: status.

- Clear missing/removed/private-safe message
- No confidential reason leakage
- Recovery through search and discovery

Actions: Browse cases → home; Search → search.

States: not-found.

## filters — Find the right cause

Path: `overlay: filters`. Access: public. Template: sheet.

- Draft filter state separate from applied state
- Need, urgency, organizer type and radius
- Reset all / show results with honest count
- Cancel returns without applying changes

Actions: Apply filters (prototype) → search; Reset and browse → home.

States: default, loading, empty, error, offline, permission-denied.

## location — Choose your area

Path: `overlay: location`. Access: public. Template: sheet.

- Manual city search first
- Use location only after user request
- Denied permission keeps manual selection working
- Area radius never exposes colony coordinates

Actions: Use selected city → home; Cancel → home.

States: default, searching, empty, location-denied, offline.

## share — Help others discover this

Path: `overlay: share`. Access: public. Template: sheet.

- Native share when supported
- Copy canonical public URL with correct locale
- No private drafts/evidence/guest receipt tokens
- Confirmation only after copy succeeds

Actions: Return to campaign → campaign; Back to case → case.

States: default, copied, copy-failed.

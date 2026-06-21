# CyberFlipper Daily Authorized Security-Research Update — 2026-06-20

## Scope

This update is limited to authorized security research, defensive review, repository hygiene, firmware awareness, and lab-only documentation. It intentionally excludes credential collection, persistence, evasion, destructive payloads, unauthorized exploitation steps, access-control bypass instructions, cloned badge data, live RF transmission guidance, and code intended to compromise third-party systems.

## Repository review status

Target repository reviewed: `Fu-LLC/CyberFlipper`.

Publishing status: direct write and cross-repository PR creation to `Fu-LLC/CyberFlipper` require organization-side authorization for the GitHub integration. A safe update branch was prepared in the accessible fork/repository path for maintainer review.

Last local safe-pack baseline observed in the accessible mirror:

- Prior daily field pack added defensive notes, SD-card field cards, lab-only BadUSB documentation demos, NFC/LF RFID/Sub-GHz/IR review cards, and CyberFlipper visual assets.
- Prior pack safety posture remains appropriate: checklist/demo content only, no host modification beyond normal text entry, and no live access-control material.

## Upstream watch summary

### UberGuidoZ/Flipper — main branch

Recent visible commits on `main`:

- 2026-06-06 — merge pull request #683 from RogueMaster/main (`29117c7`).
- 2026-06-04 — RogueMaster FAP Updates API v87.2 (`9e4fae2`).
- 2026-06-04 — RogueMaster FAP Updates API v87.2 README (`8f0a1cb`).
- 2026-05-26 — merge pull request #682 from RogueMaster/main (`6aeaa54`).
- 2026-05-26 — module update / FAP update commits (`7cc946a`, `99eaad2`).

Defensive relevance:

- Track FAP API compatibility before importing or documenting third-party app bundles.
- Treat prebuilt app files as untrusted artifacts until provenance, source linkage, and expected permissions are reviewed.
- Add a release gate that separates documentation-only additions from executable artifacts.

### DarkFlippers/unleashed-firmware — dev branch

Recent visible commits on `dev`:

- 2026-05-23 — changelog update (`c5bcab3`).
- 2026-05-09 — changelog update (`44ff715`) and FAAC SLH hotfix (`41628a4`).
- 2026-05-04 — changelog update (`91f4ef9`) and forced build parameter update (`09fc864`).
- 2026-05-03 — `canvas_buffer` API addition (`daec03b`).
- 2026-04-30 — raw protocol duplicate-code cleanup (`bcbb1b5`).

Defensive relevance:

- Treat rolling `dev` firmware as review material, not a production baseline.
- Require human approval for protocol, radio, access-control, NFC, RFID, or GPIO behavior changes.
- Prefer documentation of risk controls over importing protocol implementations.

## Official firmware and documentation watch

Official Flipper documentation continues to describe Flipper Zero as a small multi-tool focused on access-control-system interaction and Flipper One as a portable Linux computer/network-analysis platform. For CyberFlipper, this means the repository should keep a clear boundary between education, defensive validation, and material that could be misused against third-party systems.

Official firmware release notes observed in the current review include:

- Firmware 1.4.3: bugfix release following 1.4.2, including an Infrared CLI plugin import fix.
- Firmware 1.4.2: NFC CLI improvements, FeliCa and MIFARE Ultralight C improvements, added Sub-GHz protocols, BLE pairing-security improvements, JS GUI binding improvements, Infrared remote database expansion, BadUSB key-combo fixes, HID mouse-button configuration, CLI command handling improvements, iButton TM01x support, and LF RFID animal-tag country display.

CyberFlipper impact:

- Add BLE pairing reset guidance to defensive review cards.
- Add NFC CLI handling to the human-approval queue before documenting any low-level workflows.
- Keep BadUSB content to benign local typing/checklist demonstrations only.
- Treat new Sub-GHz protocol documentation as policy/risk review material unless explicit authorization and jurisdictional review exist.

## Defensive threat-intelligence triage

CISA KEV review remains relevant for prioritizing lab-system patch posture and CI runner hardening. The direct CISA KEV catalog should be checked manually when the catalog cannot be fetched automatically. Current public reporting highlights active exploitation pressure around Linux kernel local privilege-escalation issues and network-edge products. CyberFlipper should treat this as CI/lab-host hardening input, not payload content.

Recommended defensive actions:

- Patch lab Linux hosts, CI runners, and build containers promptly.
- Record kernel version, distribution, and patch date in the lab asset register.
- Restrict local shell access on shared lab hosts.
- Prefer ephemeral build runners for third-party firmware/app review.
- Do not store real access-control identifiers, badge dumps, secrets, RF captures from third-party systems, or private keys in the repository.

## Safe repository update candidates

Prepared update set:

- Daily authorized security-research update.
- Upstream firmware watch note.
- Defensive lab-host hardening note.
- Lab-only payload review checklist.
- Human approval queue for protocol-sensitive or deployment-sensitive changes.

## Human approval required before publishing or deployment

Human approval is required for:

- Any executable firmware or app binary.
- Any low-level NFC/RFID/Sub-GHz protocol example beyond passive inventory language.
- Any BadUSB script that launches programs, changes settings, downloads files, opens network connections, handles credentials, or modifies system state beyond normal text entry.
- Any GPIO procedure involving external hardware that could damage devices or bypass controls.
- Any real-world RF transmission test outside a shielded or authorized environment.
- Any claim that a specific third-party device, badge system, alarm, lock, vehicle, or facility is vulnerable.

## Safe next-step recommendations

- Maintain a clear `docs/daily/` trail with source URLs and review decisions.
- Add a `HUMAN_APPROVAL_REQUIRED` marker for sensitive protocol or payload areas.
- Keep lab payloads as documentation cards, not operational scripts.
- Separate educational references from deployable code.

# CyberFlipper Daily Authorized Security-Research Update — 2026-06-24

## Scope

This update is documentation-only and intended for authorized security research, defensive review, and lab governance. It does not add exploit code, credential-handling workflows, persistence, evasion, destructive behavior, third-party compromise steps, or unauthorized RF/NFC/RFID/IR material.

## Repository review notes

Reviewed target repository: https://github.com/Fu-LLC/CyberFlipper

The visible README includes safety-relevant claims that should be reviewed before public release or SD-card packaging:

- BadUSB content is described as CVE payload material and high-speed injection material.
- Protocol folders are described as containing NFC dumps, hotel keys, Sub-GHz gate/vehicle signals, brute-force sets, RFID dumps, and U2F assets.
- Several external-tool references are framed as offensive workflows rather than defensive training.

Recommended repository posture:

1. Replace public-facing offensive wording with authorized-lab, defensive-validation, and policy-review language.
2. Treat any real RF/NFC/RFID/IR capture, cloned credential, hotel-key, gate-code, vehicle-signal, access-card, or U2F secret material as prohibited for public packaging unless counsel and asset owner approval are documented.
3. Keep BadUSB examples limited to visible text-entry demonstrations, inventory prompts, and safety checklists.
4. Require human approval before importing third-party firmware, protocol dictionaries, payload repositories, or binary application bundles.

## Upstream comparison summary

### UberGuidoZ/Flipper main

Latest visible upstream activity reviewed at https://github.com/UberGuidoZ/Flipper/commits/main/

- 2026-06-06: `29117c7` — Merge pull request #683 from RogueMaster/main.
- 2026-06-04: `9e4fae2` — RM FAP UPDATES API v87.2.
- 2026-06-04: `8f0a1cb` — RM FAP UPDATES API v87.2 README.
- 2026-05-26: additional RogueMaster merge and module/FAP update activity.

Defensive interpretation: treat these as provenance and compatibility signals only. Do not import FAP binaries, payload trees, or submodule updates without license review, source review, and safety review.

### DarkFlippers/unleashed-firmware dev

Latest visible upstream activity reviewed at https://github.com/DarkFlippers/unleashed-firmware/commits/dev/

- 2026-05-23: `c5bcab3` — changelog update.
- 2026-05-09: `44ff715` — changelog update.
- 2026-05-09: `41628a4` — FAAC SLH hotfix.
- 2026-05-08: `466c923` — changelog update.

Defensive interpretation: protocol-sensitive firmware changes should be summarized for awareness, not copied into CyberFlipper without human approval. Any mention of rolling-code, access-control, or protocol-emulation behavior needs legal and owner-authorization review.

## Official firmware baseline

Reviewed official firmware release page: https://github.com/flipperdevices/flipperzero-firmware/releases

- Latest visible release: 1.4.3, a bugfix release for Flipper Zero Firmware 1.4.2, with an Infrared CLI plugin MissingImports fix.
- Firmware 1.4.2 remains the broader review baseline because it introduced or changed NFC CLI functionality, Sub-GHz protocol support, BLE pairing security guidance, JavaScript UI bindings, infrared remote updates, BadUSB key-combo handling, HID Remote autoclicker configuration, CLI behavior, buzzer command, iButton support, and LF RFID display improvements.

CyberFlipper action: maintain compatibility notes for SD-card content and documentation. Do not claim compatibility with community firmware builds unless tested on a clean lab device and reviewed by a human maintainer.

## Defensive source digest

Sources reviewed for this update:

- CISA Known Exploited Vulnerabilities catalog landing page: https://www.cisa.gov/known-exploited-vulnerabilities-catalog
- CISA KEV CSV feed: https://www.cisa.gov/sites/default/files/csv/known_exploited_vulnerabilities.csv
- CISA KEV JSON feed: https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json
- Reuters coverage of accelerated CISA vulnerability remediation timelines, 2026-06-10: https://www.reuters.com/legal/litigation/us-shortens-cyber-fix-window-three-days-ai-threats-rise-2026-06-10/
- Wired coverage of the June 2026 CISA directive: https://www.wired.com/story/cisa-ai-vulnerability-directive
- Official Flipper firmware releases: https://github.com/flipperdevices/flipperzero-firmware/releases
- UberGuidoZ commit stream: https://github.com/UberGuidoZ/Flipper/commits/main/
- DarkFlippers Unleashed dev commit stream: https://github.com/DarkFlippers/unleashed-firmware/commits/dev/

CISA access note: CISA KEV page/feed access returned 403/Internal Error from the browser path during this run. Do not publish a claim about newly added KEV entries until a human verifies the KEV catalog directly.

## Detection and mitigation guidance

- USB HID: monitor for unexpected keyboard-device enumeration, scripted high-volume keystrokes, and helpdesk reports of unauthorized typed commands. Mitigate with device-control policy, port control, user training, and locked screens when unattended.
- RF/NFC/RFID/IR: maintain asset inventories for remotes, badges, test cards, and lab signal sources. Remove real access-control dumps or signal captures from public releases.
- Firmware/tooling provenance: require checksums, source review, license review, and reproducible build notes before packaging community firmware assets or FAP files.
- Vulnerability triage: use KEV presence, vendor advisory status, internet exposure, EPSS/CVSS context, business criticality, and compensating-control evidence. Do not auto-generate payloads from CVE lists.

## Lab-only authorized testing examples

Allowed examples for this repository:

- Text-only BadUSB cards that type scope reminders, inventory prompts, incident-note templates, and device-control checklists.
- Defensive review worksheets for NFC/RFID/Sub-GHz/IR that record asset owner, test date, authorization boundary, and disposition.
- Compatibility notes for firmware/API changes that do not include working bypass, cloning, brute-force, or unauthorized-emulation instructions.

Disallowed examples:

- Payloads that collect secrets, alter security controls, establish persistence, evade detection, damage systems, exfiltrate data, or interact with third-party systems without written authorization.
- Real access-control material, cloned card data, gate/vehicle signals, hotel-key material, or private U2F assets.
- Detailed exploitation workflows for newly exploited CVEs.

## Human approval required before publication

Human approval is required for:

- Any claim that a specific CVE is newly in CISA KEV.
- Any third-party firmware import or FAP binary import.
- Any protocol-sensitive note involving access-control, rolling-code, RFID/NFC dumps, IR control sets, or Sub-GHz transmissions.
- Any BadUSB material beyond visible text-entry documentation.
- Any public release that references real devices, organizations, facilities, signal captures, or credential-like artifacts.

# CyberFlipper Daily Authorized Security-Research Update — 2026-06-22

## Scope

This update is documentation-only material for authorized CyberFlipper research, classroom labs, owned hardware, administered systems, and written-scope client work. It does not import firmware, signal captures, secrets, access-control data, exploit code, or third-party payloads.

The repository posture remains consistent with the root README: CyberFlipper content should be public-safe, reversible, logged, and useful for defensive education.

## Executive summary

No safe-to-import code changes were identified for automatic merge from the reviewed upstream projects today. Recent upstream activity is still relevant for review, but it should remain in a human-approved documentation lane until maintainers confirm licensing, provenance, jurisdiction, and safety impact.

Primary action for this update: add daily review notes, defensive breakdowns, detection/mitigation guidance, hardware/firmware review gates, and a lab-only payload publication gate.

## Upstream watch summary

### UberGuidoZ/Flipper `main`

Recent visible commits include:

- 2026-06-06: `29117c7` — Merge pull request #683 from RogueMaster/main.
- 2026-06-04: `9e4fae2` — RM FAP UPDATES API v87.2.
- 2026-06-04: `8f0a1cb` — RM FAP UPDATES API v87.2 README.
- 2026-05-26: `6aeaa54`, `7cc946a`, `99eaad2` — RogueMaster merge/module/FAP update activity.

CyberFlipper handling: treat as compatibility and provenance material only. Do not import binaries, app bundles, submodule payload packs, or community scripts without maintainer review.

Source: https://github.com/UberGuidoZ/Flipper/commits/main/

### DarkFlippers/unleashed-firmware `dev`

Recent visible commits include:

- 2026-05-23: `c5bcab3` — changelog update.
- 2026-05-09: `44ff715` — changelog update.
- 2026-05-09: `41628a4` — FAAC SLH hotfix.
- 2026-05-04: `09fc864` — force build params.
- 2026-05-03: `daec03b` — add `canvas_buffer` to API.
- 2026-04-30: `bcbb1b5` — remove duplicate code from raw protocol.

CyberFlipper handling: mark protocol-sensitive, build-configuration, raw-protocol, and access-control-adjacent items for human approval before any public summary beyond defensive review notes.

Source: https://github.com/DarkFlippers/unleashed-firmware/commits/dev/

### Official Flipper firmware reference

The official `flipperdevices/flipperzero-firmware` release feed remains the safest baseline for public compatibility notes. Version `1.4.3` is presented as an Infrared CLI plugin bugfix release, while `1.4.2` includes broader NFC, Sub-GHz, BLE pairing-security, JavaScript GUI, Infrared, BadUSB, HID Remote, CLI, iButton, and LF RFID changes.

Source: https://github.com/flipperdevices/flipperzero-firmware/releases

## Defensive breakdown

### USB HID / BadUSB lane

Safe publication level:

- Allowed: consent banners, visible training text, scope reminders, manual checklists, device-inventory prompts, and incident-note templates.
- Human approval required: any sequence that opens system tools, changes settings, invokes shells, launches interpreters, downloads content, automates authentication flows, or interacts with sensitive applications.
- Blocked: credential handling, persistence, stealth, evasion, destructive actions, unauthorized execution, or third-party compromise workflows.

Defensive notes:

- Treat unexpected keyboard enumeration as a physical-security event.
- Document USB device policy by lab zone.
- Prefer locked screens, device-control policy, and user-awareness training for public/shared systems.
- For demonstrations, require a disconnected or purpose-built lab host.

### NFC / LF RFID lane

Safe publication level:

- Allowed: owned test tags, blank training tags, anatomy diagrams, risk notes, and inventory templates.
- Human approval required: any captured card data, facility-specific formats, card-reader behavior, sector/key discussion, or emulation guidance.
- Blocked: access-control bypass, credential cloning, real badge material, or stepwise instructions against live systems.

Defensive notes:

- Maintain an inventory of authorized test tags separate from production badges.
- Record technology type, owner, test purpose, and retention period.
- Redact identifiers before publication.
- Use modern access-control controls, revocation processes, and badge lifecycle reviews.

### Sub-GHz / RF lane

Safe publication level:

- Allowed: passive ethics notes, legal-frequency references, lab inventory, receive-only classroom observations, and mitigation checklists.
- Human approval required: protocol-specific claims, raw captures, replay/emulation material, region-sensitive references, antenna modifications, and any external module notes.
- Blocked: unauthorized transmission, public-space interference, or instructions for opening/controlling third-party devices.

Defensive notes:

- Keep RF work inside authorized lab plans.
- Separate receive-only documentation from transmit-capable workflows.
- Review regional frequency rules and facility policy before publishing.

### Infrared lane

Safe publication level:

- Allowed: owned meeting-room A/V inventories, remote replacement records, and troubleshooting notes.
- Human approval required: public-space automation, large-scale control scripts, or high-impact operational environments.
- Blocked: disruption of public displays, classrooms, venues, healthcare, transport, or safety equipment.

Defensive notes:

- Track remotes and document owner-approved replacement workflows.
- Lock or supervise shared A/V control points in public rooms.
- Keep public examples limited to inventory and maintenance documentation.

## Detection and mitigation priorities

1. Add or maintain a USB HID physical-access response checklist.
2. Keep lab Flipper SD-card payload folders separated from public website content.
3. Require source provenance and license review for community firmware/tooling references.
4. Require redaction review for screenshots, signal metadata, NFC/RFID notes, and hardware photos.
5. Do not publish live RF/NFC/RFID/IR artifacts unless they are synthetic, owned, and approved.
6. Keep CISA KEV workflow references defensive: patch triage, asset matching, owner assignment, and remediation evidence only.

## Human approval required before publication

- Any direct import from UberGuidoZ, RogueMaster, DarkFlippers, Unleashed, Xtreme, or similar community firmware/tooling sources.
- Any discussion that could enable protocol misuse beyond defensive policy language.
- Any lab artifact derived from real cards, keys, remotes, RF captures, device identifiers, hostnames, user names, or customer environments.
- Any USB HID material beyond visible text-entry documentation and scope reminders.
- Any claim about newly added CISA KEV entries unless verified directly against the official catalog/feed.

## Release decision

Recommended disposition: publish documentation-only update after maintainer review. Do not merge payload expansions, firmware imports, protocol datasets, or live artifacts without explicit human approval.

# Human Approval Gate — 2026-06-20

This file marks items that must not be published, merged into a release, or deployed to a Flipper SD-card pack without explicit human approval.

## Items requiring approval

### NFC password/authenticator display

Observed upstream: DarkFlippers commits `1f6a061` and `968bf30` surface captured MIFARE Ultralight / NTAG PWD and PACK material in additional UI views.

Approval requirement:

- Confirm all samples use synthetic lab tags only.
- Redact authenticator material from screenshots, issue templates, documentation, demos, and logs.
- Do not include real badge, facility, employee, visitor, or production-card material.

### LF RFID write/wipe notes

Observed upstream: DarkFlippers changelog references T5577 blanking/read-back verification.

Approval requirement:

- Keep repository content at policy/checklist level unless testing uses blank lab media.
- Do not include instructions intended to alter third-party cards or access-control credentials.

### Sub-GHz transmit-capable workflows

Observed upstream: DarkFlippers changelog references a Sub-GHz endless-transmit fix and protocol additions.

Approval requirement:

- Document country/region, frequency range, device owner, enclosure or isolation approach, and test objective.
- Do not publish replay, brute-force, or unauthorized transmit examples.

### Binary application intake

Observed upstream: UberGuidoZ `29117c7` merges a RogueMaster application bundle containing many prebuilt `.fap` files.

Approval requirement:

- Prefer source builds.
- Record hashes, licenses, upstream SHAs, toolchain, and reviewer.
- Quarantine apps related to RF, Wi-Fi, BLE, NRF24, ESP, HID, or network functions until reviewed.

### Lab-only keystroke documentation

Approval requirement:

- Scripts may type visible local text markers or checklists only.
- No shell launch, no network access, no filesystem collection, no security-setting changes, no persistence, no hidden behavior.

## Release decision

Default decision: HOLD from production release until review owner signs off.

Reviewer:
Date:
Decision:
Notes:

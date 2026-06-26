# CyberFlipper Daily Authorized Security-Research Update — 2026-06-25

## Scope

This update reviews CyberFlipper as a defensive, educational, SD-card content project for authorized lab use only. It does not add exploit code, credential-access workflows, persistence, evasion, destructive behavior, unauthorized RF/NFC/RFID replay material, or instructions for compromising third-party systems.

## Repository review notes

The upstream Fu-LLC README remains the primary publication-risk item. It includes high-risk framing around protocol vectors, BadUSB payloads, RF captures, RFID/NFC dumps, brute-force sets, phishing emulation, and third-party payload repositories. Before publication, those references should be rewritten as defensive inventory, risk-review, detection, and lab-governance material.

Recommended README edits for human review:

- Replace “attack / capture simulation capabilities” language with “authorized lab review capabilities.”
- Replace “payload” claims with “training cards” or “documentation-only examples” unless a reviewer verifies the exact files are inert.
- Remove or quarantine any references to real gate codes, vehicle signals, hotel keys, access cards, brute-force sets, or credential-oriented tooling.
- Clearly state that qFlipper SD-card copy is the only supported installation path and that firmware flashing is out of scope.
- Add a release gate requiring review of all BadUSB, Sub-GHz, NFC, LF RFID, infrared, GPIO, and U2F material before distribution.

## Upstream comparison summary

### UberGuidoZ/Flipper main

Latest visible activity reviewed on the public commit page:

- 2026-06-06: merge from RogueMaster main, short SHA `29117c7`.
- 2026-06-04: RogueMaster FAP API v87.2 updates, short SHAs `9e4fae2` and `8f0a1cb`.
- 2026-05-26 and earlier: module and submodule updates.

Defensive interpretation: treat these as compatibility and provenance signals only. Do not copy app bundles, firmware-linked binaries, or payload collections into CyberFlipper without a manual license, safety, and functionality review.

### DarkFlippers/unleashed-firmware dev

Latest visible activity reviewed on the public commit page:

- 2026-05-23: changelog update, short SHA `c5bcab3`.
- 2026-05-09: changelog update and FAAC SLH hotfix references, short SHAs `44ff715` and `41628a4`.
- 2026-05-04 to 2026-04-30: build parameter, API, and raw protocol cleanup references.

Defensive interpretation: protocol-specific firmware changes require human approval before any mention in public CyberFlipper docs. The safe default is to document review questions, not operational procedures.

## Defensive source digest

- CISA KEV should be used as a triage and prioritization source, but the official CISA pages returned HTTP 403 during this run. No new KEV entries are claimed in this update.
- Official Flipper documentation should remain the baseline for describing legitimate device functions.
- Community firmware/tooling discussions are useful for compatibility awareness, but community packages should not be imported without reviewer approval.
- Educational examples should be limited to non-destructive, visible text-entry, checklist, inventory, and detection/mitigation material.

## Human approval required before publishing

- Any reference to live RF/NFC/RFID/IR artifacts or protocol captures.
- Any BadUSB/HID file beyond visible text-entry training.
- Any import from third-party payload repositories.
- Any statement claiming a newly added CISA KEV item.
- Any claim that a firmware change, FAP API change, or community module is supported by CyberFlipper.
- Any public release zip containing real-world signal, access-card, remote-control, or credential-adjacent data.

## Safe daily action

This update adds documentation-only review material, a mitigation checklist, a hardware/firmware review note, a lab-only HID training card, and a human approval queue. No executable or operational payloads are introduced.

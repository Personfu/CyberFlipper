# Hardware and Firmware Review Notes — 2026-06-25

## Review objective

Keep CyberFlipper aligned with authorized research, defensive education, and safe SD-card content distribution. This file is not a firmware flashing guide and does not provide operational procedures for third-party systems.

## Hardware capability framing

CyberFlipper documentation should describe hardware interfaces as review surfaces, not attack surfaces.

| Area | Safe framing | Prohibited framing |
| --- | --- | --- |
| USB HID | Lab text-entry training and endpoint-control validation | Host compromise, shell launch, credential capture, persistence |
| Sub-GHz | Inventory, authorization, frequency-policy review | Real-world replay, brute-force, gate/vehicle/control-system operation |
| NFC | Synthetic lab-tag education and access-control risk discussion | Real card dumps, keys, payment/access/transit/hotel artifacts |
| LF RFID | Synthetic tag inventory and physical-security awareness | Facility badge cloning or copied identifiers |
| Infrared | Consent-based remote inventory and AV-support review | Facility-specific control datasets or safety-system commands |
| GPIO | Bench education, voltage safety, and peripheral inventory | Covert bridges, unsafe wiring, or unauthorized peripheral control |
| U2F | Defensive authentication education | Any bypass or account-compromise workflow |

## Firmware review checkpoints

Before any firmware-related update is published, a reviewer should confirm:

- Source repository, branch, commit, and tag are recorded.
- License compatibility is documented.
- Binary hashes are recorded if binaries are distributed.
- The update does not expand CyberFlipper into firmware flashing unless explicitly approved.
- All protocol-sensitive language is non-operational.
- Any FAP/API version claim is validated against source history.
- Any community firmware reference is clearly labeled as third-party and not endorsed as default.

## Upstream signals from today

- UberGuidoZ/Flipper main: June 2026 activity centers on RogueMaster merge/API update references. Treat as compatibility-watch material only.
- DarkFlippers/unleashed-firmware dev: latest visible activity is May 2026, including changelog, protocol-sensitive hotfix, build, API, and raw-protocol cleanup references. Treat protocol references as approval-gated.
- Official Flipper documentation remains the baseline for legitimate device capability descriptions.

## Release decision

Safe to publish:

- Documentation-only review notes.
- Defensive checklists.
- Human approval queues.
- Lab-only text-entry payload documentation.

Requires human approval:

- Firmware binaries.
- FAP bundles.
- Community firmware imports.
- Protocol datasets.
- Real-world signal or card artifacts.
- Anything described as a payload unless proven inert and lab-only.

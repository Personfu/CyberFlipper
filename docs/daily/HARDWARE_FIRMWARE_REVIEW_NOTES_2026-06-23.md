# Hardware and Firmware Review Notes — 2026-06-23

## Review objective

Document CyberFlipper hardware and firmware considerations for authorized defensive research without enabling unauthorized access, credential collection, destructive actions, or uncontrolled RF/NFC/RFID/IR testing.

## Hardware areas to review

| Area | Defensive review focus | Publishing rule |
| --- | --- | --- |
| USB HID / BadUSB | Consent banner, visible text entry only, host-owner approval | Publish only documentation demos, never host-modifying scripts. |
| Sub-GHz | Regulatory domain, test enclosure, owned devices, no replay material | Publish only governance notes and inventory templates. |
| NFC | Owned test cards, lab tags, evidence labeling, no access credentials | Publish only risk review and authorization cards. |
| LF RFID | Owned lab badges/tags, no facility access material | Publish only inventory and mitigation notes. |
| Infrared | Owned AV/HVAC lab devices, no disruption testing | Publish only inventory and change-control notes. |
| GPIO / add-ons | Electrical safety, provenance, voltage limits, firmware trust | Publish only wiring safety and review checklists. |
| SD card contents | File provenance, license review, hash manifest, removable-media handling | Publish only approved text assets and manifests. |

## Firmware baseline

Use official firmware and official documentation as the default baseline for compatibility. Community firmware should be handled as a separate research track and must not be recommended for deployment without explicit approval.

Minimum review requirements before any firmware-related publication:

- Identify exact firmware branch, tag, or commit.
- Record build source and build method.
- Record whether binaries were built from source or downloaded.
- Verify license compatibility.
- Run static review for documentation, payload, and protocol-sensitive files.
- Confirm that examples are limited to authorized lab workflows.

## Repository content review finding

The current Fu-LLC README uses several phrases that should be rewritten before publication because they could be read as offensive operational claims. Recommended remediation is to replace capability-forward wording with defensive governance language.

Preferred wording examples:

- Replace `attack / capture simulation capabilities` with `authorized lab review capabilities`.
- Replace `payload` with `training checklist` unless the file is executable and explicitly approved.
- Replace `intercept pipeline` with `protocol inventory and validation workflow`.
- Replace unrestricted wireless or access-control claims with `owned-device testing only`.

## Release-gate checklist

Before merge or public deployment, maintainers should confirm:

- All examples are documentation-only or visible text-entry only.
- No secrets, credentials, tokens, facility data, live card dumps, RF captures, or customer artifacts are committed.
- No third-party payload repository is vendored or mirrored.
- No community firmware feature is recommended as production guidance.
- Every protocol-sensitive statement is framed around consent, legal authorization, and lab boundaries.

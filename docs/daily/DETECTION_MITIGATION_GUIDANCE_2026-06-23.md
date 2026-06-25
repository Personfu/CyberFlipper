# Detection and Mitigation Guidance — 2026-06-23

## Purpose

This guidance helps defenders review environments where Flipper-like devices, USB HID automation, removable media, RF tools, NFC/RFID test gear, or community firmware may appear. It is written for authorized enterprise and lab settings.

## USB HID controls

Recommended defensive controls:

- Require explicit approval for unknown USB HID devices in sensitive work areas.
- Use endpoint controls that distinguish keyboards, storage, serial adapters, and composite devices.
- Log new USB device insertion events and correlate with console focus changes where policy allows.
- Prefer locked screens during demonstrations unless a user-opened text editor is the intended target.
- Restrict administrative shells on shared lab hosts.
- Maintain a lab host image for HID training that contains no credentials or sensitive data.

Safe alert criteria:

- Newly observed composite USB device on a sensitive host.
- Multiple rapid keyboard events immediately after device insertion.
- Human-readable checklist text appearing in a lab editor is acceptable when pre-authorized.
- Any host modification, network access, credential prompt, shell execution, or file retrieval attempt is a stop condition.

## Removable-media controls

Recommended controls:

- Hash and record approved SD-card packs.
- Keep signed manifests for training files.
- Review all `.txt`, `.sub`, `.nfc`, `.rfid`, `.ir`, binary, and app files before copying to devices.
- Exclude real access-control, remote-control, customer, facility, and production artifacts from the repository.
- Separate public documentation packs from private lab evidence.

## RF / NFC / RFID / IR controls

Recommended controls:

- Use owned lab devices and written authorization.
- Confirm regulatory domain and location restrictions before any RF activity.
- Keep transmit-capable testing inside approved lab windows and, where appropriate, shielded spaces.
- Store protocol review notes without live keys, live captures, facility identifiers, or replayable material.
- Record device owner, test purpose, test date, and approver.

## Firmware and tooling controls

Recommended controls:

- Use official firmware as the baseline unless a research exception is approved.
- Require source review before community firmware is flashed to a research device.
- Treat binary `.fap` files and packaged apps as untrusted until provenance is verified.
- Keep build logs and hashes for any approved firmware variant.
- Review third-party payload repositories as ecosystem references only; do not mirror or vendor them into CyberFlipper without approval.

## Incident response decision points

Escalate for human review when:

- A device appears on a production host without change approval.
- A training file contains shell commands, network access, encoded content, credential prompts, or host modification instructions.
- A protocol file appears to contain real access-control data.
- A community firmware import changes wireless, NFC, RFID, IR, HID, or GPIO behavior.
- Documentation language implies unrestricted testing, bypass, replay, or unauthorized access.

## Metrics for daily review

- New upstream commits reviewed.
- New repository files added.
- Binary artifacts added or removed.
- Protocol-sensitive files changed.
- HID documentation files changed.
- Human-approval queue items open.
- Public documentation items approved for release.

# Detection and Mitigation Guidance — 2026-06-25

## Purpose

This note converts CyberFlipper-relevant device capabilities into defensive monitoring and mitigation guidance. It is intended for authorized lab and enterprise security teams.

## USB HID / BadUSB risk controls

Detection ideas:

- Alert on newly attached USB HID keyboards on managed workstations.
- Correlate USB device arrival events with rapid command-entry behavior.
- Review endpoint logs for unexpected shell, script host, browser, or settings launches shortly after HID enumeration.
- Require physical-user confirmation for sensitive administrative workflows.

Mitigations:

- Use endpoint device control for unknown HID devices where operationally feasible.
- Apply least privilege to local users.
- Disable autorun-style assumptions and train users to report unexpected USB prompts.
- Keep lab examples limited to visible text entry into a benign editor.

Human approval gate:

- Any BadUSB file that opens a shell, browser, settings panel, network utility, downloader, interpreter, credential prompt, persistence location, or administrative tool requires rejection or formal exception review.

## Sub-GHz risk controls

Detection ideas:

- Treat unknown replay/capture files as sensitive artifacts.
- Maintain an inventory of authorized test remotes, lab receivers, and approved frequencies.
- Record lab location, time window, device owner, and authorization before testing.

Mitigations:

- Do not distribute real-world captures, brute-force sets, or access-control recordings.
- Prefer written review cards over signal files.
- Keep all protocol discussion at the level of defensive risk assessment unless explicitly approved.

Human approval gate:

- Any file derived from a real gate, vehicle, garage, industrial remote, alarm, or building-control system requires removal from public release.

## NFC / LF RFID risk controls

Detection ideas:

- Inventory all lab cards and tags with owner, purpose, and synthetic/non-production status.
- Separate synthetic training artifacts from real employee, facility, hotel, transit, payment, or access media.
- Audit repository paths for dumps, keys, card images, or copied identifiers.

Mitigations:

- Do not publish real card dumps, keys, identifiers, or facility artifacts.
- Use blank synthetic lab tags only.
- Publish templates and review questions instead of operational files.

Human approval gate:

- Any NFC/RFID material associated with real access, identity, payment, transportation, hotel, lock, or facility use requires removal or restricted handling.

## Infrared controls

Detection ideas:

- Review IR databases for sensitive facility-control context.
- Treat HVAC, conference-room, medical, lab, and safety-control references as operationally sensitive.

Mitigations:

- Keep public IR material limited to generic inventory and user-consent testing notes.
- Avoid publishing facility-specific command sets.

Human approval gate:

- Any IR profile tied to production building systems, medical devices, safety systems, or restricted spaces requires review.

## Firmware and app-package controls

Detection ideas:

- Track firmware source, branch, commit, build date, API level, and binary hash.
- Review changelog deltas before importing apps or modules.
- Record whether a package modifies RF, NFC, RFID, HID, GPIO, BLE, or storage behavior.

Mitigations:

- Do not import community firmware or FAP bundles automatically.
- Prefer documentation-only compatibility notes.
- Require reproducible builds and source review for any binary artifact.

Human approval gate:

- Any binary app, firmware image, or third-party module requires source, license, hash, and behavior review before release.

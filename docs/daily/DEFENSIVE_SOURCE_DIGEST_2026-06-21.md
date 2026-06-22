# Defensive Source Digest - 2026-06-21

This digest captures public sources that are suitable for defensive education and repository review. It deliberately avoids exploit reproduction, live misuse workflows, real identifiers, and third-party compromise instructions.

## CISA KEV usage pattern

Use CISA KEV as a triage trigger, not as a payload source.

Required internal fields for any KEV-derived note:

- CVE ID
- Product and vendor
- Date checked
- Asset owner
- Exposure statement
- Patch, mitigation, or exception decision
- Verification status
- Human approver

Do not include exploit steps, payloads, target lists, or environment-specific sensitive details.

Source: https://www.cisa.gov/known-exploited-vulnerabilities-catalog

## Firmware and tooling sources

Official firmware release notes are the preferred baseline for compatibility claims. Community firmware trees can be useful for issue discovery, API drift awareness, and lab comparison, but they require separate review before any content is copied.

Sources:

- https://github.com/flipperdevices/flipperzero-firmware/releases
- https://github.com/UberGuidoZ/Flipper/commits/main/
- https://github.com/DarkFlippers/unleashed-firmware/commits/dev/

## Public documentation sources

Flipper documentation confirms that the device supports USB HID-style Bad USB, NFC, LF RFID, Sub-GHz, and infrared functions. CyberFlipper public notes should convert these into authorized safety controls: consent checks, owner approval, inventory, data minimization, and test boundaries.

Sources:

- https://docs.flipper.net/zero/bad-usb
- https://docs.flipper.net/zero/sub-ghz/read
- https://docs.flipper.net/zero/nfc/read
- https://docs.flipper.net/zero/rfid/read
- https://docs.flipper.net/zero/infrared/read

## Detection and mitigation themes

- USB HID: require workstation lock policy, physical-port awareness, MDM/EDR alert review, and signed lab authorization.
- BLE pairing: re-pair lab devices when upstream release notes recommend it; document the date and device owner.
- NFC and LF RFID: replace legacy badge technologies where feasible; track revocation SLAs, visitor policy, and lost-badge procedures.
- Sub-GHz: document regional transmission constraints and keep public examples receiver-side unless an owner-approved test range is documented.
- Infrared: maintain device ownership records for classrooms, labs, and meeting rooms; avoid broad public-space control scenarios.
- Supply chain: review source, license, checksums, release signatures where available, and maintainer provenance before importing community content.

## Community examples policy

Community examples may be linked for context, but copying them into CyberFlipper requires:

1. License compatibility.
2. Safety review.
3. Removal of real-world identifiers.
4. Maintainer approval.
5. A short note explaining why the example is educational and authorized.

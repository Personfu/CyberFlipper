# Defensive Source Digest — 2026-06-22

## Source handling rule

This digest is for defensive prioritization and publication review. It is not a procedural guide for operating devices against third-party systems.

## CISA KEV

Official source attempted:

- https://www.cisa.gov/known-exploited-vulnerabilities-catalog
- https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json

Result: the browser received HTTP 403 responses from the official CISA pages during this run. Because the official catalog was not readable here, this update does not claim any newly added KEV entries.

Safe CyberFlipper use of KEV:

- Use KEV as a patch-triage and asset-owner assignment source.
- Record vendor, product, CVE, known exposure, responsible owner, due date, remediation evidence, and exception rationale.
- Do not turn KEV entries into public lab steps.
- Human approval is required before publishing claims about new KEV additions.

## Official Flipper firmware releases

Source: https://github.com/flipperdevices/flipperzero-firmware/releases

Review notes:

- `1.4.3` is described as a bugfix release for `1.4.2`, with an Infrared CLI plugin MissingImports fix.
- `1.4.2` includes broader feature and maintenance changes across NFC, Sub-GHz, BLE pairing security, JavaScript GUI bindings, Infrared, USB HID example handling, HID Remote, CLI, iButton, and LF RFID.
- The BLE pairing-security note is defensive and suitable for public checklist language: remove stale pairings and re-pair devices after affected firmware updates.

Safe CyberFlipper action:

- Track official firmware versions in a compatibility matrix.
- Keep examples synthetic and owned-lab only.
- Require review before describing any feature that touches access-control, radio, NFC/RFID, or host-input behavior.

## Upstream community firmware and tooling discussion

Sources:

- https://github.com/UberGuidoZ/Flipper/commits/main/
- https://github.com/DarkFlippers/unleashed-firmware/commits/dev/

Review notes:

- UberGuidoZ recent visible activity includes RogueMaster merge and FAP API update references.
- DarkFlippers recent visible activity includes changelog, build, API, and protocol-adjacent maintenance references.
- These sources are useful for compatibility watch and community awareness, but they should not be treated as automatically safe for public training content.

Safe CyberFlipper action:

- Record upstream commit IDs and dates.
- Do not copy third-party code or files without license/provenance review.
- Do not publish operational instructions derived from community firmware notes.

## Creator and public writeups

Recent public coverage notes that Flipper One is being discussed as a different class of device from Flipper Zero, with a Linux-oriented architecture, broader I/O, networking, and community development process. This matters to CyberFlipper because future content may need separate governance for Linux-capable tooling versus the smaller embedded Flipper Zero workflow.

Sources:

- https://www.theverge.com/tech/935202/flipper-devices-one-zero-wireless-multi-tool-linux-open-source-computer
- https://www.tomshardware.com/networking/flipper-one-computing-multitool-bristles-with-network-gpio-and-m-2-connectivity-new-keychain-device-is-also-a-fully-open-arm-linux-computer

Safe CyberFlipper action:

- Keep Flipper One notes as future hardware-governance planning only.
- Do not publish assumptions about final hardware, price, firmware, or release details without checking official sources.
- Require a separate approval gate before adding Linux/networking examples.

## Educational research references

Public academic work on USB security and firmware analysis remains useful for defensive framing.

Sources:

- FirmUSB: https://arxiv.org/abs/1708.09114
- The Impostor Among US(B): https://arxiv.org/abs/2211.01109
- Forensic log-based detection for keystroke-injection attacks: https://arxiv.org/abs/2302.04541

Safe CyberFlipper action:

- Use these sources to justify policy, logging, and physical-access controls.
- Do not reproduce attack procedures.
- Keep lab content limited to consent banners, training notes, and detection checklists.

## Publication checklist

Before publishing:

- Verify each URL still resolves.
- Confirm dates and commit IDs.
- Confirm no copied third-party content is embedded.
- Confirm no customer, facility, badge, radio, card, remote, host, or user identifier is present.
- Confirm any CISA KEV statement is independently verified from the official source.

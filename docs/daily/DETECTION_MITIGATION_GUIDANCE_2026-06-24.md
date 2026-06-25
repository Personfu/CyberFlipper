# Detection and Mitigation Guidance — 2026-06-24

## Purpose

This note converts CyberFlipper repository review findings into defensive controls. It is not an exploitation guide and does not include operational payloads.

## USB HID / BadUSB controls

Detection opportunities:

- New keyboard-class device enumeration on endpoints where the user did not intentionally attach a keyboard.
- Rapid typed sequences, repeated modifier-key combinations, or scripted window-management behavior.
- Shell, terminal, browser, or settings windows opened immediately after USB attach.
- Helpdesk reports of unexpected typed text or commands.

Mitigations:

- Use device-control policy to restrict new HID devices on sensitive workstations.
- Enforce screen lock and session lock when hosts are unattended.
- Require lab hosts for HID testing; never test against production endpoints.
- Keep CyberFlipper BadUSB examples limited to visible text-entry checklists and inventory forms.
- Require review before publishing any file that launches programs, changes settings, invokes interpreters, or touches network resources.

## RF / Sub-GHz controls

Detection opportunities:

- Unexpected wireless-control failures, replay-like behavior, or repeated remote-control events.
- Unknown remotes, receivers, or handheld RF tools in controlled areas.
- Public repository content containing real gate, vehicle, smart-home, or building-control signal artifacts.

Mitigations:

- Remove real signal captures from public releases.
- Prefer rolling-code or cryptographically authenticated systems where possible.
- Maintain remote-control and receiver inventory.
- Use lab signal generators and synthetic examples only.
- Require human approval for any protocol dictionary, transmitter example, or access-control reference.

## NFC / LF RFID controls

Detection opportunities:

- Public dumps or examples that resemble access cards, hotel keys, transit credentials, or employee badges.
- Card-emulation tests without owner authorization or test-card labeling.
- Door-controller logs showing access outside normal badge workflow.

Mitigations:

- Do not publish real card dumps or derived secrets.
- Use test cards, expired lab cards, or synthetic records only.
- Label every example with owner, test scope, and disposition.
- Require approval before any content involving MIFARE, HID Prox, EM4100, Indala, hotel key, transit, or badge systems.

## Infrared controls

Detection opportunities:

- Unplanned AV/HVAC state changes during lab exercises.
- Large remote-control dictionaries added without source provenance.

Mitigations:

- Limit examples to owned lab devices.
- Record device make/model, room, asset owner, and allowed actions.
- Do not publish sensitive facility-control IR sets.

## Firmware and application controls

Detection opportunities:

- Bundled FAP binaries without source, license, checksum, or build provenance.
- Community firmware references without compatibility testing.
- App bundles that add RF, USB, BLE, Wi-Fi, or GPIO capability outside documented scope.

Mitigations:

- Maintain a software bill of materials for every release bundle.
- Prefer source-reviewed, reproducibly built artifacts.
- Review licenses before redistribution.
- Test on a clean lab Flipper and document firmware version, API version, SD-card content, and device settings.

## Vulnerability-triage controls

Detection opportunities:

- Auto-generated payloads or examples linked to active CVEs.
- Claims that a CVE is in CISA KEV without a verified source and date.

Mitigations:

- Use KEV only for defensive prioritization and patch workflow.
- Record vendor advisory links, patched versions, compensating controls, and detection logic.
- Do not include exploitation steps or weaponized test material in public docs.

## Release gate

Block publication if any of the following are present:

- real credential-like material;
- real access-control captures;
- third-party compromise instructions;
- destructive commands;
- stealth or evasion instructions;
- persistence mechanisms;
- CVE-targeted payloads;
- unreviewed binaries;
- protocol-sensitive material without owner authorization.

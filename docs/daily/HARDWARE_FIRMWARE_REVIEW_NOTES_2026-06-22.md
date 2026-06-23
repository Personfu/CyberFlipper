# Hardware and Firmware Review Notes — 2026-06-22

## Review objective

Provide safe review criteria for Flipper-oriented hardware, firmware, and SD-card content before public release.

## Firmware baseline

Preferred public baseline:

- Official Flipper firmware release notes.
- Repository-local CyberFlipper documentation.
- Synthetic owned-lab examples.

Community firmware references may be useful for awareness, but should stay behind human review until maintainers confirm the exact source, license, intended use, and safety posture.

## Hardware lanes

### Flipper Zero

Review focus:

- SD-card organization.
- Firmware version tracking.
- Owned-lab demonstrations.
- Visible consent and scope reminders.
- No production credential, card, remote, or signal material.

Approval required before publication:

- Any real NFC/RFID card notes.
- Any radio or infrared artifact derived from an operational environment.
- Any hardware photos containing facility details, badges, serial numbers, QR codes, asset tags, addresses, or people.
- Any discussion of third-party firmware behavior beyond high-level defensive notes.

### Proxmark and NFC/RFID lab notes

Review focus:

- Use blank or purpose-made training tags.
- Keep owned-tag inventory separated from production access-control systems.
- Redact all identifiers before publication.
- Prefer anatomy diagrams, glossary content, and risk-review forms over operational examples.

Approval required before publication:

- Any file derived from a real card or reader.
- Any mention of facility access systems.
- Any non-synthetic tag data.

### GPIO, Arduino, Raspberry Pi, ESP32, sensors

Review focus:

- Include power limits, wiring checks, continuity checks, and safe failure behavior.
- Include firmware version output and serial diagnostics.
- Include test logs and photos only after metadata review.

Approval required before publication:

- Any network-connected sensor workflow.
- Any cloud token, local address, SSID, hostname, or API endpoint.
- Any automation that interacts with non-lab equipment.

### Badgelife and SAO planning

Review focus:

- BOM, power budget, connector orientation, mechanical fit, and bring-up sequence.
- Clear statement that CyberFlipper/FLLC does not claim official DEF CON affiliation.
- Safe classroom/fan engineering framing.

Approval required before publication:

- Any externally sourced art or brand assets.
- Any vendor-supplied specification not already public.
- Any board file or schematic derived from a third-party design.

## Firmware review checklist

- Confirm target firmware version and source.
- Confirm whether the reference is official firmware, community firmware, app code, documentation, or a third-party asset pack.
- Confirm license compatibility.
- Confirm that no binary import is included unless explicitly approved.
- Confirm that changes are documentation-only unless a maintainer approves code import.
- Confirm that feature notes are defensive and do not describe misuse.
- Confirm that any screenshots are redacted.

## SD-card review checklist

- Separate `badusb`, `infrared`, `nfc`, `subghz`, `lfrfid`, `apps_data`, and documentation folders.
- Use synthetic examples only.
- Keep real captures, card data, remotes, and facility-specific notes out of public releases.
- Include a release gate file for each public pack.
- Include an approval queue for anything that needs maintainer review.

## Recommended decision

This daily update is safe for review as documentation. It should not be treated as approval to import upstream firmware, third-party apps, hardware-specific datasets, or operational examples.

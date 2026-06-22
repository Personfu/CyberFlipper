# Hardware and Firmware Review Notes - 2026-06-21

## Review purpose

Use this file before adding firmware notes, SD-card assets, lab payload cards, badges, SAO references, wiring notes, or classroom demonstrations.

## Minimum review checklist

### Firmware and app material

- Source repository and commit recorded.
- License reviewed.
- Upstream release or branch identified.
- Build target documented.
- No compiled binary added without maintainer approval.
- No external file bundle added without checksum and provenance note.
- No real access-control material included.

### SD-card layout

- Path is documented.
- File purpose is obvious from name and header.
- Sensitive data policy is stated.
- Test data is synthetic.
- Public examples are readable and reversible.

### Hardware notes

- Owner and lab scope recorded.
- Power source and voltage noted.
- Current draw or conservative power budget noted.
- Connector pinout checked against vendor documentation.
- Bench test status recorded.
- Failure mode documented.
- Photos, renders, and schematics reviewed for accidental disclosure.

### USB HID and classroom demos

- Demonstration uses only visible text entry.
- No hidden system modification.
- No network callouts.
- No access to protected data.
- No credential or token collection.
- No persistence, stealth, or bypass behavior.
- Consent and lab owner recorded.

### RF, NFC, LF RFID, and IR

- Only owned or explicitly authorized devices are used.
- No real card identifiers, dumps, or keys are stored in repository files.
- No live signal files are published without owner approval.
- Regional RF rules are checked before any transmission test.
- Infrared tests are limited to owned lab devices.

## Human approval flags

Set status to `BLOCKED-PENDING-APPROVAL` if any item below is true:

- Community firmware content is imported.
- A protocol file, capture, or card-derived artifact is proposed.
- A lab note references a real facility, reader, badge system, employee, customer, or internal host.
- A demo requires more than normal keyboard text entry.
- A public page could be interpreted as a guide for unapproved use.

## Default decision

If uncertain, publish only a defensive note and keep the underlying material out of the repository.

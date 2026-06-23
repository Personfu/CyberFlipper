# Redaction Policy Notes — 2026-06-22

Apply this redaction policy to CyberFlipper daily updates and any follow-on screenshots or examples.

Redact before publication:

- Card identifiers, tag memory, authentication-adjacent NFC fields, and parser output from real tags.
- RF/IR captures, production remote names, room-specific control maps, and pairing details.
- USB device serials unless they are synthetic or already approved for disclosure.
- Hostnames, usernames, directory paths, network names, asset tags, and ticket numbers from real environments.
- Photos that reveal facility layout, badge design, reader placement, or device serials.

Use instead:

- Synthetic labels such as `LAB_CARD_001`, `LAB_REMOTE_001`, `LAB_HOST_001`, and `LAB_ROOM`.
- Cropped screenshots that show only generic UI state.
- Text templates with empty fields.
- Maintainer-approved source URLs and neutral summaries.

Approval gate:

Any exception requires written maintainer approval and a reason recorded in the human approval queue.

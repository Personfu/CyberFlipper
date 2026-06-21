# Firmware Upstream Watch — 2026-06-20

## Purpose

Track upstream Flipper ecosystem changes that may affect CyberFlipper documentation, SD-card packaging, defensive lab procedures, or human approval gates.

## Sources reviewed

- https://github.com/UberGuidoZ/Flipper/commits/main/
- https://github.com/DarkFlippers/unleashed-firmware/commits/dev/
- https://github.com/flipperdevices/flipperzero-firmware/releases
- https://docs.flipper.net/

## UberGuidoZ/Flipper observation

Latest visible `main` activity centers on RogueMaster merges and FAP API v87.2-related updates. This appears to be app-packaging and compatibility tracking rather than a reason to add new operational capability to CyberFlipper.

CyberFlipper action:

- Add compatibility notation only.
- Do not import prebuilt FAP binaries without provenance review.
- Document source, version, hash, and intended lab use before any binary artifact is considered.

Review gate:

```text
FAP_IMPORT_REVIEW
Source repository:
Version/API target:
Build from source available: yes/no
Binary-only artifact: yes/no
Hash recorded: yes/no
Permissions reviewed: yes/no
Network capability: yes/no/unknown
Protocol-sensitive behavior: yes/no/unknown
Human approval: required before publish
```

## DarkFlippers/unleashed-firmware observation

Latest visible `dev` activity includes changelog updates, FAAC SLH hotfix notes, build parameter changes, a canvas buffer API addition, and raw protocol cleanup.

CyberFlipper action:

- Treat `dev` branch notes as research references only.
- Do not describe protocol-specific operational steps.
- If a protocol name appears in a changelog, record it as a human-approval item rather than adding a how-to.

Review gate:

```text
FIRMWARE_DEV_REVIEW
Branch:
Commit:
Area: UI / build / protocol / NFC / RFID / Sub-GHz / IR / GPIO / BadUSB / other
Documentation-only impact: yes/no
Protocol-sensitive impact: yes/no
Requires regulatory or owner authorization: yes/no
Human approval: required if protocol-sensitive or executable
```

## Official firmware release-note observation

Official firmware release notes reviewed include firmware 1.4.3 and 1.4.2. The relevant defensive notes are:

- BLE pairing-security guidance should be reflected in lab device setup notes.
- NFC CLI and parser improvements should be treated as human-approval material before documentation.
- BadUSB fixes should not expand CyberFlipper examples beyond harmless local typing/checklist demos.
- New Sub-GHz protocols should remain policy-review topics unless the test environment is owned, shielded, or explicitly authorized.

## Repository recommendation

Create or maintain these repository guardrails:

- `docs/daily/` for source-based daily notes.
- `apps_data/cyberflipper/release_gate.txt` for publish criteria.
- `apps_data/cyberflipper/human_approval_queue_YYYY-MM-DD.txt` for sensitive items.
- `badusb/CyberFlipper_Lab/` for benign text-entry demos only.
- `nfc/`, `lfrfid/`, `subghz/`, and `infrared/` note folders for policy and inventory cards only.

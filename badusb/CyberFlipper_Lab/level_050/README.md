# CyberFlipper Level 050 — Evidence and Provenance

Level 050 adds basic evidence discipline to CyberFlipper labs. The goal is to make every lab run easier to review, reproduce, and hand off.

## Files

| File | Platform | Purpose |
|---|---|---|
| `cf_l050_windows_evidence_manifest.txt` | Windows | Creates a visible manifest of local `cyberflipper_` reports on the Desktop with SHA256 hashes. |
| `cf_l050_linux_evidence_manifest.txt` | Linux | Creates a visible manifest of local `cyberflipper_` reports in the home directory with SHA256 hashes. |
| `cf_l050_macos_evidence_manifest.txt` | macOS | Creates a visible manifest of local `cyberflipper_` reports on the Desktop with SHA256 hashes. |

## Expected output

Each script creates a visible local report using a `cyberflipper_` prefix:

```text
cyberflipper_l050_windows_evidence_manifest.txt
cyberflipper_l050_linux_evidence_manifest.txt
cyberflipper_l050_macos_evidence_manifest.txt
```

## Defensive value

This level teaches:

- report file tracking
- hash-based file integrity notes
- local lab timestamps
- firmware/version note prompts
- SD-card provenance habits
- clean handoff records for classroom, internal, and client-approved labs

## Review requirements

Human review is required before merge or public release because these scripts launch local command interpreters and enumerate local CyberFlipper report files.

## Boundary

No credential capture, token extraction, browser-profile access, persistence, stealth, evasion, destructive behavior, privilege abuse, RF transmission, Wi-Fi cracking, captive credential capture, or third-party targeting is included.

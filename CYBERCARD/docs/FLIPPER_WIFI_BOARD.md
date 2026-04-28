# Flipper Zero and Wi-Fi Dev Board

This document defines safe CyberCard-compatible Flipper workflows.

## Flipper Folder Map

| Flipper folder | CyberCard folder | Purpose |
|---|---|---|
| `/badusb/` | `flipper/badusb/` | harmless contact automation |
| `/nfc/` | `flipper/nfc/` | URL-only NFC card demos |
| `/infrared/` | `flipper/infrared/` | owned presentation/remote demos |
| `/subghz/` | docs only | receive-first lab notes, no replay recipes |

## Wi-Fi Dev Board Safe Portal

The Wi-Fi dev board can host an owned-network consent portal:

```text
SSID: CyberCard-Lab
Portal title: Contact Personfu
Disclosure: This demo records that you opened the portal and routes you to /tap.
Button: Open CyberCard
Target: https://fllc.net/tap?card_id=demo_v1&utm_source=wifi_portal&utm_medium=flipper
```

No passwords. No credential fields. No deceptive brand imitation.

## Safe BadUSB Demonstration

The included demo opens a browser to the CyberCard profile and types a disclosure note. It is intentionally harmless and visible.

## Wi-Fi Board Hardware and Portal Content

The Wi-Fi dev board should be built on an ESP32-S2 or ESP32-S3 module with a 2.4 GHz antenna and USB power. It is a companion lab device, not a hidden exploit.

- `SSID`: `CyberCard-Lab`
- `Portal URL`: `https://fllc.net/tap?card_id=demo_v1&utm_source=wifi_portal&utm_medium=flipper`
- `Page title`: `CyberCard Lab Portal`
- `Disclosure`: `This demo records that you opened the portal and routes you to the CyberCard experience.`
- `Button`: `Open CyberCard`

This page deliberately avoids password fields, credential prompts, hidden redirects, and executable downloads.

### Portal Page Schema

```json
{
  "title": "CyberCard Lab Portal",
  "description": "Owned-network demo portal that routes to the CyberCard profile.",
  "target_url": "https://fllc.net/tap?card_id=demo_v1&utm_source=wifi_portal&utm_medium=flipper",
  "consent_notice": "No passwords are requested. This is a safe lab demo.",
  "audit_tag": "wifi_portal"
}
```

## Payload File Mapping

| Demo file | Purpose | Target |
|---|---|---|
| `flipper/badusb/cybercard_contact_demo.txt` | Open profile URL and type consent notice | `/tap?card_id=metal_v1`
| `flipper/badusb/cybercard_wifi_portal_demo.txt` | Open Wi-Fi portal page and type safe demo note | `/tap?card_id=demo_v1&utm_source=wifi_portal`
| `flipper/badusb/cybercard_risk_awareness_demo.txt` | Open the safe `/risk` page | `/risk`
| `flipper/nfc/cybercard_metal_v1.nfc` | NFC URL-only card demo | `/tap?card_id=metal_v1`
| `payloads/scannables/wifi_consent_portal.html` | Owned portal landing page | `/tap?card_id=demo_v1`

## Vulnerability Education

Use Flipper/CyberCard to explain classes of risk in a safe lab context:

| Risk | Safe demonstration |
|---|---|
| USB trust | Ask why an unknown keyboard is dangerous, then open only a URL |
| captive portals | Show consent portal design and how phishing differs |
| NFC trust | Clone your own public URL and prove backend trust still holds |
| sub-GHz | Visualize RSSI in a shielded/owned lab |
| IR | Control your own slide deck or demo device |
| Wi-Fi | Show how a captive portal can be benign with explicit consent |

## OWASP and Blue-Team Alignment

This project is intentionally aligned with defensive controls:

- Avoids credential collection and hidden execution
- Uses explicit consent before recording session data
- Anchors trust in backend audit and RLS instead of physical tag secrecy
- Uses audit-events and device telemetry to support detection and incident response

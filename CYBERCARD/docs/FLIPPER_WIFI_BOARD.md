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

## Vulnerability Education

Use Flipper/CyberCard to explain classes of risk:

| Risk | Safe demonstration |
|---|---|
| USB trust | ask why an unknown keyboard is dangerous, then open only a URL |
| captive portals | show consent portal design and how phishing differs |
| NFC trust | clone your own public URL and prove backend trust still holds |
| sub-GHz | visualize RSSI in a shielded/owned lab |
| IR | control your own slide deck or demo device |

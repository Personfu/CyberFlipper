# Harmless Scannables

These are safe URLs for NFC, QR, AR, Wi-Fi portal, and Flipper demos.

| Name | URL | Purpose |
|---|---|---|
| Metal card | `https://fllc.net/tap?card_id=metal_v1&utm_source=nfc&utm_medium=card` | default NFC payload |
| QR scan | `https://fllc.net/tap?card_id=metal_v1&utm_source=qr&utm_medium=card` | printed QR |
| AR marker | `https://fllc.net/tap?card_id=ar_v1&utm_source=ar&utm_medium=marker` | AR scene handoff |
| Flipper NFC | `https://fllc.net/tap?card_id=demo_v1&utm_source=flipper_nfc&utm_medium=demo` | reproducible NFC demo |
| Wi-Fi portal | `https://fllc.net/tap?card_id=demo_v1&utm_source=wifi_portal&utm_medium=flipper` | consent captive portal |
| USB safe demo | `https://fllc.net/tap?card_id=demo_v1&utm_source=badusb_demo&utm_medium=flipper` | harmless browser-open demo |
| DEFCON puzzle | `https://fllc.net/challenge/0xDEADBEEF` | puzzle entry |

## QR Generation

Use any QR tool that supports high error correction. Recommended settings:

- ECC: H
- margin: 4 modules
- minimum print size: 25 mm x 25 mm
- dark foreground on light/matte background

No QR here points to an executable download.

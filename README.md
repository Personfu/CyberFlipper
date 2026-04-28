# CyberFlipper

Personfu research workspace for the **CyberCard** identity system and companion CyberFlipper/ESP32 lab stack.

The active product and engineering package lives in [CYBERCARD/README.md](CYBERCARD/README.md).

## What This Repo Contains

```text
CYBERCARD/
  app/                  Next.js tap, vCard, Stripe, challenge, dashboard, and gov-gate routes
  ar/                   Marker-based AR identity scene
  docs/                 Hardware, RF, telemetry, threat, install, and compliance docs
  emails/               Resend/React Email templates
  firmware/             ESP32-S3 CyberCard v0 firmware
  flipper/              Safe Flipper Zero integration examples
  n8n/                  Tap-to-revenue automation workflow
  payloads/             Harmless scannables and contact automation samples
  scripts/              NDEF generator and Proxmark document mirror tool
  supabase/             CyberCard database migrations
```

## Authorized Use Only

This repository is for defensive research, education, authorized testing, identity-system design, and personal lab use. Do not transmit on regulated RF bands, test against third-party systems, deploy USB automation, or collect telemetry without permission and legal authority.

The project intentionally emphasizes **network-anchored trust, consent-aware telemetry, safe scannables, and harmless automation** over offensive tooling.

## Fast Start

1. Read the flagship system document: [CYBERCARD/README.md](CYBERCARD/README.md)
2. Review the safety boundary: [CYBERCARD/docs/AUTHORIZED_USE_POLICY.md](CYBERCARD/docs/AUTHORIZED_USE_POLICY.md)
3. Generate an NFC URL payload: `node CYBERCARD/scripts/generate_ndef.js`
4. Mirror the public Proxmark research archive to Downloads:

```bash
pip install requests beautifulsoup4 tqdm
python CYBERCARD/scripts/proxmark_scraper.py --out ~/Downloads/proxmark_docs --workers 2 --max-retries 3
```

## Current Status

- CyberCard web/API layer: implemented
- Supabase schema and audit layer: implemented
- ESP32-S3 lab firmware: implemented as v0 prototype
- Flipper Zero integration: safe examples and docs added
- Proxmark archive mirror: completed locally in `~/Downloads/proxmark_docs`
- Production PCB: documented; not yet manufactured

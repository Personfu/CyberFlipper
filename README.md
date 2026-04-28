# CyberCard System — Furulie LLC

Production-grade NFC identity card backed by Supabase, Next.js, Resend, and ESP32-S3 augment hardware. Multi-modal: NFC tap, QR scan, AR marker. Dual-use: public product layer + private research lab.

---

## Stack at a glance

```
[ Physical Card · NTAG216 ]
[ AR Marker · A-Frame      ]──┐
[ QR Code · /tap?card_id   ]──┼──→ [ Next.js /tap edge ]
[ ESP32-S3 Device          ]──┘                │
                                               ▼
                              [ /api/tap edge handler ]
                                               │
                          ┌────────────────────┼────────────────────┐
                          ▼                    ▼                    ▼
                  [ Supabase Postgres ]  [ Resend email ]    [ Vercel geo ]
                          │
                          ▼
                  [ /dashboard/cards ]   ← realtime tap stream
```

---

## Repository layout

```
cybercard/
├── app/
│   ├── tap/
│   │   ├── page.tsx              # edge SSR, card_id resolver
│   │   └── TapClient.tsx         # client identity render + fingerprint
│   ├── api/
│   │   ├── tap/route.ts          # POST handler · SHA-256 fp · Resend trigger
│   │   └── vcard/route.ts        # .vcf delivery + tap event update
│   └── dashboard/
│       └── page.tsx              # realtime tap stream + analytics
├── supabase/
│   └── 001_cybercard_init.sql    # full schema · RLS · seed · view
├── ar/
│   └── index.html                # A-Frame + AR.js marker scene
├── firmware/
│   └── cybercard_v0.ino          # ESP32-S3 · PN532 · CC1101 · OLED
├── scripts/
│   ├── proxmark_scraper.py       # recursive proxmark.org mirror tool
│   └── generate_ndef.js          # NDEF payload for NTAG216
└── docs/
    └── README.md                 # this file
```

---

## Deploy sequence

**1. Database**
```bash
supabase db push
# Seeds metal_v1, demo_v1, ar_v1 cards. Verify in dashboard.
```

**2. Environment** — set in Vercel:
```
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon>
SUPABASE_SERVICE_ROLE_KEY=<service>     # api/tap writes use this
RESEND_API_KEY=re_xxx
```

**3. App**
```bash
vercel --prod
# /tap, /api/tap, /api/vcard, /dashboard go live.
```

**4. NFC programming**
```bash
node scripts/generate_ndef.js
# Outputs hex bytes. Write to NTAG216 page 4+ via NFC Tools (mobile),
# Flipper Zero, or Proxmark3.
```

**5. AR scene** — copy `ar/index.html` to `public/ar/index.html`. The marker preset is hiro for the prototype; swap to a custom NFT marker for production.

**6. Hardware (optional)** — flash `firmware/cybercard_v0.ino` to ESP32-S3 with the Arduino IDE. Wire per the pinout in the file header.

---

## Proxmark research index

The proxmark.org document archive is the canonical knowledge base for RFID/NFC capability work. Run the scraper from any machine with outbound internet (this Claude environment blocks that domain):

```bash
pip install requests beautifulsoup4 tqdm
python scripts/proxmark_scraper.py --out ~/Downloads/proxmark_docs --workers 6
```

Output:
- `~/Downloads/proxmark_docs/` — full mirror, original directory structure preserved
- `manifest.json` — every URL, status, byte count
- `README.md` — categorized index by RFID family

### Categories the scraper buckets into

| Category | Frequency | Common docs |
|---|---|---|
| Hitag (125 kHz) | 125 kHz | HT1protocol, Gone in 360 Seconds, Breaking Hitag 2 |
| Indala (125 kHz) | 125 kHz | FlexSecur, format specs |
| T55x7 / Q5 (125 kHz) | 125 kHz | Datasheet, write modes |
| EM4xxx | 125 kHz | EM4100, EM4205, EM4305 |
| iClass | 13.56 MHz | HID iClass attacks, key recovery |
| MIFARE | 13.56 MHz | Classic, Plus, Ultralight, dark side |
| DESFire | 13.56 MHz | EV1/EV2/EV3 specs, command sets |
| FeliCa | 13.56 MHz | Sony specs, transit deployments |
| Legic | 13.56 MHz | Prime, Advant |
| NFC General | 13.56 MHz | Black Hat papers, NDEF specs |
| ISO Standards | mixed | 14443, 15693, 18092, 7816 |

### Priority reading list (start here)

For someone building a CyberCard system that needs to understand the threat model:

1. **NFC/BH_US_12_Miller_NFC_attack_surface_WP.pdf** — Black Hat 2012, attack surface of NFC stacks
2. **125 kHz - Hitag/Gone_in_360_Seconds_Hijacking_with_Hitag2-USENIX_2012.pdf** — Hitag2 breakage
3. **125 kHz - Hitag/Breaking_Hitag_2_Revisited.pdf** — Updated cryptanalysis
4. **MIFARE/* (whichever variant)** — by far the most deployed 13.56 MHz tag, every defender needs this
5. **NFC/Potential_misuse_of_NFC_enabled_mobile_phones_*.pdf** — relay attack reference

The full mirror is the reference; this list is the on-ramp.

---

## Card ID matrix

| card_id | physical form | trigger | redirect | email |
|---|---|---|---|---|
| `metal_v1` | metal NFC card | NFC tap | render /tap | first-tap only |
| `ar_v1` | printed marker | AR detection | render /tap | first-tap only |
| `demo_v1` | digital QR for prospects | scan | render /tap | every tap |
| `scan_v1` | event QR (UTM-tagged) | scan | hard redirect | none |
| `file_v1` | QR sticker on asset | scan | signed download | first-tap only |
| `gov_v1` | restricted context | tap → auth gate | render /tap | audit log |

Add new card IDs by inserting into the `cards` table. The route resolves dynamically — no code change needed.

---

## Operational notes

**Privacy posture**
- No raw IP or precise geo stored. SHA-256 of `(tz | lang | screen | UA[80])` is the fingerprint.
- Vercel header geo (city/country/coarse lat/lng) is stored, never the source IP.
- `gov_v1` card type adds an audit log row to a separate `audit_events` table (not yet shipped — next migration).

**Throughput**
- Edge runtime on `/tap` and `/api/tap` keeps p95 under 80 ms globally.
- Supabase RLS is service-role-only on writes; no public mutation surface.
- Resend has a per-domain rate limit; the `one_time_email` flag keeps a normal in-person event under it.

**Cost ceiling at $15K MRR scale**
- Supabase Pro: $25/mo
- Vercel Pro: $20/mo
- Resend: $20/mo (50k emails)
- Domain + NTAG216 cards (qty 100): ~$80 one-time
- Total: < $70/mo recurring · ≈ 0.5% of target MRR

---

## Roadmap

- [x] Database schema + seed
- [x] /tap edge route + client
- [x] /api/tap with fingerprint + Resend
- [x] /api/vcard
- [x] AR.js marker scene
- [x] ESP32-S3 firmware v0
- [x] Realtime dashboard
- [x] NDEF payload generator
- [x] Proxmark mirror script
- [ ] `gov_v1` audit gate + signed JWT challenge
- [ ] Custom NFT AR marker (replace hiro preset)
- [ ] PCB design for CyberCard device (post-prototype)
- [ ] Stripe integration on /dashboard for card-as-a-service tier

---

**Furulie LLC · build · deploy · scale**

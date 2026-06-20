# CyberFlipper CISA KEV Triage Template

Use this template for each newly added Known Exploited Vulnerability entry.

```yaml
cve: "CVE-YYYY-NNNNN"
vendor: "Vendor"
product: "Product"
date_added: "YYYY-MM-DD"
risk_context: "Why defenders care"
asset_owner_questions:
  - "Do we run this product?"
  - "Is it internet-facing?"
  - "Is there exposed management access?"
  - "Is patch status verified?"
flipper_relevance:
  hid_training: false
  nfc_rfid_review: false
  subghz_review: false
  infrared_review: false
  field_note_only: true
allowed_artifacts:
  - "Mitigation note"
  - "Patch checklist"
  - "Inventory checklist"
  - "Detection question list"
blocked_artifacts:
  - "Exploit chain"
  - "Credential theft"
  - "Persistence"
  - "Bypass/evasion"
  - "Third-party targeting"
recommended_actions:
  - "Patch or apply vendor mitigation"
  - "Verify exposure"
  - "Review logs"
  - "Add detection coverage"
  - "Document owner and deadline"
```

## KEV-to-Flipper Rule

CyberFlipper converts KEV entries into portable defensive field cards, not exploitation payloads.

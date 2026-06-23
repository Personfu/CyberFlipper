# NFC Hardware/Firmware Review Notes — 2026-06-22

## Purpose

This note translates current NFC-related upstream observations into safe CyberFlipper review guidance. It does not include card data, keys, dumps, reader-interaction steps, or production-device details.

## Official baseline

Official Flipper NFC documentation describes a 13.56 MHz NFC module used for public transport cards, access cards or tags, and digital business cards. It also states that the NFC application can read, save, emulate, analyze readers, and generate cards.

CyberFlipper review position:

- NFC examples must be scoped to owner-approved lab cards or synthetic templates.
- Public documentation must not include real UIDs, dumps, authentication data, or reader-specific challenge/response material.
- Screenshots must be redacted before publication.

## Community firmware watch items

DarkFlippers/unleashed-firmware recent June commits include:

- A Bambu Lab filament spool parser addition.
- Display changes for MIFARE Ultralight/NTAG PWD and PACK fields.
- Related changelog updates and app-bundle bumps.

Review interpretation:

- Parser additions may be benign inventory tooling when used with owned tags and public formats.
- Parser additions still require licensing and provenance review when ported from another project.
- Any field that resembles a password, verifier, authentication response, unique identifier, or product-specific tag value must be treated as sensitive until reviewed.

## Defensive review checklist

Before accepting NFC-related documentation, confirm:

- The source is listed and reachable.
- The source license allows the intended use.
- No real tag data appears in text, screenshots, fixtures, or examples.
- No instruction tells readers how to bypass, unlock, recover, clone, or emulate access-control credentials.
- Screenshots use synthetic or redacted fields.
- Publication language describes risk and mitigation rather than operational reproduction.

## Hardware review checklist

For lab-owned NFC assets, record only high-level inventory fields:

```text
Asset label:
Owner:
Use case:
Card/tag type, if publicly known:
Reader/system name, if approved for disclosure:
Lab-only notes:
Data retention decision:
Reviewer:
Approval status:
```

Do not record raw values in public docs. If raw values are required for an internal test, keep them outside the repository in an approved evidence store.

## Mitigation guidance

- Prefer modern, diversified credentials over static identifiers.
- Review whether readers enforce mutual authentication and backend authorization.
- Separate education tags from production credentials.
- Use tamper-evident storage for lab test cards.
- Rotate or retire any credential accidentally exposed in screenshots, logs, or training material.

## Publication gate

NFC content requires human approval when it includes any parser output, screenshots, protocol-specific fields, device identifiers, app imports, firmware diffs, card-type claims, or references to authentication-related fields.

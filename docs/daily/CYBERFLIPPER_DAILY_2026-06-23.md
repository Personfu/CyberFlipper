# CyberFlipper Daily Authorized Security-Research Update — 2026-06-23

## Scope

This update is documentation-only. It is intended for authorized defensive research, lab governance, device inventory review, and safe training material. It does not introduce executable attack code, credential collection, persistence, stealth, destructive actions, or third-party exploitation workflows.

## Repository review notes

The Fu-LLC/CyberFlipper repository was readable, including `README.md`. Direct write operations to Fu-LLC were blocked by GitHub with `403 Resource not accessible by integration`, so this update is staged in the accessible Personfu/CyberFlipper path for human review and later controlled publication.

The current README contains strong offensive framing around signal capture, HID injection, wireless tooling, and third-party payload ecosystems. Before public deployment, maintainers should replace promotional or operational attack wording with authorized-lab scope, consent requirements, regulatory limits, and defensive objectives.

## Upstream watch summary

- UberGuidoZ/Flipper `main`: latest visible activity remains the 2026-06-06 merge from RogueMaster/main and 2026-06-04 FAP API v87.2 updates. Treat this as application-pack and compatibility-watch material only; do not import payload repositories or protocol material without review.
- DarkFlippers/unleashed-firmware `dev`: latest visible activity remains 2026-05-23 changelog work and May 2026 changes around FAAC SLH hotfixes, build parameters, `canvas_buffer` API additions, and raw-protocol cleanup. Treat protocol-sensitive changes as human-approval-gated.
- Official Flipper firmware: use official releases and documentation as the baseline for safety posture, compatibility, and feature behavior. Community firmware should remain opt-in and review-gated.

## Defensive actions prepared today

- Added upstream comparison notes for June 23.
- Added source digest with CISA KEV handling, official firmware baseline guidance, and firmware SBOM triage references.
- Added hardware and firmware review notes focused on provenance, reproducibility, and consent boundaries.
- Added detection and mitigation guidance for enterprise environments where Flipper-like devices may appear.
- Added lab-only payload documentation limited to visible text-entry demos and review checklists.
- Added a human approval queue for items that must not be merged, published, or deployed without maintainer signoff.

## Safe-use policy for this update

Allowed examples:

- Written authorization checklist.
- Device inventory card.
- USB HID training file that types only a visible banner or checklist into a user-opened editor.
- NFC/RFID/Sub-GHz/IR review cards that record ownership, test location, frequency/regulatory constraints, and evidence-handling notes without live keys or replay material.

Disallowed content:

- Credential collection.
- Persistence or stealth.
- Host modification beyond visible text entry.
- Destructive actions.
- Unauthorized access-control testing.
- RF transmission guidance outside a controlled, legal, authorized lab.
- Third-party exploit chains or payload imports.

## Human approval required before publication

- Any changes to README marketing language or protocol capability claims.
- Any use of third-party payload repositories or community firmware features in docs.
- Any KEV claim that depends on the official CISA feed, because the feed was not accessible through this run.
- Any real card, fob, remote, access-control, radio, or endpoint artifact.
- Any lab material that could be interpreted as a deployment instruction rather than a defensive checklist.

# CyberFlipper Hardware Visualization Framework

CyberFlipper should move beyond static screenshots into inspectable, interactive hardware documentation. This document defines the visual standard for Flipper Zero, HackRF, SDR, badge, SAO, Proxmark, ESP32, Raspberry Pi, and sensor-lab content.

## Target experience

A visitor should be able to open a build page and interact with the hardware like a real bench artifact:

- rotate a board stack or enclosure in 3D
- highlight GPIO, SAO, JST, USB, RF, antenna, or power paths
- switch between exploded, assembled, wiring, and signal-flow views
- click components for BOM, warnings, datasheets, photos, and firmware notes
- inspect safe payload/audit cards as visible documentation, not hidden execution
- export or copy a clean build checklist

## Framework tiers

| Tier | Engine / framework | Core strength | CyberFlipper application |
|---|---|---|---|
| **S** | Three.js + WebGL / WebGPU | Hardware-accelerated 3D rendering and materials | Rotatable board stacks, enclosures, antenna clearances, badge/SAO modeling |
| **A** | Interactive SVG + D3.js | Resolution-independent vectors with data binding | GPIO maps, schematic overlays, trace highlighting, signal path diagrams |
| **B** | Prism.js + data grids | Code/config readability and structured tables | Firmware headers, config reviews, BOM tables, audit-script displays |
| **F** | Static images / CSS-only 3D | Limited interactivity | Reference galleries only; not enough for serious hardware analysis |

## Page modules to build

### 1. 3D board inspector

Purpose: show a board or device as a real object, not a flat card.

Requirements:

- Three.js scene with orbit controls
- device presets for Flipper, HackRF, ESP32, Raspberry Pi, SAO/badge, Proxmark
- layer toggles: enclosure, PCB, headers, antenna, power, sensor, cable path
- annotations anchored to components
- reduced-motion fallback image
- mobile-safe controls

### 2. SVG pinout and signal map

Purpose: teach wiring and safety without forcing users to read dense tables.

Requirements:

- D3-bound SVG pins and traces
- hover/click states for voltage, direction, bus, warning, and example usage
- grouped views for GPIO, SPI, I2C, UART, RF, IR, NFC, power
- exportable JSON data model for future tools

### 3. Workbench checklist panel

Purpose: make every hardware page feel like a real lab artifact.

Requirements:

- BOM and substitution notes
- firmware version and build hash
- smoke-test checklist
- continuity and power checks
- photos / render / STL / KiCad links
- risk notes and lawful-use boundary

### 4. Audit/payload card viewer

Purpose: keep public security content reviewable and safe.

Requirements:

- visible script content with Prism highlighting
- exact purpose and expected output
- authorized-scope banner
- no stealth, persistence, credential capture, bypass flags, or hidden execution
- blue-team remediation card paired with every red-team validation card

## Data model

Use small JSON files per artifact so pages can render from data instead of hard-coded copy.

```json
{
  "id": "hackrf-portapack-stack",
  "title": "HackRF + PortaPack Stack",
  "type": "sdr",
  "models": {
    "glb": "/models/hackrf-portapack.glb",
    "fallback": "/images/hackrf-portapack.png"
  },
  "layers": ["pcb", "screen", "headers", "antenna", "enclosure"],
  "annotations": [
    {
      "id": "rf-sma",
      "label": "SMA RF port",
      "risk": "Never transmit outside authorized bands or power limits.",
      "datasheet": "docs/rf-safety.md"
    }
  ],
  "bom": [
    { "part": "HackRF One", "qty": 1, "critical": true },
    { "part": "PortaPack H2", "qty": 1, "critical": false }
  ]
}
```

## Implementation phases

| Phase | Deliverable | Success condition |
|---|---|---|
| **1** | Static JSON artifact schema + one sample board | One page renders BOM, notes, and annotations from JSON |
| **2** | D3/SVG pinout viewer | Users can click pins and see voltage/bus/warning notes |
| **3** | Three.js board inspector | Users can rotate, zoom, and toggle hardware layers |
| **4** | Artifact gallery | Flipper, HackRF, ESP32, Raspberry Pi, Proxmark, SAO cards share one renderer |
| **5** | FLLC integration | FLLC.net can showcase the same artifact cards in product/member lanes |

## Quality rules

- No wide ASCII tables on public pages.
- Every interactive view needs a reduced-motion and no-WebGL fallback.
- Every hardware page needs a safety boundary and a defensive/educational use case.
- Every public payload must be visible, reversible, logged, and authorized-scope only.
- Every artifact should be reusable by FLLC.net so the website showcases the actual repo work.

## Visual identity

CyberFlipper should keep the FLLC midnight neon / cyber pirate / hardware bench style:

- black glass panels
- cyan/fuchsia signal accents
- green status lights
- subtle scanlines and grid overlays
- real component labels over generic “hacker” decoration
- interactions that reveal information instead of just flashing

The goal is not more decoration. The goal is technical proof that a visitor can touch.

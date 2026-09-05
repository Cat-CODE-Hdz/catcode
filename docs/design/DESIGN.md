---
name: Editorial Engineering
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0edec'
  surface-container-high: '#ebe7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#444748'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c9c6c5'
  secondary: '#5c5f60'
  on-secondary: '#ffffff'
  secondary-container: '#dee0e2'
  on-secondary-container: '#606365'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#151c27'
  on-tertiary-container: '#7d8492'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c9c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#e1e2e4'
  secondary-fixed-dim: '#c5c7c8'
  on-secondary-fixed: '#191c1e'
  on-secondary-fixed-variant: '#444749'
  tertiary-fixed: '#dce2f3'
  tertiary-fixed-dim: '#c0c7d6'
  on-tertiary-fixed: '#151c27'
  on-tertiary-fixed-variant: '#404754'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-xl:
    fontFamily: Geist
    fontSize: 80px
    fontWeight: '600'
    lineHeight: 88px
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Geist
    fontSize: 44px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Geist
    fontSize: 52px
    fontWeight: '600'
    lineHeight: 58px
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Geist
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Geist
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-md:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Geist
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit-1: 0.25rem
  unit-2: 0.5rem
  unit-3: 0.75rem
  unit-4: 1rem
  unit-5: 1.25rem
  unit-6: 1.5rem
  unit-8: 2rem
  unit-10: 2.5rem
  unit-12: 3rem
  unit-16: 4rem
  unit-20: 5rem
  unit-24: 6rem
  unit-32: 8rem
  gutter-mobile: 1rem
  gutter-desktop: 2rem
  max-container: 1280px
---

## Brand & Style

This design system delivers an austere, high-caliber digital identity for small and mid-market enterprises across Spain seeking transformative digital maturity. Rooted in modern editorial tech minimalism, the system balances hyper-clarity with quiet authority. It replaces visual clutter with disciplined structure, structural asymmetry, generous spatial breathing room, and typographic contrast inspired by premier digital design studios and modern software interfaces.

### Aesthetic Attributes
- **Design Philosophy**: Architectural minimalism governed by rigorous typographic scale and functional refinement.
- **Visual Stance**: Unadorned, confident, structured. Zero extraneous gradients, no faux-3D textures, and no glassmorphic blurs.
- **Atmosphere**: Surgical precision, calm professional competence, and decisive visual hierarchy designed to establish instant institutional trust.

## Colors

The color palette is strictly restrained, relying on tonal contrast between pristine surfaces, razor-sharp hairline dividers, and deep soot-black focal anchors.

### Palette Architecture
- **Primary (`#0A0A0A`)**: High-impact actions, key narrative anchors, high-contrast button surfaces, and decisive terminal CTAs.
- **Secondary (`#F7F8FA`)**: Soft foundational surface alternate, used for nested module containers, card backdrops, table headers, and structural section splits.
- **Tertiary (`#6B7280`)**: Secondary metadata, supporting body narratives, inactive outlines, and subtle iconography.
- **Neutral / Text Primary (`#111111`)**: Deep charcoal for standard editorial typography, body copy, and primary titles.
- **Canvas / Base (`#FFFFFF`)**: Primary background canvas ensuring maximum contrast and pristine negative space.
- **Structural Border (`#E5E7EB`)**: Precise 1px hairline rules for cards, dividers, and modular containers.
- **Subtle Surface Highlight (`#F3F4F6`)**: Hover states for secondary components, soft pill backgrounds, and code snippets.

## Typography

The typographical hierarchy is calibrated for intense editorial impact and technical precision. Powered by `Geist`, the rhythm couples oversized, tight-tracked display titles with balanced, open body weights.

### Application Rules
- **Display Scale**: `display-xl` and `headline-lg` rely on negative tracking to ensure compact, monumental headlines without optical drift.
- **Body Rhythm**: Running text uses `body-md` set in `#111111` for high-density pages, expanding to `body-lg` in introductory segments.
- **Labels & Microcopy**: Badges, status markers, and numerical markers employ `label-sm` with upper-case transformation and gentle tracking (`+0.06em`) to anchor technical metrics.
- **Editorial Contrast**: Headlines avoid pure black `#000000` in favor of `#111111` and `#0A0A0A`, reducing eye strain while retaining high visual punch.

## Layout & Spacing

The layout is grounded in a disciplined 12-column grid system bounded by a maximum content container of 1280px, flanked by deliberate horizontal white margins.

### Breakpoints & Adaptive Rules
- **Mobile (< 768px)**: Single-column flow with 16px lateral padding. Vertical section rhythm scales to `unit-16` (64px) between narrative blocks.
- **Tablet (768px – 1024px)**: 6-column fluid structure with 24px gutters and 32px outer margins. Section gaps step up to `unit-20` (80px).
- **Desktop (1025px+)**: 12-column grid with 32px gutters and a 1280px centralized boundary. Inter-section spacing expands to `unit-24` (96px) or `unit-32` (128px) for monumental breathing space.

### Structural Flow
Avoid high-density decorative packing. When organizing business service offerings or technological tiers, maintain clear internal padding of `unit-8` to `unit-10` within container units to reinforce high-end polish.

## Elevation & Depth

This design system rejects heavy Drop Shadows and saturated atmospheric glows, achieving depth through planar surface shifts and hairline outlines.

### Architectural Hierarchy
- **Base Canvas**: Grounded in `#FFFFFF`.
- **Level 1 (Card & Module Surfaces)**: Floated using background `#F7F8FA` or pure `#FFFFFF` bounded by a strict `1px solid #E5E7EB` stroke.
- **Level 2 (Popovers, Dropdowns, Flyouts)**: Retains a crisp `1px solid #E5E7EB` border complemented by an ultra-subtle, diffused neutral offset: `box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.04), 0 2px 6px -1px rgba(0, 0, 0, 0.02)`.
- **Level 3 (Modal Overlays)**: Surface `#FFFFFF` enclosed by `1px solid #111111`, isolated atop a neutral backdrop dim of `rgba(10, 10, 10, 0.4)` with zero blur.

## Shapes

The geometric framework balances tactile friendliness with crisp architectural structure. Curved corners are controlled and consistent, preventing bubbly aesthetics while avoiding brutalist sharp corners.

### Shape Parameters
- **Cards & Primary Modules**: Radius calibrated to 18px (`1.125rem` / `rounded-xl`).
- **Interactive Controls (Buttons, Inputs)**: Unified radius of 10px–12px (`0.625rem`–`0.75rem`), providing a refined tactile envelope.
- **Badges & Inline Chips**: Pill curvature (`9999px`) or structural 6px (`0.375rem`) for technical status tags.

## Components

### Buttons
- **Primary CTA**:
  - Background: `#0A0A0A` | Text: `#FFFFFF` | Weight: 500 (`label-md`).
  - Height: 52px (desktop), 48px (mobile). Padding: 0 24px.
  - Border-radius: 12px.
  - Hover: `#262626` with smooth 150ms transition.
- **Secondary (Outline)**:
  - Background: `#FFFFFF` | Text: `#111111` | Border: `1px solid #E5E7EB`.
  - Hover: Background `#F7F8FA`, border `#D1D5DB`.
- **Subtle / Ghost**:
  - Background: Transparent | Text: `#111111`.
  - Hover: Background `#F7F8FA`.

### Badges & Status Chips
- Height: 26px.
- Padding: 4px 10px.
- Typography: `label-sm` (uppercase, letter-spacing +0.06em).
- Styling: Background `#F7F8FA`, border `1px solid #E5E7EB`, text `#111111`.
- Pulse / Live Indicator: 6px solid dot with `#0A0A0A` or `#10B981`.

### Form Inputs
- Height: 48px.
- Typography: `body-md`.
- Background: `#FFFFFF` | Border: `1px solid #E5E7EB` | Radius: 10px.
- Text: `#111111` | Placeholder: `#9CA3AF`.
- Focus State: Border color `#0A0A0A` with a 1px solid ring outline, zero glowing halos.

### Cards & Modules
- Primary Card: Background `#FFFFFF` or `#F7F8FA`, border `1px solid #E5E7EB`, radius 18px, padding 32px (mobile: 20px).
- Interactive Card Hover: Elevate border color to `#111111` (150ms ease). No spatial jump or drop-shadow explosion.

### Selection Controls (Checkboxes & Radios)
- Dimensions: 18px × 18px.
- Border: `1.5px solid #D1D5DB` | Radius: 4px (checkbox), 9999px (radio).
- Active/Checked: Fill `#0A0A0A`, checkmark/dot `#FFFFFF`.

### Data Display & Editorial Lists
- Row Padding: 18px vertical, separated by `1px solid #E5E7EB`.
- Alternating Rows: None. Distinction achieved via crisp typography and tabular numerical formatting (`font-variant-numeric: tabular-nums`).
# Design System Document

## 1. Overview & Creative North Star: "Kinetic Editorial"

This design system is built for a modern digital marketing agency that demands high-energy, high-impact presentation. We are moving away from the static, blocky "template" feel toward a **Kinetic Editorial** aesthetic. 

The Creative North Star—**Kinetic Editorial**—combines the authoritative weight of a premium print magazine with the fluid, high-velocity movement of digital-first design. We break the grid through intentional asymmetry, overlapping high-contrast typography, and a "Tonal Layering" philosophy that treats the screen as a series of physical surfaces rather than a flat canvas. This is a high-contrast, professional environment where vibrant accents drive the user's eye through a sophisticated, tiered hierarchy.

---

## 2. Colors

The palette is anchored by a high-energy primary orange-red (`#ff5c00`) set against a sophisticated grayscale foundation. The color roles are defined to create depth without relying on decorative lines.

### Palette Strategy
- **Primary (`#a73a00` / `#ff5c00`):** Reserved for high-intent actions and brand-defining moments. Use `primary_container` for large energy blocks and `primary` for refined, legible interactive elements.
- **Surface & Neutrals:** We utilize a range of light grays (`#f9f9f9` to `#eeeeee`) to create a sense of environment.
- **The "No-Line" Rule:** To maintain the premium editorial feel, **prohibit 1px solid borders for sectioning.** Boundaries between content blocks must be defined solely by background shifts. For example, a `surface_container_low` section should sit directly against a `surface` background to create a crisp, clean break.
- **Surface Hierarchy & Nesting:** Use the surface-container tiers (Lowest to Highest) to create "nested" depth.
    - *Surface:* The base canvas.
    - *Surface Container Low:* Primary section backgrounds.
    - *Surface Container Lowest:* Elevated cards or white-on-gray components for maximum pop.
- **The "Glass & Gradient" Rule:** For floating headers or overlays, use Glassmorphism (semi-transparent surface colors with 20px+ backdrop-blur) to ensure the UI feels integrated and modern.
- **Signature Textures:** Use subtle linear gradients from `primary` to `primary_container` on hero CTAs to provide a visual "vibration" and depth that flat color cannot achieve.

---

## 3. Typography

The typography is the voice of this system: bold, unyielding, and impeccably organized. We utilize **Inter** for structural headers and **Plus Jakarta Sans** for body and supportive titles to balance authority with approachability.

- **Display (Inter):** High-contrast and massive. Used for hero headers to establish immediate dominance.
- **Headline (Inter):** Bold and tight. Designed to be readable but aggressive.
- **Title (Plus Jakarta Sans):** These act as the "Editorial Bridge," guiding the user from big ideas to detailed reading.
- **Body (Plus Jakarta Sans):** Optimized for readability with generous leading.
- **Label (Inter):** Small-caps or tight tracking used for metadata and micro-copy.

**Editorial Hierarchy:** Always pair a `display-lg` header with a `body-lg` descriptor. Ensure there is significant contrast in scale to maintain the "high-end" look.

---

## 4. Elevation & Depth

We eschew traditional drop shadows in favor of **Tonal Layering** and **Ambient Light.**

- **The Layering Principle:** Stacking surface tiers creates a "soft lift." A `surface_container_lowest` card placed on a `surface_container_high` background provides all the separation needed for a premium UI.
- **Ambient Shadows:** Shadows should only be used on floating elements (e.g., Modals, Dropdowns). Use extra-diffused values: `0px 24px 48px rgba(0,0,0,0.06)`. The shadow must feel like a soft glow of ambient light, never a dark smudge.
- **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline_variant` token at **20% opacity**. This creates a "barely-there" container that defines space without cluttering the visual field.
- **Glassmorphism:** Use `surface_container_lowest` with 80% opacity and a `backdrop-filter: blur(12px)` for navigation bars and floating chips to maintain a sense of environmental continuity.

---

## 5. Components

### Buttons
- **Primary:** `primary` background with `on_primary` text. Use `roundedness.full` for a modern, pill-shaped look. Padding: `1.2rem 2.75rem`.
- **Secondary:** `surface_container_highest` background. No border. Soft and integrated.
- **Tertiary:** Text-only with an animated underline on hover using the `primary` token.

### Cards
- **Construction:** Use `surface_container_lowest` with no border. 
- **Spacing:** Use `spacing.6` (2rem) for internal padding to give imagery and text room to breathe.
- **Interaction:** On hover, a card should transition to a slightly higher surface tint or gain an ambient shadow—never a border change.

### Chips & Tags
- **Style:** Small, `label-md` typography. Use `primary_fixed` backgrounds with `on_primary_fixed` text for high-energy categorization.

### Input Fields
- **State:** Subtle `surface_container_high` background. 
- **Focus:** Transition the background to `surface_container_lowest` and apply a 1px "Ghost Border" using the `primary` token at 40% opacity. Forbid the default blue browser halo.

### Lists & Navigation
- **Rule:** **Forbid the use of divider lines.** Use vertical white space (`spacing.5` or `spacing.8`) to separate list items. The eye will perceive the grouping through proximity, maintaining the clean editorial aesthetic.

---

## 6. Do's and Don'ts

### Do
- **DO** use asymmetric layouts. Place a large `display-lg` header on the left and a `body-md` paragraph offset to the right.
- **DO** use `primary_container` as a full-bleed background for high-impact transition sections.
- **DO** allow imagery to overlap between two different `surface-container` sections to create a sense of depth and motion.
- **DO** prioritize white space. If a layout feels "crowded," double the spacing token.

### Don't
- **DON'T** use 100% black (`#000000`) for body text; use `on_surface` to maintain a professional, slightly softer contrast.
- **DON'T** use 1px solid black borders. It breaks the "Kinetic Editorial" flow and makes the UI look like a legacy template.
- **DON'T** use standard drop shadows (e.g., `0px 2px 4px`). They look "cheap" in this high-end context.
- **DON'T** use more than three levels of typography scale in a single component. Keep it focused and impactful.
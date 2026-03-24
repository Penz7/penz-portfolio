# Design System Specification: High-End Dark Editorial

## 1. Overview & Creative North Star: "The Kinetic Monolith"
This design system is built upon the concept of **The Kinetic Monolith**. It envisions the digital interface as a high-performance, dark architectural space where light is not just a color, but a source of energy. 

We move beyond the "template" look by rejecting traditional grid-bound boxes. Instead, we utilize **intentional asymmetry** and **high-scale typography** to create a mobile editorial experience that feels premium and authoritative. The interface should feel like a redacted document illuminated by a high-powered laser—sharp, secretive, and technologically superior.

**The Creative North Star:**
*   **Absolute Contrast:** Deep `surface` blacks meet the violent energy of `primary` Neon Green.
*   **Editorial Breath:** Large `20` (5rem) and `24` (6rem) spacing blocks to give content "gallery" status.
*   **Invisible Architecture:** No lines, only layers. Depth is defined by light, not borders.

---

## 2. Color & Surface Architecture

The palette is anchored in deep charcoal and carbon tones, punctuated by the high-voltage vibrance of Neon Green (#39FF14).

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning. Boundaries must be defined solely through background color shifts or subtle tonal transitions. Use `surface-container-low` against a `surface` background to define regions. 

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of obsidian glass.
*   **Base:** `surface` (#131313) for the main viewport.
*   **The Inset:** Use `surface-container-lowest` (#0e0e0e) for immersive, full-width content blocks.
*   **The Lift:** Use `surface-container-high` (#2a2a2a) for interactive modules that need to sit "above" the editorial flow.

### The "Glass & Gradient" Rule
To move beyond a flat "bootstrap" look, apply a subtle linear gradient to main CTAs (transitioning from `primary_container` #39ff14 to `secondary_container` #3aa625). For floating navigation or action bars, use **Glassmorphism**: 
*   **Background:** `surface_variant` (#353534) at 60% opacity.
*   **Effect:** Backdrop-blur: 20px. 
*   **Result:** The neon accents "bleed" through the dark glass, creating a sophisticated atmospheric glow.

---

## 3. Typography: The Editorial Voice

We use **Manrope** exclusively. Its geometric yet modern construction allows it to remain legible even at extreme scales.

*   **Display (The Statement):** Use `display-lg` (3.5rem) for hero headers. Apply `-0.04em` letter-spacing. This is your "Editorial Hook."
*   **Headline (The Narrative):** `headline-md` (1.75rem) should be used for section titles. Do not center them; use a left-aligned, asymmetrical placement to break the grid.
*   **Body (The Insight):** `body-lg` (1rem) for long-form content. Use a generous line-height to maintain the "luxury magazine" feel.
*   **Label (The Technical):** `label-md` (0.75rem) in all-caps with `+0.1em` tracking. This is used for metadata and utility tags, mimicking technical schematics.

---

## 4. Elevation & Depth: Tonal Layering

Traditional shadows are too "soft" for this system. We achieve hierarchy through **Tonal Layering**.

*   **The Layering Principle:** Place a `surface-container-low` card on a `surface` background. To create a "pressed" effect, switch the card to `surface-container-lowest`.
*   **Ambient Shadows:** If a floating effect is mandatory (e.g., a FAB), the shadow must be extra-diffused. 
    *   *Blur:* 40px. 
    *   *Opacity:* 8% of the `on_surface` color. 
    *   *Offset:* 0px (centered glow, not a drop shadow).
*   **The "Ghost Border" Fallback:** If accessibility requires a container boundary, use the `outline_variant` token at **15% opacity**. Never use 100% opaque borders.

---

## 5. Components & UI Elements

### Buttons
*   **Primary:** Fill with `primary_container` (#39ff14). Text color: `on_primary_container`. **Corner Radius:** `sm` (0.125rem) for a sharp, aggressive look.
*   **Secondary:** Ghost style. No fill. `outline` (#85967c) at 20% opacity. Text in `primary`.
*   **Tertiary:** Text-only. `label-md` styling.

### Cards & Lists
*   **Constraint:** Forbid the use of divider lines. 
*   **Structure:** Separate list items using `spacing-4` (1rem) of vertical white space or by alternating background tones between `surface` and `surface-container-low`.
*   **Visual Soul:** Use a subtle `primary` glow (2% opacity) on the top-left corner of cards to simulate light hitting an edge.

### Chips (Information Tags)
*   **Action Chips:** High contrast. `surface-container-highest` background with `primary` text.
*   **Shape:** Use `full` (9999px) roundedness to contrast against the sharp `sm` corners of buttons.

### Input Fields
*   **State:** Default state uses `surface-container-high`.
*   **Focus State:** The field background remains dark, but the bottom `px` (1px) edge glows with `primary`. Use a `primary` drop-shadow glow (10% opacity) to signify activity.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical margins. If the left margin is `8` (2rem), try a right margin of `12` (3rem) for headline elements.
*   **Do** lean into "Pure Black" zones. Use `surface-container-lowest` to create "voids" that make the neon text pop.
*   **Do** use Manrope's medium weight for body text to ensure it doesn't "disappear" into the dark background.

### Don't:
*   **Don't** use standard Material shadows. They look muddy and "out-of-the-box."
*   **Don't** use circular corners for everything. This is a "sharp" system. Reserve `full` rounding only for small UI chips or progress bars.
*   **Don't** use grey text for hierarchy. Instead, use `on_surface` and vary the **opacity** (e.g., 100% for titles, 60% for secondary info). This maintains the color temperature of the design.
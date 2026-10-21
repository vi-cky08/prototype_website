# Style Guide

Prototype Design should read as a professional mechanical engineering company: flat, precise, restrained. These rules apply to every page and component.

## Colors
Defined once as CSS variables in `src/index.css` (`@theme`). No orange.

| Role | Value | Token |
|---|---|---|
| Navy: headings, dark bands | `#0B2A5B` | `--color-navy` |
| Deep navy: footer, darkest band | `#071C3F` | `--color-navy-deep` |
| Blue: buttons, links, key numbers | `#1F5FBF` | `--color-primary` |
| White | `#FFFFFF` | `--color-white` |
| Light grey: alternate sections | `#F3F4F6` | `--color-grey` |
| Text | `#14181F` | `--color-ink` |
| Muted text | `#4B5563` | `--color-muted` |
| Borders | `#D9DCE1` | `--color-line` |

## Surfaces and effects
- No gradients anywhere: backgrounds, buttons, text, icon squares, card top lines.
- No glow, no blur or glass effects, no grid/dot background patterns, no curved section edges, no scroll progress bar.
- No shadows on cards or buttons.

## Cards
- Flat: white or light grey, 1px `#D9DCE1` border, 4px radius.
- Hover: the border turns blue. Nothing else changes or moves.

## Buttons and inputs
- 4px radius, flat.
- Primary: solid blue, white text.
- Secondary: white, 1px navy border.
- Inputs: 4px radius.

## Icons
- Plain line icons (lucide-react), navy or blue.
- No colored background square or circle behind them.

## Typography
- Headings: Archivo (Google Fonts), weights 700-800, letter-spacing -0.01em. Navy; white on dark bands.
- Body: Inter.

## Layout
- Sections alternate backgrounds: white, light grey, and flat dark navy bands.
- Section vertical padding: 80px desktop, 56px mobile.
- Content width: 1200px.
- Section eyebrows keep their text but are plain small uppercase blue text, with no decorative leading line.

## Responsive, accessibility and motion
- No horizontal overflow at 360px.
- Touch targets at least 44px.
- Visible focus states.
- Respect `prefers-reduced-motion`.
- Only a simple fade-in on scroll. No floating, bouncing or parallax effects.

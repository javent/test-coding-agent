# John Avent portfolio

A lightweight HTML/CSS/JavaScript rebuild of [johnnn.design](https://johnnn.design/). It reproduces the responsive portfolio layout without the Framer runtime or a framework/build step.

## Run locally

```bash
python3 -m http.server 4173
```

Then open <http://localhost:4173>.

## Files

- `index.html` — semantic page content and portfolio links
- `styles.css` — desktop, tablet, and mobile layouts
- `script.js` — reveal effects and the logo Lottie initialization
- `assets/fonts/` — local font fallbacks
- `vendor/lottie_light.min.js` — local Lottie SVG renderer

The original portfolio media and logo animation are referenced from their existing `framerusercontent.com` URLs so the exact GIFs, images, and Lottie data remain in use. The page itself has no package manager, framework, or compilation step.

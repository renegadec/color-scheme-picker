# Color Scheme Picker

A simple web app that generates 5-color palettes using a chosen base color and scheme mode. It leverages The Color API to fetch matching color schemes and displays the resulting swatches with their hex values.

## Features
- Choose a base color with the native color input
- Select a scheme mode (e.g., monochrome, triad, complement)
- Fetch a 5-color palette from The Color API
- View swatches alongside their hex codes

## How it works
1. Pick a base color and a scheme mode.
2. Click "Get color scheme".
3. The app calls `https://www.thecolorapi.com/scheme?hex=<HEX>&mode=<MODE>` and renders the 5 returned colors into the swatch area and hex labels.

## Local setup
This is a static site—no build step required.

### Run locally
- Open `index.html` directly in your browser, or
- Serve the folder with any static server (recommended to avoid CORS or module path issues).

Example using Python:
```bash
python3 -m http.server 5500
# Then open http://localhost:5500 in your browser
```

## File structure
- `index.html`: Markup for the UI (controls, swatches, hex labels)
- `src/styles.css`: Layout and visual styles for the app
- `src/main.js`: Fetches color schemes and updates the DOM

## Credits
- Color data provided by The Color API (`https://www.thecolorapi.com`)
- Typeface: Inter from Google Fonts
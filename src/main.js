// Grab UI controls
const colorPicker = document.getElementById('color-picker');
const getColorSchemeBtn = document.getElementById('get-color-scheme-btn');

// On click, fetch a color scheme from The Color API and render swatches + hex values
getColorSchemeBtn.addEventListener('click', () => {
    // Remove the leading '#' from the color input for API compatibility
    const cleanColor = colorPicker.value.slice(1);
    // Selected scheme mode (e.g., monochrome, triad, etc.)
    const colorSchemeSelector = document.getElementById('color-scheme-selector').value;

    // Fetch a 5-color scheme for the given base color and mode
    fetch(`https://www.thecolorapi.com/scheme?hex=${cleanColor}&mode=${colorSchemeSelector}`)
        .then(res => res.json())
        .then(data => {
            // Update each color block and label with the returned hex
            data.colors.forEach((color, index) => {
                document.querySelector(`.color-${index + 1}`).style.backgroundColor = color.hex.value;
                document.querySelector(`.color-text-${index + 1}`).textContent = color.hex.value;
            })
        });
})

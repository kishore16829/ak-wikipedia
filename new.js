// Function to change the color of the main title
function changeColor() {
    const titleElement = document.getElementById('WEBSITE');
    // Generate a random color in hexadecimal format
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // Apply the new color to the title element
    if (titleElement) {
        titleElement.style.color = randomColor;
    }
}

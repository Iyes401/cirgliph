// Mapping of characters to shapes for text and numbers
const charToShape = {
    'A': '○●○○', 'N': '●○●○',
    'B': '●○○○', 'O': '●●○○',
    'C': '○●●○', 'P': '●○●●',
    'D': '●●●○', 'Q': '○○○○',
    'E': '○○●○', 'R': '●●○●',
    'F': '●○○●', 'S': '○●○●',
    'G': '○○○●', 'T': '●●●●',
    'H': '●●○●', 'U': '○●●●',
    'I': '○●○○', 'V': '●○●○',
    'J': '●○○○', 'W': '●●●○',
    'K': '●●○○', 'X': '○●●○',
    'L': '○○●●', 'Y': '●●○●',
    'M': '●○○●', 'Z': '●●●●',
    '0': '○○○○', '5': '○○●●',
    '1': '●○○○', '6': '○●●●',
    '2': '○●○○', '7': '●●●●',
    '3': '○○●○', '8': '●●○○',
    '4': '○○○●', '9': '●●●○',
    ' ': '▫', '!': '!', '?': '?'
};

// Function to translate text to shapes with mode switching
function translateToShapes(text) {
    let translatedText = '';
    let isNumberMode = false;

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        // Check for mode switch
        if (char === '!') {
            isNumberMode = true;
        } else if (char === '?') {
            isNumberMode = false;
        } else {
            // Translate character to shape
            let shape = isNumberMode ? charToShape[char] : charToShape[char.toUpperCase()];
            translatedText += shape ? shape + ' ' : '';
        }
    }

    return translatedText.trim(); // Remove trailing space
}

// Example usage:
let inputText = "hello 123 hello";
let outputText = translateToShapes(inputText + ' ! ?');
console.log(outputText);

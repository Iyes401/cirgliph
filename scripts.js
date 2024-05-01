I apologize for the confusion. Let’s correct the translation logic. The input “hello 123 hello” should indeed translate to “●●○● ○○●○ ○○●● ○○●● ●●○○ ▫ ! ●○○○ ○●○○ ○○●○ ▫ ? ●●○● ○○●○ ○○●● ○○●● ●●○○” with the “!” indicating the start of number mode and “?” indicating the switch back to text mode.

Here’s the corrected JavaScript function:

JavaScript

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
    ' ': '▫'
};

// Function to translate text to shapes with mode switching
function translateToShapes(text) {
    let translatedText = '';
    let isNumberMode = false;

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (char === '!') {
            isNumberMode = true;
            continue; // Skip the symbol and switch to number mode
        } else if (char === '?') {
            isNumberMode = false;
            continue; // Skip the symbol and switch to text mode
        }

        let shape = isNumberMode ? charToShape[char] : charToShape[char.toUpperCase()];
        translatedText += shape ? shape + ' ' : ''; // Add space after each shape
    }

    return translatedText.trim(); // Remove trailing space
}

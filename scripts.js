// Mapping of characters to shapes
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
    ' ': '▫', '!': '!',
    '?': '?'
};

// Function to translate text to shapes
function translateToShapes(text) {
    let isNumberMode = false;
    return text.split('').map(char => {
        if (char === '!') {
            isNumberMode = true;
            return '';
        } else if (char === '?') {
            isNumberMode = false;
            return '';
        } else {
            return isNumberMode ? charToShape[char] || char : charToShape[char.toUpperCase()] || char;
        }
    }).join(' ');
}

// Event listener for the translate button
document.getElementById('translate-button').addEventListener('click', function() {
    var inputText = document.getElementById('input-text').value;
    var translationOutput = document.getElementById('translation-output');
    var translatedText = translateToShapes(inputText);
    translationOutput.textContent = translatedText;
});

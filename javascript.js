// define number of squares per side
let gridWidth = 16;

// calculate total number of squares
let numberOfSquares = gridWidth * gridWidth;

// give number of squares per side to CSS stylesheet
let style = document.createElement('style');
style.innerHTML = `
:root {
    --number-squares: ${gridWidth};
}
`;
document.head.appendChild(style);

// create container node for the squares
const container = document.querySelector('.container');

// create numberOfSquares squares with unique ids
for (i=0; i < numberOfSquares; i++) {
    let square = document.createElement('div');
    square.id = 's' + i;
    square.className = 'square';
    container.appendChild(square);
}
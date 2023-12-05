// define number of squares per side
let gridWidth = 15;

// calculate total number of squares
let numberOfSquares = gridWidth * gridWidth;

// give number of squares per side to CSS stylesheet
function updateCSS (gridWidth) {
    let style = document.createElement('style');
    style.innerHTML = `
    :root {
        --number-squares: ${gridWidth};
    }
    `;
    document.head.appendChild(style);
}

// create container node for the squares
const container = document.querySelector('.container');

// create numberOfSquares squares with unique ids
function createGrid(numberOfSquares) {
    for (i=0; i < numberOfSquares; i++) {
        let square = document.createElement('div');
        square.id = 's' + i;
        square.className = 'square';
        container.appendChild(square);
    }
}

// add hover effect for every square
function createHover() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.cssText = "background-color: yellow;";
        })
    })
}

// remove grid
function removeGrid(previousNumberOfSquares) {
    let iterations = previousNumberOfSquares*previousNumberOfSquares;
    for (i=0; i < iterations; i++) {
        let div = 'div#s' + i;
        div = document.querySelector(div);
        container.removeChild(div);
    }
}

// add button for user input for grid size
const button = document.querySelector('#input');
button.addEventListener('click', () => {
    previousNumberOfSquares = gridWidth;
    gridWidth = prompt('How many squares wide should the grid be?', '15');
    numberOfSquares = gridWidth*gridWidth;
    removeGrid(previousNumberOfSquares);
    updateCSS(gridWidth);
    createGrid(numberOfSquares);
    createHover();
})

updateCSS(gridWidth);
createGrid(numberOfSquares);
createHover();
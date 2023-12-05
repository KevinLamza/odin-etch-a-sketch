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
            let randR = Math.floor(Math.random() * 255) + 1;
            let randG = Math.floor(Math.random() * 255) + 1;
            let randB = Math.floor(Math.random() * 255) + 1;
            square.style.backgroundColor = "rgb(" + randR + ", " + randG + ", " + randB + ")";
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
    let keepGoing = 1;
    gridWidth = prompt('How many squares wide should the grid be? It needs to be less than 100!', '15');
    // alert(!Number.isInteger(gridWidth));
    while (keepGoing) {
    if (isNaN(gridWidth) || !Number.isInteger(Number(gridWidth)) || Number(gridWidth) < 0 || Number(gridWidth) > 100) {
        alert('Only positive Integers smaller than 101 are allowed!');
        gridWidth = prompt('How many squares wide should the grid be? It needs to be less than 100!', '15');
    } else {
        keepGoing = 0;
    }
    } 
    numberOfSquares = gridWidth*gridWidth;
    removeGrid(previousNumberOfSquares);
    updateCSS(gridWidth);
    createGrid(numberOfSquares);
    createHover();
})

updateCSS(gridWidth);
createGrid(numberOfSquares);
createHover();
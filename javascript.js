// define number of squares per side
let gridWidth = 15;

// calculate total number of squares
let numberOfSquares = gridWidth * gridWidth;

// contains id, the amount hovers per square, and rgb color codes
hoverCounter = [];

// update number of squares in css stylesheet after user input
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

// create squares with unique ids and default hover counter and color codes 
function createGrid(numberOfSquares) {
    for (i=0; i < numberOfSquares; i++) {
        let square = document.createElement('div');
        square.id = 's' + i;
        square.className = 'square';
        hoverCounter[i] = [i,0,255,255,255]; // id,hovercounter,colorred,colorgreen,coloryellow
        container.appendChild(square);
    }
}

// add hover effect for every square
function createHover() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            let id = Number(square.id.substring(1)); //take id (s47), remove letter s, convert to number
            ++hoverCounter[id][1];
            // match random color only with first hover
            if (hoverCounter[id][1] === 1) {
                let randR = Math.floor(Math.random() * 255) + 1;
                let randG = Math.floor(Math.random() * 255) + 1;
                let randB = Math.floor(Math.random() * 255) + 1;
                square.style.backgroundColor = "rgb(" + randR + ", " + randG + ", " + randB + ")";
                // save the random color from first hover in array
                hoverCounter[id][2] = randR;
                hoverCounter[id][3] = randG;
                hoverCounter[id][4] = randB;
            }
            else {
                // for all hovers after first one use a multiplier to make same color darker 
                let colorR = hoverCounter[id][2] * (1 - (hoverCounter[id][1] * 0.1));
                let colorG = hoverCounter[id][3] * (1 - (hoverCounter[id][1] * 0.1));
                let colorB = hoverCounter[id][4] * (1 - (hoverCounter[id][1] * 0.1));
                square.style.backgroundColor = "rgb(" + colorR + ", " + colorG + ", " + colorB + ")";
            }
        })
    })
}

// remove grid after user input
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
    while (keepGoing) {
    if (isNaN(gridWidth) || !Number.isInteger(Number(gridWidth)) || Number(gridWidth) < 0 || Number(gridWidth) > 100) {
        alert('Only positive Integers smaller than 101 are allowed!');
        gridWidth = prompt('How many squares wide should the grid be? It needs to be less than 100!', '15');
    } else {
        keepGoing = 0;
    }
    } 
    numberOfSquares = gridWidth*gridWidth;
    hoverCounter = [];
    removeGrid(previousNumberOfSquares);
    updateCSS(gridWidth);
    createGrid(numberOfSquares);
    createHover();
})

updateCSS(gridWidth);
createGrid(numberOfSquares);
createHover();
let gridWidth = 16;
let numberOfSquares = gridWidth * gridWidth;

const container = document.querySelector('.container');

for (i=0; i < numberOfSquares; i++) {
    let square = document.createElement('div');
    square.id = 's' + i;
    square.className = 'square';
    container.appendChild(square);
}
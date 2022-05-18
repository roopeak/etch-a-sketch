// Creates the grid according to user input
function makeGrid(size) {
    let grid = document.querySelector(".grid");
    grid.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size} , 1fr)`;

for (i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.classList.add('cell');
    grid.insertAdjacentElement("beforeend", square); 
    square.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'black';
    });
  }
}

makeGrid(16);
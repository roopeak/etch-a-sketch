// Defines the size of the grid
function gridSize() {
    const btn = document.querySelector('.size');
    btn.addEventListener('click', () => {
        const input = prompt("Give a grid size between 2 and 100: ");
        if (input > 100 || input < 2)
            alert("Grid is out of range.")
        else makeGrid(input);
    });
  
}


// Creates the grid according to user input
function makeGrid(size) {    
    let grid = document.querySelector('.grid');
    let squares = grid.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    grid.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let amount = size * size;
    for (i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.classList.add('cell');
        grid.insertAdjacentElement('beforeend', square); 
        square.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'black';
        });
    }
}


gridSize();
makeGrid();
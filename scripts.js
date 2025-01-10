const gridContainer = document.querySelector('.grid-container');
const sizeBtn = document.querySelector('.size-btn');
const resetBtn = document.querySelector('.reset-btn');

function generateGrid(size) {
	resetGrid();
	gridContainer.style.display = "grid";
	gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
	gridContainer.style.width = "600px";
	gridContainer.style.height = "600px";

	for (let i = 0; i < size * size; i++) {
		const gridItem = document.createElement("div");
		gridItem.classList.add("grid-item");
		gridItem.style.border = "1px solid black";
		gridContainer.appendChild(gridItem);

		gridItem.addEventListener("mouseover", () => {
				gridItem.style.backgroundColor = "black";
		});
	}
}

function askInput() {
	while (true) {
		let input = prompt("Type the size of the grid (1-100):");
		input = Number(input);

		if (!isNaN(input) && input >= 1 && input <= 100) {
			return input;
		} else {
			alert('Grid size must be between 1 and 100!');
		}
	}
}

function resetGrid() {
	gridContainer.innerHTML = '';
}

sizeBtn.addEventListener('click', () => {
	const gridSize = askInput();
	generateGrid(gridSize);
})

resetBtn.addEventListener('click', () => {
	resetGrid();
})
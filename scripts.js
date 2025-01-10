let rainbowEnabled = false;
let gridSize = 16;

const gridContainer = document.querySelector('.grid-container');
const sizeBtn = document.querySelector('.size-btn');
const resetBtn = document.querySelector('.reset-btn');
const rainbowBtn = document.querySelector('.rainbow-btn');

function generateGrid(size) {
	gridContainer.innerHTML = '';
	gridContainer.style.display = "grid";
	gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
	gridContainer.style.width = "600px";
	gridContainer.style.height = "600px";

	for (let i = 0; i < size * size; i++) {
		const gridItem = document.createElement("div");
		gridItem.classList.add("grid-item");
		gridContainer.appendChild(gridItem);

		gridItem.addEventListener("mouseover", () => {
			if (rainbowEnabled === true) {
				gridItem.style.backgroundColor = getRandomRgb();
			} else {
				gridItem.style.backgroundColor = "black";
			}
		});
	}
}

function askInput() {
	while (true) {
		gridSize = prompt("Type the size of the grid (1-100):");
		gridSize = Number(gridSize);

		if (!isNaN(gridSize) && gridSize >= 1 && gridSize <= 100) {
			return gridSize;
		} else {
			alert('Grid size must be between 1 and 100!');
		}
	}
}

function toggleRainbow() {
	if (rainbowEnabled === false) {
		rainbowEnabled = true;
	} else {
		rainbowEnabled = false;
	}
}

function getRandomRgb() {
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 16;
  var g = num >> 8 & 255;
  var b = num & 255;
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

sizeBtn.addEventListener('click', () => {
	const gridSize = askInput();
	generateGrid(gridSize);
})

sizeBtn.addEventListener('mouseover', () => {
	sizeBtn.style.backgroundColor = 'white';
	sizeBtn.style.color = 'black';
})

sizeBtn.addEventListener('mouseout', () => {
	sizeBtn.style.backgroundColor = 'black';
	sizeBtn.style.color = 'white';
})

resetBtn.addEventListener('click', () => {
	generateGrid(gridSize);
})

resetBtn.addEventListener('mouseover', () => {
	resetBtn.style.backgroundColor = 'white';
	resetBtn.style.color = 'black';
})

resetBtn.addEventListener('mouseout', () => {
	resetBtn.style.backgroundColor = 'black';
	resetBtn.style.color = 'white';
})

rainbowBtn.addEventListener('click', () => {
	toggleRainbow();
	if (rainbowBtn.textContent === 'Enable rainbow') {
		rainbowBtn.textContent = 'Disable rainbow'
		rainbowBtn.style.backgroundColor = 'white'
		rainbowBtn.style.color = 'black';
	} else {
		rainbowBtn.textContent = 'Enable rainbow'
	}
})

rainbowBtn.addEventListener('mouseover', () => {
	rainbowBtn.style.backgroundColor = 'white';
	rainbowBtn.style.color = 'black';
})

rainbowBtn.addEventListener('mouseout', () => {
	rainbowBtn.style.backgroundColor = 'black';
	rainbowBtn.style.color = 'white';
})

generateGrid(gridSize);
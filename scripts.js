const gridContainer = document.querySelector('.grid-container');

for (let i = 0; i < 16 * 16; i++) {
  const gridItem = document.createElement('div');
  gridItem.classList.add('grid-item');
  gridContainer.appendChild(gridItem);
}

// function generateGrids() {
//   for (let i = 0; i < 16; i++) {
// 		for (let j = 0; j < 16; j++) {
// 			const grid = document.createElement('div');
// 			grid.classList.add('grid');
// 			gridContainer.appendChild(grid);
// 		}
// 	}   
// }

// generateGrids();
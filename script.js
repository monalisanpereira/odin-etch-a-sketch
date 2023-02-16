// ---------- VARIABLES AND ELEMENTS ----------

let pencilMode = 'pencil';
const sketchGrid = document.getElementById('sketch-grid');
const pencilButton = document.getElementById('control-bar__pencil-button');
const eraserButton = document.getElementById('control-bar__eraser-button');
const clearButton = document.getElementById('control-bar__clear-button');

// ---------- FUNCTIONS ----------

function generateGrid() {
  for (let i = 0; i < 16*16; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("sketch-grid__square")
    sketchGrid.appendChild(newDiv);
  }
}

function paintSquare() {
  this.classList.add("sketch-grid__square--painted");
}

function changeMode(mode) {
  pencilMode = mode;
}

function clearGrid() {
  for (let i = 0; i < gridSquareList.length; i++) {
    gridSquareList[i].classList.remove("sketch-grid__square--painted");
  };
};

// ---------- FUNCTION CALLS ----------

generateGrid();

// ---------- NEW ELEMENTS ----------

const gridSquareList = document.querySelectorAll('.sketch-grid__square');

// ---------- EVENT LISTENERS ----------

for (let i = 0; i < gridSquareList.length; i++) {
  gridSquareList[i].addEventListener('mouseover', ()=>{
    if (pencilMode == 'pencil') {
      gridSquareList[i].classList.add("sketch-grid__square--painted");
    } else if (pencilMode == 'eraser') {
      gridSquareList[i].classList.remove("sketch-grid__square--painted");
    };
  });
};

pencilButton.addEventListener('click', changeMode.bind(this, 'pencil'));
eraserButton.addEventListener('click', changeMode.bind(this, 'eraser'));
clearButton.addEventListener('click', clearGrid);
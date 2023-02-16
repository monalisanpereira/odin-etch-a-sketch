// ---------- VARIABLES AND ELEMENTS ----------

const sketchGrid = document.getElementById('sketch-grid');
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

function clearGrid() {
  for (let i = 0; i < gridSquareList.length; i++) {
    gridSquareList[i].classList.remove("sketch-grid__square--painted");
  };
};

// ---------- FUNCTION CALLS ----------

generateGrid();

// ---------- NEW ELEMENTS ----------

const gridSquareList = document.querySelectorAll('.sketch-grid__square');

// ---------- EVENT LISTENER ----------

for (let i = 0; i < gridSquareList.length; i++) {
  gridSquareList[i].addEventListener('mouseover', ()=>{
    gridSquareList[i].classList.add("sketch-grid__square--painted")
  });
};

clearButton.addEventListener('click', clearGrid);
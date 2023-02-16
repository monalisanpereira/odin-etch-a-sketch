// ---------- VARIABLES AND ELEMENTS ----------

let pencilMode = 'pencil';
const sketchGrid = document.getElementById('sketch-grid');
const colorPicker = document.getElementById('control-bar__colorpicker');
const pencilButton = document.getElementById('control-bar__pencil-button');
const eraserButton = document.getElementById('control-bar__eraser-button');
const clearButton = document.getElementById('control-bar__clear-button');
let chosenColor = colorPicker.value;

// ---------- FUNCTIONS ----------

function generateGrid() {
  for (let i = 0; i < 16*16; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("sketch-grid__square")
    sketchGrid.appendChild(newDiv);
  }
}

function changeMode(mode) {
  pencilMode = mode;
}

function clearGrid() {
  for (let i = 0; i < gridSquareList.length; i++) {
    gridSquareList[i].style.backgroundColor = "transparent";
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
      gridSquareList[i].style.backgroundColor = chosenColor;
    } else if (pencilMode == 'eraser') {
      gridSquareList[i].style.backgroundColor = "transparent";
    };
  });
};

colorPicker.addEventListener('change', (e) => {
  chosenColor = e.target.value;
});

pencilButton.addEventListener('click', changeMode.bind(this, 'pencil'));
eraserButton.addEventListener('click', changeMode.bind(this, 'eraser'));
clearButton.addEventListener('click', clearGrid);
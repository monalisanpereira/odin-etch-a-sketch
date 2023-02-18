// ---------- VARIABLES AND ELEMENTS ----------

let pencilMode = 'pencil';
let pencilActive = false;
let gridSquareList;
const sketchGrid = document.getElementById('sketch-grid');
const sizeSlider = document.getElementById('control-bar__slider');
const colorPicker = document.getElementById('control-bar__colorpicker');
const pencilButton = document.getElementById('control-bar__pencil-button');
const eraserButton = document.getElementById('control-bar__eraser-button');
const clearButton = document.getElementById('control-bar__clear-button');
let chosenColor = colorPicker.value;

// ---------- FUNCTIONS ----------

function generateGrid(size) {
  sketchGrid.innerHTML = '';

  sketchGrid.style.gridTemplateColumns = `repeat(${size}, auto)`;
  sketchGrid.style.gridTemplateRows = `repeat(${size}, auto)`;

  for (let i = 0; i < size * size; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("sketch-grid__square");
    sketchGrid.appendChild(newDiv);
  }

  makeGridFunctional();
}

function changeMode(mode) {
  pencilMode = mode;
}

function clearGrid() {
  for (let i = 0; i < gridSquareList.length; i++) {
    gridSquareList[i].style.backgroundColor = "transparent";
  };
};

function makeGridFunctional() {
  gridSquareList = document.querySelectorAll('.sketch-grid__square');
  for (let i = 0; i < gridSquareList.length; i++) {
    gridSquareList[i].addEventListener('mouseover', ()=>{
      if (pencilActive == true) {
        if (pencilMode == 'pencil') {
          gridSquareList[i].style.backgroundColor = chosenColor;
        } else if (pencilMode == 'eraser') {
          gridSquareList[i].style.backgroundColor = "transparent";
        }
      }
    })
  }
}

// ---------- FUNCTION CALLS ----------

generateGrid(sizeSlider.value);

// ---------- EVENT LISTENERS ----------

sketchGrid.addEventListener('mousedown', (e) => {
  pencilActive = true;
});

sketchGrid.addEventListener('mouseup', (e) => {
  pencilActive = false;
});

sizeSlider.addEventListener('change', (e) => {
  generateGrid(e.target.value);
});

colorPicker.addEventListener('change', (e) => {
  chosenColor = e.target.value;
});

pencilButton.addEventListener('click', changeMode.bind(this, 'pencil'));
eraserButton.addEventListener('click', changeMode.bind(this, 'eraser'));
clearButton.addEventListener('click', clearGrid);
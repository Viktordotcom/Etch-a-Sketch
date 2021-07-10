// 1. Create a webpage with a 16x16 grid of square divs. - Done
// 2. Set up a “hover” effect so that the grid divs change color
// , when your mouse passes over them - Done
// 3. Add a button to the top of the screen which will clear the current grid 
// , and send the user a popup asking for the number of squares per side for the new grid. - Done
// 4.  Once entered, the new grid should be generated in the same total space as before (e.g. 960px wide)  - Done (hardest one for me)
// 5. Have each pass through with the mouse change it to a completely random RGB value. - Done

const mainDiv = document.getElementById('main-container');
const btnContainer = document.createElement('div');
const button = document.createElement('button');
const eraserBtn = document.createElement('button');
const rainbowBtn = document.createElement('button');
const blkBtn = document.createElement('button');

mainDiv.classList.add('mainContainer');
button.textContent = 'Clear&Draw Again';
button.addEventListener('click', clearGrid);
eraserBtn.textContent = 'Use Eraser';
eraserBtn.addEventListener('click', whiteCells)
rainbowBtn.textContent = 'Rainbow';
rainbowBtn.addEventListener('click', rainbow);
blkBtn.textContent = 'Black color';
blkBtn.addEventListener('click', blkCells);

// takes the parameter number and makes css property changes to the 
// , main Container's grid attributes, also fills the grid with
// , div elements 
function createGrid(cells){
    
for(let i=0; i<cells;i++){

for(let j=0;j<cells;j++){
   let div = document.createElement('div');
    div.classList.add('cells')
    mainDiv.appendChild(div);
    document.documentElement.style.setProperty('--cells', cells);
};
};
blkCells()
};

createGrid(50);

btnContainer.classList.add('btn-container')
button.classList.add('buttons');
eraserBtn.classList.add('buttons');
rainbowBtn.classList.add('buttons');
blkBtn.classList.add('buttons');

document.body.appendChild(btnContainer);
btnContainer.appendChild(button);
btnContainer.appendChild(eraserBtn);
btnContainer.appendChild(rainbowBtn);
btnContainer.appendChild(blkBtn);

// first remove all child elements, then ask for user input
// , transform it into number and create that many cells 
function clearGrid(){

    const elements = document.getElementsByClassName('cells');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
    ask = Number(prompt('Enter new dimensions', '16'));
    if(ask >100) return alert('Please enter a value below 100');
    createGrid(ask);
    blkCells()
   };

   // on mouseover change the cells background 
   function whiteCells(){
       const whiteCell = document.querySelectorAll('.cells');
       whiteCell.forEach(item => item.addEventListener('mouseover', ()=>item.style.backgroundColor = 'cornsilk'));
   }
   function rainbow(){
       const randomCell = document.querySelectorAll('.cells');
       randomCell.forEach(item => item.addEventListener('mouseover', ()=>item.style.backgroundColor = 'rgb('+Math.floor(Math.random()*255)+', '+Math.floor(Math.random()*255)+', '+Math.floor(Math.random()*255)+')'));
   }
   function blkCells(){
       const randomCell = document.querySelectorAll('.cells');
    randomCell.forEach(item => item.addEventListener('mouseover', ()=>{
        item.style.backgroundColor = 'black';
    }));
}

let rows = 4;
let columns = rows;

const divContainer = document.querySelector("#divContainer");
const clearButton = document.querySelector("#clear");
const blackButton = document.querySelector("#black");
const rainbowButton = document.querySelector("#rainbow");
const gridButton = document.querySelector("#borderOn");
const colorButton = document.querySelector("#colorPicker");
const gridScaler = document.querySelector("#gridSize");
const sizeDisplay = document.querySelector("#size");

function createGrid(){
    divContainer.style.display="grid";
    divContainer.style.gridTemplateColumns= `repeat(${rows},1fr)`;
    divContainer.style.gridTemplateRows = `repeat(${columns},1fr)`;

    for(let col=1;col <= columns;col++){
        for(let row=1;row<=rows;row++){
           
            const divCell = document.createElement("div");
            divCell.setAttribute("id",`cell-${col}-${row}`);
            divCell.setAttribute("class","cell");
            // divCell.style.border="1px dashed";
            // divCell.style.Height="20px";
            //  divCell.style.Width="20px";
            // divCell.innerText="hi";
            divContainer.appendChild(divCell);
            // console.log(divCell);
        }
    }
}

//This has to be before
//const cells = document.querySelectorAll(".cell");
//in order for cells to be populated.
createGrid();

function draw(e){
    // console.log(e);
    if(e.target.className != 'cell'){ return;}
    // console.log(e.target.id);
    // console.log(typeof(e.target.id));
    const cell = document.querySelector(`#${e.target.id}`);
    // console.log(cell);
    cell.style.background="black";
}

const cells = document.querySelectorAll(".cell");

cells.forEach(cell => {
    addEventListener("mouseover",draw)
});

function clearGrid(e){
    // const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.style.background="white";
    })
}

clearButton.addEventListener('click',clearGrid);



// function setGridSize(e){
//     cells.forEach(cell=>
//         divContainer.removeChild(cell))

//     rows = gridScaler.value;
//     columns= gridScaler.value;
//     sizeDisplay.textContent = rows;
//     createGrid();

// }

// gridScaler.addEventListener('mouseup', setGridSize);


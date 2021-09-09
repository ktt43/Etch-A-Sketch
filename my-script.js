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
    console.log("CREATING GRID");
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

//e is the event
function draw(e){
    if(e.target.className != 'cell'){ return;}
    const cell = document.querySelector(`#${e.target.id}`);
    cell.style.background="black";
}

//Get All the NxN updated Cells
function getAllCells(){
    return document.querySelectorAll(".cell");
}

// getAllCells().forEach(cell => {
//     console.log("ADD DRAW");
//     addEventListener("mouseover",draw)
// });

window.addEventListener("mouseover",draw);

function clearGrid(e){
    console.log("CLEARING GRID");
    // const cells = document.querySelectorAll(".cell");
    getAllCells().forEach(cell => {
        cell.style.background="white";
    })
}

function setGridSize(e){
    console.log("SETTING GRID SIZE");
    getAllCells().forEach(cell=>
        divContainer.removeChild(cell))

    rows = gridScaler.value;
    columns= gridScaler.value;
    sizeDisplay.textContent = rows;
    createGrid();

}

function toggleBorder(e){
    // console.log(divContainer.childNodes);
    divContainer.childNodes.forEach(cell =>{
        // console.log(cell.className);
        if(cell.className === "cell"){
            if(cell.style.border !== "1px solid"){
                cell.style.border="1px solid"
                return;
            }
            cell.style.border="none";
        }
    // console.log(cell);
    
    });
    

}

gridScaler.addEventListener('mouseup', setGridSize);
clearButton.addEventListener('click',clearGrid);
gridButton.addEventListener('click',toggleBorder);
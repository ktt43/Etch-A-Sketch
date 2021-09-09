let rows = 40;
let columns = rows;

const divContainer = document.querySelector("#divContainer");
const clearButton = document.querySelector("#clear");
const rainbowButton = document.querySelector("#rainbow");
const gridButton = document.querySelector("#borderOn");
const colorButton = document.querySelector("#colorPicker");
const gridScaler = document.querySelector("#gridSize");
const sizeDisplay = document.querySelector("#size");
let border = false;
let rainbow = false;
let currentColor="#000000";

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
            divContainer.appendChild(divCell);
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
    if(!rainbow){
        console.log(currentColor);
        cell.style.backgroundColor=currentColor;
        colorButton.value = currentColor;
        
        return;
    } else {
        currentColor = "#"+Math.floor(Math.random()*16777215).toString(16);
        cell.style.backgroundColor = currentColor;
        // console.log(typeof(currentColor));
        colorButton.value =currentColor;
        return;
    }
   
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
    if(border){
        toggleBorder();
    }
}

function toggleBorder(e){
    divContainer.childNodes.forEach(cell =>{
        if(cell.className === "cell"){
            if(cell.style.border !== "1px solid"){
                cell.style.border="1px solid"
                border =true;
           
                gridButton.style.boxShadow="0px 0px 10px red"
                return;
            }
            cell.style.border="none";
            gridButton.style.boxShadow="none"
            border =false;
        }
    });
}

function toggleRainbow(e){
    if(!rainbow){
        rainbow=true;
        rainbowButton.style.boxShadow="0px 0px 10px red"
    } else {
        rainbow=false;
        rainbowButton.style.boxShadow="none"
    }
}

function changeColor(e){
    currentColor=e.target.value;
}




gridScaler.addEventListener('mouseup', setGridSize);
clearButton.addEventListener('click',clearGrid);
gridButton.addEventListener('click',toggleBorder);
rainbowButton.addEventListener('click',toggleRainbow);
colorButton.addEventListener('change',changeColor);
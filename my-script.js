let rows = 15;
let columns = 15;

const divContainer = document.querySelector("#divContainer");

function createGrid(){
    divContainer.style.display="grid";
    divContainer.style.gridTemplateColumns= `repeat(${rows},minmax(40px,40px))`;
    divContainer.style.gridTemplateRows = `repeat(${columns},minmax(40px,40px))`;

    for(let col=1;col <= columns;col++){
        for(let row=1;row<=rows;row++){
           
            const divCell = document.createElement("div");
            divCell.setAttribute("id",`cell-${col}-${row}`);
            divCell.setAttribute("class","cell");
            divCell.style.border="1px dashed";
            divCell.style.Height="20px";
            divCell.style.Width="20px";
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



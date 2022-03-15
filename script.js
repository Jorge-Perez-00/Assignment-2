let colorSelected;

//Adds a row
function addR() {
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");


    if (rows.length === 0) {
        let row = document.createElement("tr");
        let col = document.createElement("td");
        row.appendChild(col);
        col.onclick = function () {
            this.style.backgroundColor = colorSelected;
        };
        
        grid.appendChild(row);
    }
    else {
        let NumberOfColumns = rows[0].childElementCount
        let row = document.createElement("tr")
        
        for (let i = 0; i < NumberOfColumns; i++){
            let col = document.createElement("td");
            col.onclick = function() {
                this.style.backgroundColor = colorSelected;
            }
            row.appendChild(col);
        }
        
        grid.appendChild(row);
    }
    
}

//Adds a column
function addC() {
    let grid = document.getElementById("grid")
    let cols = document.getElementsByTagName("td");
    console.log(cols.length);

    if(cols.length === 0) {
        let row = document.createElement("tr");
        let col = document.createElement("td");
        row.appendChild(col);
        col.onclick = function () {
            this.style.backgroundColor = colorSelected;
        };

        grid.appendChild(row);
    }
    else{
        let rows = document.querySelectorAll("tr")
        
        for(let row of rows) {
            let col = document.createElement("td")
            col.onclick = function () {
                this.style.backgroundColor = colorSelected;
            }

            row.appendChild(col)
        }
        
    }
}

//Removes a row
function removeR() {
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");

    if(rows.length === 0) {
        alert("There are no rows to delete")
    }
    else{
        grid.removeChild(grid.lastElementChild)
    }
}

//Removes a column
function removeC() {
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");

    if(rows.length === 0){
        alert("There are no columns to delete");
    }
    else{
        let columns = rows[0].childElementCount
        if(columns === 1) {
            while(rows.length > 0) {
                grid.removeChild(grid.lastElementChild);
            }
        }
        else{
            for(let row of rows) {
                row.removeChild(row.lastElementChild);
            }
        }
    }
}

//sets global var for selected color
function selected() {
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

//Fills all the cells to the current selected color
function fill() {
    let cells = document.querySelectorAll("td")

    for(let cell of cells){
        cell.style.backgroundColor = colorSelected;
    }
}

//Clears all cells to its default color
function clearAll() {
    let cells = document.querySelectorAll("td")

    for(let cell of cells){
        cell.style.backgroundColor = ""
    }

}

//Fills all uncolored cells with the currently selected color
function fillU() {
    let cells = document.querySelectorAll("td")
    
    for(let cell of cells) {
        if(cell.style.backgroundColor == ""){
            cell.style.backgroundColor = colorSelected;
        }
    }
}
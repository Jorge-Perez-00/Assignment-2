let colorSelected;

//Adds a row
function addR() {
    //alert("Clicked Add Row")
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");
    //console.log(rows.length);


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
    //alert("Clicked Add Col")
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
    //alert("Clicked Remove Row")
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");

    if(rows.length === 0) {
        alert("There are no rows to delete")
    }
    else{
        grid.removeChild(grid.lastElementChild)
    }
}

//Remove a column
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
    //alert("Clicked Remove Col")
}

//sets global var for selected color
function selected() {
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill() {
    alert("Clicked Fill All")
}

function clearAll() {
    alert("Clicked Clear All")
}

function fillU() {
    alert("Clicked Fill All Uncolored")
}
document.addEventListener('DOMContentLoaded', () => {
    drawGrid(16);
    document.querySelector(".clrbtn").onclick = function() {
        document.querySelectorAll(".gridbox").forEach(box => {
            box.style['background-color'] = "white";
        })
        const gridSize = Number(prompt("Enter grid size:"))
        if (gridSize <= 100){
            drawGrid(gridSize);
        }
        else {
            alert("Grid size cannot be greater than 100!");
        }
    }
})

let colorStatus = true;

document.addEventListener('keypress', e => {
    console.log("clicked")
    console.log(e);
    if (e.code === "KeyQ") {
        if (colorStatus){
            document.querySelectorAll(".gridbox").forEach(box => {
                box.onmouseover = function(){};
            })
            colorStatus = false;
        }
        else {
            document.querySelectorAll(".gridbox").forEach(box => {
                box.onmouseover = function() {
                    this.style['background-color'] = "red";
                }
            })
            colorStatus = true;
            document.addEventListener('mousemove', colorCurrentBox)
        }
    }
})

function colorCurrentBox(event) {
    var x = event.clientX, y = event.clientY;
    const box = document.elementFromPoint(x, y)
    if (box.nodeName === "DIV") {
        box.style['background-color'] = "red";
    }
    document.removeEventListener('mousemove', colorCurrentBox);
    return;
}


function drawGrid(gridSize) {
    document.querySelectorAll(".gridbox").forEach(box => {
        box.remove();
    })
    const gridContainer = document.querySelector(".gridcontainer");
    for (let i = 0; i < (gridSize*gridSize); i++) {
        const box = document.createElement('div');
        box.classList.add("gridbox");
        box.style.height = `${936/gridSize}px`;
        box.style.width = `${936/gridSize}px`;
        box.onmouseover = function() {
            box.style['background-color'] = "red";
        }
        gridContainer.appendChild(box);
    }
    return;
}

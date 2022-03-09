document.addEventListener('DOMContentLoaded', () => {
    drawGrid(16);
    document.querySelector(".clrbtn").onclick = function() {
        const gridSize = Number(prompt("Enter grid size:"))
        document.querySelectorAll(".gridbox").forEach(box => {
            box.style['background-color'] = "white";
        })
        drawGrid(gridSize);
    }
})

let colorStatus = true;

document.addEventListener('keypress', e => {
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
    if (box.nodeName == "DIV") {
        box.style['background-color'] = "red";
    }
    document.removeEventListener('mousemove', colorCurrentBox);
}

function drawGrid(gridSize) {
    document.querySelectorAll(".gridbox").forEach(box => {
        box.remove();
    })
    const gridContainer = document.querySelector(".gridcontainer");
    // create square of gridSize boxes
    for (let i = 0; i < gridSize^2; i++) {
        const box = document.createElement('div');
        box.classList.add("gridbox");
        box.style.height = `${(960/gridSize) - 2.5}px`;
        box.style.width = `${(960/gridSize) - 2.5}px`;
        box.onmouseover = function() {
            this.style['background-color'] = "red";
        }
        document.querySelector(".gridcontainer").appendChild(box);
    }
}
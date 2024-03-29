﻿document.addEventListener('DOMContentLoaded', () => {
    drawGrid(16);
    document.querySelector(".clrbtn").onclick = function() {
        document.querySelectorAll(".gridbox").forEach(box => {
            box.style['background-color'] = "white";
        })
        const gridSize = Number(prompt("Enter grid size:"))
        if (gridSize <= 100 && gridSize > 0){
            drawGrid(gridSize);
        }
        else if (gridSize > 100){
            alert("Grid size cannot be greater than 100!");
        }
        else if (gridSize <= 0){
            alert("Grid size cannot be less than or equal to 0!")
        }
        else {
            alert("Enter a number!")
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
        box.style.height = `${Math.round(596/gridSize)}px`;
        box.style.width = `${Math.round(596/gridSize)}px`;
        gridContainer.style["max-width"] = `${Math.round(596/gridSize)*gridSize}px`
        box.onmouseover = function() {
            box.style['background-color'] = "red";
        }
        gridContainer.appendChild(box);
    }
    return;
}

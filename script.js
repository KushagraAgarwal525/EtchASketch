document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.querySelector(".gridcontainer");
    // i has to be less than n square
    for (let i = 0; i < 256; i++) {
        const box = document.createElement('div');
        console.log(box);
        box.classList.add("gridbox");
        document.querySelector(".gridcontainer").appendChild(box);
    }
    // Height and width for n*n grid is n * 12
    gridContainer.style.width = "192px";
    gridContainer.style.height = "192px";
})
document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.querySelector(".gridcontainer");
    for (let i = 0; i < 16; i++) {
        const box = document.createElement('div');
        console.log(box);
        box.classList.add("gridbox");
        document.querySelector(".gridcontainer").appendChild(box);
    }
    // Height and width for n*n grid is n * 12
    gridContainer.style.width = "192px";
    gridContainer.style.height = "192px";
})
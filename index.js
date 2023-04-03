let numberOfSquares = 16;



let createBoxes = function(numberOfSquares) {

    gridContainer = document.querySelector(".grid");

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    for (let i=0; i<numberOfSquares; i++) {
        let div = document.createElement('div');
        div.classList.add('row');
        gridContainer.appendChild(div);
    }

    rows = document.querySelectorAll(".row");
    
    for (row of rows) {
        while (row.firstChild) {
            row.removeChild(row.firstChild)
        }
        for (let i=0; i<numberOfSquares; i++) {
            let div = document.createElement('div');
            div.classList.add('column');
            div.style['height'] = `${640/numberOfSquares}px`;
            div.style['width'] = `${640/numberOfSquares}px`;
            div.style['backgroundColor'] = 'purple';
            row.appendChild(div);
    
            div.addEventListener('mouseover', (function(div) {
                return function() {
                    div.style['backgroundColor'] = 'black';
                }
            })(div));
        }
    }
}

createBoxes(numberOfSquares)

const sideDimensionButton = document.querySelector('#dimension-button');
sideDimensionButton.addEventListener('click', (event) => {
    event.preventDefault();
    inputField = document.querySelector('#number');
    numberOfSquares = parseInt(inputField.value);
    createBoxes(numberOfSquares);
})









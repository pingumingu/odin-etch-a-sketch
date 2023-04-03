gridContainer = document.querySelector(".grid");

for (let i=0; i<16; i++) {
    let div = document.createElement('div');
    div.classList.add('row');
    gridContainer.appendChild(div);
}

rows = document.querySelectorAll(".row");

for (row of rows) {
    for (let i=0; i<16; i++) {
        let div = document.createElement('div');
        div.classList.add('column');
        div.style['height'] = '40px';
        div.style['width'] = '40px';
        div.style['backgroundColor'] = 'purple';
        row.appendChild(div);

        div.addEventListener('mouseover', (function(div) {
            return function() {
                div.style['backgroundColor'] = 'black';
            }
        })(div))
    }
}


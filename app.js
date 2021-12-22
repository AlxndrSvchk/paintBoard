const board = document.getElementById('board')

const SQUARE_NUMBERS = 496

const colors = ['#025393', '#68ef00', '#ffb9cb', '#fd56dc', '#01d3fc']

for(let i = 0; i < SQUARE_NUMBERS; i++) {
    const square = document.createElement('div')

    square.classList.add('square')

    board.append(square)

    square.addEventListener('mouseover', () => {
        addColor(square)
    })
    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })
}

function addColor(elem) {
    const color = getRandomColor()
    elem.style.backgroundColor = color
    elem.style.boxShadow = `0 0 2px ${color}, 0 0 ${color}`
}
function removeColor(elem) {
    elem.style.backgroundColor = '#ccc'
    elem.style.boxShadow = '0 0 2px #eee'
}

function getRandomColor() {
    const idx = Math.floor(Math.random() * colors.length)

    return colors[idx]
}
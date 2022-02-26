// Global Variables Here
const boardNode = document.querySelector('.ttt-board')

////////////////////////////////
// Functions For Game Logic Here
const buildBoard = () => {
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div')
    cell.classList.add('ttt-cell')
    cell.setAttribute('id', `ttt-cell-${i}`)
    boardNode.appendChild(cell)
  }
}

buildBoard()

const handleTurn = (e) => {
  alert(`clicked cell with id ${e.target.id}!`)
}

////////////////////////////////
// Event Listeners Here
const cells = document.querySelectorAll('.ttt-cell')
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', handleTurn)
}

////////////////////////////////

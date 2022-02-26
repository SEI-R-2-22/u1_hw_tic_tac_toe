// Global Variables Here
const board = document.querySelector('.ttt-board')

////////////////////////////////
// Functions For Game Logic Here
const buildBoard = () => {
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div')
    cell.classList.add('ttt-cell')
    cell.setAttribute('id', `ttt-cell-${i}`)
    board.appendChild(cell)
  }
}

buildBoard()

////////////////////////////////
// Event Listeners Here

////////////////////////////////

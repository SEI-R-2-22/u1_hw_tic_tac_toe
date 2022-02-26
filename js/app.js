// Global Variables Here
const boardNode = document.querySelector('.ttt-board')
const cells = document.querySelectorAll('.ttt-cell')
// Generate an array of 9 empty string elements: ['', '', '', '', '', '', '', '', '']
const boardArray = new Array(9).fill('')

////////////////////////////////
// Functions For Game Logic Here
const handleTurn = (e) => {
  const index = e.target.id.replace('ttt-cell-', '')
  alert(`Clicked cell found at index ${index}!`)
}

////////////////////////////////
// Event Listeners Here
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', handleTurn)
}

////////////////////////////////

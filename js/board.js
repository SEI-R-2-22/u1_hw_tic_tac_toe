const boardNode = document.querySelector('.ttt-board')

/* Dynamically generates a 3x3 tic-tac-toe board rather than hardcoding it in the HTML */
const buildBoard = () => {
  for (let i = 0; i < 9; i++) {
    const cellNode = document.createElement('div')
    cellNode.classList.add('ttt-cell')
    cellNode.setAttribute('id', `ttt-cell-${i}`)
    boardNode.appendChild(cellNode)
  }
}

/* Restores the empty gameboard, returning each cell to its unclaimed state by clearing token-specific styles */
clearCells = () => {
  const cellNodeList = boardNode.children
  for (let i = 0; i < cellNodeList.length; i++) {
    const cellNode = cellNodeList[i]
    cellNode.innerText = ''
    if (cellNode.classList.contains('x')) {
      cellNode.classList.remove('x')
    }
    if (cellNode.classList.contains('o')) {
      cellNode.classList.remove('o')
    }
  }
}

buildBoard()

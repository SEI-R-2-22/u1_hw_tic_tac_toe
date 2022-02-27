const message = document.querySelector('#banner')
const player1 = document.querySelector('#player1')
const player2 = document.querySelector('#player2')
const playAgain = document.querySelector('#againText')
const gameBoxes = document.querySelectorAll('.gamebox')

let moveCounter = 0
const playerOneMoves = []
const playerTwoMoves = []

const startGame = () => {
  // const boxes = gameBoxes.slice()

  gameBoxes.forEach((box) => {
    box.addEventListener('click', () => {
      //check if move has been play or not.
      if (
        !(
          playerOneMoves.includes(box.getAttribute('data-value')) ||
          playerTwoMoves.includes(box.getAttribute('data-value'))
        )
      ) {
        //determine who's move it is currently.
        if (moveCounter % 2 === 0) {
          box.innerHTML = 'O'
          playerOneMoves.push(box.getAttribute('data-value'))
          if (checkWinner(playerOneMoves)) {
            alert('Player 1 Wins')
            return
          }
          moveCounter++
        } else {
          box.innerHTML = 'X'
          playerTwoMoves.push(box.getAttribute('data-value'))
          if (checkWinner(playerTwoMoves)) {
            alert('Player 2 Wins.')
            return
          }
          moveCounter++
        }
      } else {
        alert('move is played, pick another move')
      }
    })
  })
}

startGame()

//reset the game
const resetGame = () => {
  gameBoxes.forEach((box) => {
    box.innerHTML = ''
  })
  playerOneMoves.length = 0
  playerTwoMoves.length = 0
  startGame()
}
playAgain.addEventListener('click', resetGame)

//check for winner
const checkWinner = (playerMoves) => {
  // "012, 345, 678"
  // "036, 147, 258"
  // "048, 246,
  //const winSeq = ['012', '345', '678', '036', '147', '258', '048', '246']
  if (
    (playerMoves.includes('0') &&
      playerMoves.includes('1') &&
      playerMoves.includes('2')) ||
    (playerMoves.includes('3') &&
      playerMoves.includes('4') &&
      playerMoves.includes('5')) ||
    (playerMoves.includes('6') &&
      playerMoves.includes('7') &&
      playerMoves.includes('8')) ||
    (playerMoves.includes('0') &&
      playerMoves.includes('3') &&
      playerMoves.includes('6')) ||
    (playerMoves.includes('1') &&
      playerMoves.includes('4') &&
      playerMoves.includes('7')) ||
    (playerMoves.includes('0') &&
      playerMoves.includes('4') &&
      playerMoves.includes('8')) ||
    (playerMoves.includes('2') &&
      playerMoves.includes('5') &&
      playerMoves.includes('8')) ||
    (playerMoves.includes('2') &&
      playerMoves.includes('4') &&
      playerMoves.includes('6'))
  ) {
    return true
  } else return false
}

//check player moves, if the box has been click. alert box has been played.
// const checkMove = (player1Moves, player2Moves) => {
//   if (
//     playerOneMoves.includes(box.getAttribute('data-value')) ||
//     playerTwoMoves.includes(box.getAttribute('data-value'))
//   ) {
//     return true
//   } else return false
// }

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

  for (let i = 0; i < gameBoxes.length; i++) {
    gameBoxes[i].addEventListener('click', () => {
      if (gameBoxes[i].innerHTML === '') {
        //determine who's move it is currently.
        if (moveCounter === undefined) {
          return
        } else if (moveCounter % 2 === 0) {
          gameBoxes[i].innerHTML = 'O'
          gameBoxes[i].style.backgroundColor = 'red'
          playerOneMoves.push(gameBoxes[i].getAttribute('data-value'))
          moveCounter++
          if (checkWinner(playerOneMoves)) {
            message.innerText = 'Player One Wins the Game'
            moveCounter = undefined
            return
          } else if (moveCounter === 9) {
            message.innerText = 'DRAW GAME'
            return
          }
          message.innerHTML = "Player Two's move"
        } else {
          gameBoxes[i].innerHTML = 'X'
          gameBoxes[i].style.backgroundColor = 'green'
          playerTwoMoves.push(gameBoxes[i].getAttribute('data-value'))
          moveCounter++
          if (checkWinner(playerTwoMoves)) {
            message.innerText = 'Player Two wins the Game'
            moveCounter = undefined
            return
          } else if (moveCounter === 9) {
            message.innerText = 'DRAW GAME'
            return
          }
          message.innerText = "Player One's Move"
        }
      }
    })
  }
}

startGame()

//reset the game
const resetGame = () => {
  gameBoxes.forEach((box) => {
    box.innerHTML = ''
    box.style.backgroundColor = 'rgb(159, 162, 164)'
  })
  message.innerText = 'Player One Goes First'
  playerOneMoves.length = 0
  playerTwoMoves.length = 0
  moveCounter = 0
  startGame()
}
playAgain.addEventListener('click', resetGame)

// check for winner
const checkWinner = (playerMoves) => {
  const winSeq = [
    ['1', '2', '0'],
    ['3', '4', '5'],
    ['6', '7', '8'],
    ['0', '3', '6'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['0', '4', '8'],
    ['2', '4', '6']
  ]
  let winNumOne = ''
  let winNumTwo = ''
  let winNumThree = ''
  for (let i = 0; i < winSeq.length; i++) {
    let checkSeq = winSeq[i]
    winNumOne = checkSeq[0]
    winNumTwo = checkSeq[1]
    winNumThree = checkSeq[2]

    if (
      playerMoves.includes(winNumOne) &&
      playerMoves.includes(winNumTwo) &&
      playerMoves.includes(winNumThree)
    ) {
      return true
    }
  }
}

const winningSeq = (playerMoves) => {
  const winSeq = [
    ['1', '2', '0'],
    ['3', '4', '5'],
    ['6', '7', '8'],
    ['0', '3', '6'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['0', '4', '8'],
    ['2', '4', '6']
  ]
  let winNumOne = ''
  let winNumTwo = ''
  let winNumThree = ''
  for (let i = 0; i < winSeq.length; i++) {
    let checkSeq = winSeq[i]
    winNumOne = checkSeq[0]
    winNumTwo = checkSeq[1]
    winNumThree = checkSeq[2]

    if (
      playerMoves.includes(winNumOne) &&
      playerMoves.includes(winNumTwo) &&
      playerMoves.includes(winNumThree)
    ) {
      return checkSeq
    }
  }

  // if (
  //   (playerMoves.includes('0') &&
  //     playerMoves.includes('1') &&
  //     playerMoves.includes('2')) ||
  //   (playerMoves.includes('3') &&
  //     playerMoves.includes('4') &&
  //     playerMoves.includes('5')) ||
  //   (playerMoves.includes('6') &&
  //     playerMoves.includes('7') &&
  //     playerMoves.includes('8')) ||
  //   (playerMoves.includes('0') &&
  //     playerMoves.includes('3') &&
  //     playerMoves.includes('6')) ||
  //   (playerMoves.includes('1') &&
  //     playerMoves.includes('4') &&
  //     playerMoves.includes('7')) ||
  //   (playerMoves.includes('0') &&
  //     playerMoves.includes('4') &&
  //     playerMoves.includes('8')) ||
  //   (playerMoves.includes('2') &&
  //     playerMoves.includes('5') &&
  //     playerMoves.includes('8')) ||
  //   (playerMoves.includes('2') &&
  //     playerMoves.includes('4') &&
  //     playerMoves.includes('6'))
  // ) {
  //   return true
  // } else {
  //   return false
  // }
}

// const drawGame = (moves) => {
//   if(moves === 9)
// }
const activePlayer = (player) => {
  player.classList.add('shake')
}
const inactivePlayer = (player) => {
  player.classList.remove('shake')
}

// const boxColorChange = (box) => {
//   box.style.backgroundColor = 'red'
// }

// Global Variables Here

const gameSquares = document.querySelectorAll('.game-square')
let activePlayer = 'x'
const activePlayerDisplay = document.querySelector('.active-player')
const resetButton = document.querySelector('.reset')
let winnerDeclared = false
let winnerBanner = document.querySelector('.game-winner-banner h1')
let playCount = 0
let xScore = 0
let oScore = 0
let tScore = 0

////////////////////////////////

// Functions For Game Logic Here
let resetGame = () => {
  for (let i = 0; i < gameSquares.length; i++) {
    gameSquares[i].innerHTML = ''
  }
  playCount = 0
  winnerBanner.style.opacity = 0
  activePlayer = 'x'
  activePlayerDisplay.innerHTML = 'The active player is X'
  activePlayerDisplay.style.opacity = 1
  winnerDeclared = false
}
let declareWinner = () => {
  winnerDeclared = true
  activePlayerDisplay.style.opacity = 0
  winnerBanner.innerHTML = `${activePlayer} wins!`
  winnerBanner.style.opacity = 1
  if (activePlayer === 'x') {
    xScore += 1
    document.querySelector('#x-score').innerHTML = xScore
  } else {
    oScore += 1
    document.querySelector('#o-score').innerHTML = oScore
  }
}

let declareTie = () => {
  winnerDeclared = true
  activePlayerDisplay.style.opacity = 0
  winnerBanner.innerHTML = `Tie game!`
  winnerBanner.style.opacity = 1
  tScore += 1
  document.querySelector('#t-score').innerHTML = tScore
}

let checkWinner = () => {
  if (
    //x win conditions
    (gameSquares[0].innerHTML === 'x' &&
      gameSquares[1].innerHTML === 'x' &&
      gameSquares[2].innerHTML === 'x') ||
    (gameSquares[3].innerHTML === 'x' &&
      gameSquares[4].innerHTML === 'x' &&
      gameSquares[5].innerHTML === 'x') ||
    (gameSquares[6].innerHTML === 'x' &&
      gameSquares[7].innerHTML === 'x' &&
      gameSquares[8].innerHTML === 'x') ||
    (gameSquares[0].innerHTML === 'x' &&
      gameSquares[3].innerHTML === 'x' &&
      gameSquares[6].innerHTML === 'x') ||
    (gameSquares[1].innerHTML === 'x' &&
      gameSquares[4].innerHTML === 'x' &&
      gameSquares[7].innerHTML === 'x') ||
    (gameSquares[2].innerHTML === 'x' &&
      gameSquares[5].innerHTML === 'x' &&
      gameSquares[8].innerHTML === 'x') ||
    (gameSquares[0].innerHTML === 'x' &&
      gameSquares[4].innerHTML === 'x' &&
      gameSquares[8].innerHTML === 'x') ||
    (gameSquares[6].innerHTML === 'x' &&
      gameSquares[4].innerHTML === 'x' &&
      gameSquares[2].innerHTML === 'x') ||
    //o win conditions
    (gameSquares[0].innerHTML === 'o' &&
      gameSquares[1].innerHTML === 'o' &&
      gameSquares[2].innerHTML === 'o') ||
    (gameSquares[3].innerHTML === 'o' &&
      gameSquares[4].innerHTML === 'o' &&
      gameSquares[5].innerHTML === 'o') ||
    (gameSquares[6].innerHTML === 'o' &&
      gameSquares[7].innerHTML === 'o' &&
      gameSquares[8].innerHTML === 'o') ||
    (gameSquares[0].innerHTML === 'o' &&
      gameSquares[3].innerHTML === 'o' &&
      gameSquares[6].innerHTML === 'o') ||
    (gameSquares[1].innerHTML === 'o' &&
      gameSquares[4].innerHTML === 'o' &&
      gameSquares[7].innerHTML === 'o') ||
    (gameSquares[2].innerHTML === 'o' &&
      gameSquares[5].innerHTML === 'o' &&
      gameSquares[8].innerHTML === 'o') ||
    (gameSquares[0].innerHTML === 'o' &&
      gameSquares[4].innerHTML === 'o' &&
      gameSquares[8].innerHTML === 'o') ||
    (gameSquares[6].innerHTML === 'o' &&
      gameSquares[4].innerHTML === 'o' &&
      gameSquares[2].innerHTML === 'o')
  ) {
    declareWinner()
  } else {
    playCount += 1
    if (playCount === gameSquares.length) {
      declareTie()
    }
  }
}

////////////////////////////////
// Event Listeners Here
for (let i = 0; i < gameSquares.length; i++) {
  //gameSquaresCount += 1
  gameSquares[i].addEventListener('click', () => {
    if (winnerDeclared === false) {
      if (activePlayer === 'x' && gameSquares[i].innerHTML === '') {
        gameSquares[i].innerHTML = 'x'
        checkWinner()
        activePlayerDisplay.innerHTML = 'The active player is O'
        activePlayer = 'o'
      } else if (activePlayer === 'o' && gameSquares[i].innerHTML === '') {
        gameSquares[i].innerHTML = 'o'
        checkWinner()
        activePlayerDisplay.innerHTML = 'The active player is X'
        activePlayer = 'x'
      }
    }
  })
}
resetButton.addEventListener('click', resetGame)
////////////////////////////////

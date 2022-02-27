// Global Variables Here

const gameSquares = document.querySelectorAll('.game-square')
let activePlayer = 'x'
const activePlayerDisplay = document.querySelector('.active-player')
const resetButton = document.querySelector('.reset')
let winnerDeclared = false
let winnerBanner = document.querySelector('.game-winner-banner h1')

////////////////////////////////
// Functions For Game Logic Here
let resetGame = () => {
  for (let i = 0; i < gameSquares.length; i++) {
    gameSquares[i].innerHTML = ''
    if (gameSquares[i].classList[1] !== 'empty') {
      gameSquares[i].classList.add('empty')
    }
  }
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
  console.log('Joe wins')
}

let checkWinner = () => {
  if (
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
      gameSquares[2].innerHTML === 'x')
  ) {
    declareWinner()
  } else if (
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
  } else if (
    gameSquares[0].classList[1] !== 'empty' &&
    gameSquares[1].classList[1] !== 'empty' &&
    gameSquares[2].classList[1] !== 'empty' &&
    gameSquares[3].classList[1] !== 'empty' &&
    gameSquares[4].classList[1] !== 'empty' &&
    gameSquares[5].classList[1] !== 'empty' &&
    gameSquares[6].classList[1] !== 'empty' &&
    gameSquares[7].classList[1] !== 'empty' &&
    gameSquares[8].classList[1] !== 'empty' &&
    gameSquares[8].classList[1] !== 'empty'
  ) {
    alert('tie game!')
  } else {
    return
  }
}

////////////////////////////////
// Event Listeners Here
for (let i = 0; i < gameSquares.length; i++) {
  gameSquares[i].classList.add('empty')
  gameSquares[i].addEventListener('click', () => {
    if (winnerDeclared === false) {
      if (activePlayer === 'x' && gameSquares[i].classList[1] === 'empty') {
        gameSquares[i].classList.remove('empty')
        gameSquares[i].innerHTML = 'x'
        checkWinner()
        activePlayerDisplay.innerHTML = 'The active player is O'
        activePlayer = 'o'
      } else if (
        activePlayer === 'o' &&
        gameSquares[i].classList[1] === 'empty'
      ) {
        gameSquares[i].classList.remove('empty')
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

//ball example code
// const elements = document.querySelectorAll('.js-ball')
// for (let i = 0; i < elements.length; i++) {
//   elements[i].addEventListener('click', () => {
//     score = score + parseInt(elements[i].getAttribute('data-increment'))
//     document.querySelector('.js-score').innerHTML = score
//     if (score >= 100) {
//       levelWinner.style.opacity = '1'
//     }
//   })
// }

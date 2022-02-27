// Global Variables Here

const gameSquares = document.querySelectorAll('.game-square')

////////////////////////////////
// Functions For Game Logic Here

////////////////////////////////
// Event Listeners Here
for (let i = 0; i < gameSquares.length; i++) {
  gameSquares[i].classList.add('empty')
  gameSquares[i].addEventListener('click', () => {
    if (gameSquares[i].style.backgroundColor === 'lightblue')
      gameSquares[i].style.backgroundColor = 'yellow'
    else gameSquares[i].style.backgroundColor = 'lightblue'
  })
}

////////////////////////////////

const elements = document.querySelectorAll('.js-ball')
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', () => {
    score = score + parseInt(elements[i].getAttribute('data-increment'))
    document.querySelector('.js-score').innerHTML = score
    if (score >= 100) {
      levelWinner.style.opacity = '1'
    }
  })
}

// Global Variables Here
let turn = 1

const divOne = document.querySelector('#one')
const divTwo = document.querySelector('#two')
const divThree = document.querySelector('#three')
const divFour = document.querySelector('#four')
const divFive = document.querySelector('#five')
const divSix = document.querySelector('#six')
const divSeven = document.querySelector('#seven')
const divEight = document.querySelector('#eight')
const divNine = document.querySelector('#nine')

const squares = document.querySelectorAll('.square')

////////////////////////////////
// Functions For Game Logic Here
const checkWinner = () => {
  if (
    divOne.innerText !== '' &&
    divTwo.innerText !== '' &&
    divThree.innerText !== '' &&
    divOne.innerText === divTwo.innerText &&
    divOne.innerText === divThree.innerText
  ) {
    console.log('Winner')
  } else if (
    divOne.innerText !== '' &&
    divFour.innerText !== '' &&
    divSeven.innerText !== '' &&
    divOne.innerText === divFour.innerText &&
    divOne.innerText === divSeven.innerText
  ) {
    console.log('Winner')
  } else if (
    divOne.innerText !== '' &&
    divFive.innerText !== '' &&
    divNine.innerText !== '' &&
    divOne.innerText === divFive.innerText &&
    divOne.innerText === divNine.innerText
  ) {
    console.log('Winner')
  } else if (
    divTwo.innerText !== '' &&
    divFive.innerText !== '' &&
    divEight.innerText !== '' &&
    divTwo.innerText === divFive.innerText &&
    divTwo.innerText === divEight.innerText
  ) {
    console.log('Winner')
  } else if (
    divThree.innerText !== '' &&
    divSix.innerText !== '' &&
    divNine.innerText !== '' &&
    divThree.innerText === divSix.innerText &&
    divThree.innerText === divNine.innerText
  ) {
    console.log('Winner')
  } else if (
    divThree.innerText !== '' &&
    divFive.innerText !== '' &&
    divSeven.innerText !== '' &&
    divThree.innerText === divFive.innerText &&
    divThree.innerText === divSeven.innerText
  ) {
    console.log('Winner')
  } else if (
    divFour.innerText !== '' &&
    divFive.innerText !== '' &&
    divSix.innerText !== '' &&
    divFour.innerText === divFive.innerText &&
    divFour.innerText === divSix.innerText
  ) {
    console.log('Winner')
  } else if (
    divSeven.innerText !== '' &&
    divEight.innerText !== '' &&
    divNine.innerText !== '' &&
    divSeven.innerText === divEight.innerText &&
    divSeven.innerText === divNine.innerText
  ) {
    console.log('Winner')
  }
}

////////////////////////////////
// Event Listeners Here

// Click function
for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', () => {
    if (squares[i].innerText === '') {
      if (turn % 2 === 1) {
        squares[i].innerText = 'X'
        turn++
        checkWinner()
      } else {
        squares[i].innerText = 'O'
        turn++
        checkWinner()
      }
    }
  })
}

// Reset button function
document.querySelector('button').addEventListener('click', () => {
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerText = ''
  }
  turn = 1
})
////////////////////////////////

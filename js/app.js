// Global Variables Here

const gameBoard = document.querySelectorAll('.box')
let moon = document.querySelectorAll('.js-moon')
let star = document.querySelectorAll('.js-star')
let playerChoice = []
let computerChoice = []

comboOne = [0, 1, 2]
comboTwo = [3, 4, 5]
comboThree = [6, 7, 8]
comboFour = [0, 3, 6]
comboFive = [1, 4, 7]
comboSix = [2, 5, 8]
comboSeven = [0, 4, 8]
comboEight = [2, 4, 6]



////////////////////////////////
// Functions For Game Logic Here
const decideWinner = () => {
    if (playerChoice === comboOne || comboTwo || comboThree || comboFour || comboFive || comboSix || comboSeven || comboEight) {
        console.log(`Player has won!`)
    } else if (computerChoice === comboOne || comboTwo || comboThree || comboFour || comboFive || comboSix || comboSeven || comboEight) {
        console.log(`Computer has won!`)
    } else {
        console.log(`Draw, try again`)
    }
        
}

////////////////////////////////
// Event Listeners Here
for (let i = 0; i < gameBoard.length; i++) {
    gameBoard[i].addEventListener('click', () => {
        gameBoard.push(playerChoice[i])
        star[i].style.opacity = 1
        console.log('player picked')
    })
}

for (let i = 0; i < gameBoard.length; i++) {
    gameBoard[i].addEventListener('click', () => {
        let = computerMove = () => {
            Math.floor(Math.random() * 8)
            gameBoard.push(playerChoice[i])
            moon[i].style.opacity = 1
            console.log('computer picked')
        }
    })
}


////////////////////////////////

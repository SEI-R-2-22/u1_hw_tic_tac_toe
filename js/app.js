// Global Variables Here

const gameBoard = Array.from(document.querySelectorAll('.box'))
let moon = document.querySelectorAll('.moon')
let star = document.querySelectorAll('.star')
let playerChoice = []
let computerChoice = []

const winCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


////////////////////////////////
// Functions For Game Logic Here

const decideWinner = () => {
    if (playerChoice  === winCombo) {
        console.log(`Player has won!`)
    } else if (computerChoice === winCombo) {
        console.log(`Computer has won!`)
    } else {
        console.log(`Draw, try again`)
    }
        
}

////////////////////////////////
// Event Listeners Here

for (let i = 0; i < gameBoard.length; i++) {
    gameBoard[i].addEventListener('click', () => {
        let = computerMove = () => {
            Math.floor(Math.random() * 8)
            gameBoard[i] = computerChoice[i]
            moon[i].style.opacity = 1
            console.log('computer picked')
        }
    })
}

for (let i = 0; i < gameBoard.length; i++) {
    gameBoard[i].addEventListener('click', () => {
        const select = playerChoice.push(gameBoard[i])
        console.log(playerChoice[i])
        star[i].style.opacity = 1
        console.log('player picked')
    })
    
}

////////////////////////////////

// Global Variables Here

const tiles = document.querySelectorAll('.box')
const gameBoard = Array.from(tiles)
let moonMove = Array.from(document.getElementsByClassName('inactive'))
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


// const computerMove = () => {
//         Math.floor(Math.random() * availTiles.length)
//         computerChoice = computerMove
//         console.log(computerChoice)
// }



for (let i = 0; i < gameBoard.length; i++) {
    gameBoard[i].addEventListener('click', () => {
        tiles[i].classList.remove('inactive')
        star[i].classList.add('player')
        star[i].style.opacity = 1
        playerChoice.push(star[i])
        moon[i].classList.add('occupied')
        moon[i].classList.remove('inactive')
        console.log(playerChoice)
        computerMove();
        // console.log(playerChoice)
    
    })
    
}

const computerMove = () => {
    const diceRoll = moonMove[Math.floor(Math.random() * moonMove.length)]
        if (diceRoll.classList.contains('occupied')) {
            const reRoll = moonMove[Math.floor(Math.random() * moonMove.length)]
            reRoll.classList.remove('inactive')
            reRoll.classList.add('computer')
            reRoll.classList.add('occupied')
            computerChoice.push('computer picked' + computerChoice)
            // console.log(reRoll)
            reRoll.style.opacity = 1
        } else {
            diceRoll.classList.remove('inactive')
            diceRoll.classList.add('computer')
            diceRoll.classList.add('occupied')
            computerChoice.push(diceRoll)
            console.log('computer picked' + computerChoice)
            diceRoll.style.opacity = 1
        }
        // console.log(computerChoice)
    }

// let drawPlayerBoard = () => {
//     player
//     }

// for (let i = 0; i < computerChoice.length; i++) {
//     gameBoard[i].addEventListener('click', () => {
//         console.log(clicked)
//         drawCompBoard.indexOf(computerChoice[i])
//             compArray.push(drawCompBoard)
//             console.log(indexOf(computerChoice[i]))
    
//         drawPlayerBoard.indexOf(playerChoice[i])
//             playerArray.push(drawPlayerBoard)
//             console.log(playerArray)
//     })
// }



// const computerMark = () => {
//     document.getElementsByClassName('computer').style.opacity = 1
// }
    


////////////////////////////////
// document.addEventListener('click', let = computerMove = () => {
//     Math.floor(Math.random() * activeTiles.length)
//     computerChoice.push(gameBoard[i])
//     tiles[i].classList.remove('inactive')
//     moon[i].style.opacity = 1
//     console.log('computer picked')
// },
// false
// )
// const computerMove = () => {
//     Math.floor(Math.random() * activeTiles.length)
//     computerChoice.push(gameBoard[i])
//     tiles[i].classList.remove('inactive')
//     moon[i].style.opacity = 1
//     console.log('computer picked')
// }


// Math.floor(Math.random() * 9)
// computerChoice.push(gameBoard[i])
// tiles[i].classList.remove('inactive')
// moon[i].style.opacity = 1
// console.log(computerChoice)
// console.log(availTiles)
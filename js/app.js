// Global Variables Here

const tiles = document.querySelectorAll('.box')
const gameBoard = Array.from(tiles)
let moonMove = Array.from(document.getElementsByClassName('inactive')) //available moves for computer
let moon = Array.from(document.querySelectorAll('.moon'))
let star = Array.from(document.querySelectorAll('.star'))

//Empty arrays for moves to be inserted and compared to win condition
let playerChoice = []
let computerChoice = []
let computerArr = []




const winCombo1 = [0, 1, 2].toString();
const winCombo2 = [3, 4, 5].toString();
const winCombo3 = [6, 7, 8].toString();
const winCombo4 = [0, 3, 6].toString();
const winCombo5 = [1, 4, 7].toString();
const winCombo6 = [2, 5, 8].toString();
const winCombo7 = [0, 4, 8].toString();
const winCombo8 = [2, 4, 6].toString();

// winCombo = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
    
// ].toString();
    
    



////////////////////////////////
// Functions For Game Logic Here

//Player Win Condition
document.addEventListener('click', () => {
    console.log('click')
    for (let i = 0; i < playerChoice.length; i++) {
        if (playerChoice.length > 2) {
            console.log('yay')
            let playerBoard = playerChoice.toString();
            if (playerBoard.includes(winCombo1) || playerBoard.includes(winCombo2) || playerBoard.includes(winCombo3) || playerBoard.includes(winCombo4) || playerBoard.includes(winCombo5) || playerBoard.includes(winCombo6) || playerBoard.includes(winCombo7) || playerBoard.includes(winCombo8)) {
                console.log('player win')
            }
        
        } 
    }      
})  

//Computer Win Condition

document.addEventListener('click', () => {
    for (let i = 0; i < computerArr.length; i++) {
        if (computerArr.length > 2) {
            let computerBoard = computerArr.toString();
            if (computerBoard.includes(winCombo1) || computerBoard.includes(winCombo2) || computerBoard.includes(winCombo3) || computerBoard.includes(winCombo4) || computerBoard.includes(winCombo5) || computerBoard.includes(winCombo6) || computerBoard.includes(winCombo7) || computerBoard.includes(winCombo8)) {
                console.log('computer win! Press ok to play again.')
            }
        
        } 
    }      
}) 



//Computer Move

const computerMove = () => {
    const diceRoll = moonMove[Math.floor(Math.random() * moonMove.length)]
        if (diceRoll.classList.contains('occupied')) {
            const reRoll = moonMove[Math.floor(Math.random() * moonMove.length)]
            reRoll.classList.remove('inactive')
            reRoll.classList.add('computer')
            reRoll.classList.add('occupied')
            computerChoice.push(reRoll)
            reRoll.style.opacity = 1
            checkComputerConditions();
            // console.log(computerChoice)  
        } else {
            diceRoll.classList.remove('inactive')
            diceRoll.classList.add('computer')
            diceRoll.classList.add('occupied')
            computerChoice.push(diceRoll)
            diceRoll.style.opacity = 1
            checkComputerConditions();
            // console.log(computerChoice)
        } 
}


let checkComputerConditions = () =>{
    for (let i = 0; i < moon.length; i++) {
        if (moon[i].classList.contains('computer')) { //push pieces marked computer into another array
            computerArr.push(i)
            console.log('computer picked ' + computerArr)
        }
    }
}


////////////////////////////////
// Event Listeners Here

//Player Move
for (let i = 0; i < star.length; i++) {
    star[i].addEventListener('click', () => {
        tiles[i].classList.remove('inactive') 
        star[i].classList.add('player')
        star[i].style.opacity = 1
        playerChoice.push(i)
        moon[i].classList.add('occupied') //attempts to prevent computer from picking it
        moon[i].classList.remove('inactive') //alters class to remove it from available computer move array
        console.log('player picked ' + playerChoice)
        computerMove();
    
    
    })
    
}



//Draw Computer Board







    





// BUGS:
// 1. Computer won't stop picking player occupied spots
// 2. Game end messages display 3 times for some reason























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
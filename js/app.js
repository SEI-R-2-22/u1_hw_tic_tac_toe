////////////////////////////////
// Global Variables Here
const space = document.querySelectorAll('space')
const boxes = [null, null, null, null, null, null, null, null, null]
const p1_class = 'x'
const p2_class = 'circle'
let currentClass = 'x'
let circleTurn
let isGameActive = true
let p1Win = 'player1_won'
let p2Win = 'player2_won'
let draw = 'draw'
let board = ["", "", "", "", "", "", "", "", ""];
const gameBoard = document.querySelector(`game-board`)
const gameStatus = document.querySelector('gameStatus')
const winningConditions = [
    [0, 1, 2], 
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8] 
]



////////////////////////////////
// Functions For Game Logic Here
// Learned this step from-Kyle from Web Dec Simplified//
const spaceElement = document.querySelectorAll('.space')
    spaceElement.forEach(space => {
        space.addEventListener(`click`, handleClick, {once: true})
    })

function handleClick(event) {
        const space = event.target
        const currentClass = circleTurn ?  p2_class : p1_class
        space.classList.add(currentClass)
     
        checkWinner()
        switchTurns()
    }
function switchTurns() {
        circleTurn =! circleTurn 
}
////////////////////////////////
// Event Listeners Here
////////////////////////////////


// Doesn't work for some reason, can't figure out yet, sorry //

const checkWinner = (currentClass) => {
    if(spaceElement[0] == currentClass && spaceElement[1] == currentClass && spaceElement[2] == currentClass) {
            console.log(`${currentClass} won!`)
            return true;
        }
    if(spaceElement[0] == currentClass && spaceElement[3] == currentClass && spaceElement[6] == currentClass) {
            console.log(`${currentClass} won!`)
            return true;
        }
    if(spaceElement[0] == currentClass && spaceElement[4] == currentClass && spaceElement[8] == currentClass) {
            console.log(`${currentClass} won!`)
            return true;
        }
    if(spaceElement[1] == currentClass && spaceElement[4] == currentClass && spaceElement[7] == currentClass) {
            console.log(`${currentClass} won!`)
            return true;
        }
    if(spaceElement[2] == currentClass && spaceElement[5] == currentClass && spaceElement[8] == currentClass) {
            console.log(`${currentClass} won!`)
            return true;
        }
    if(spaceElement[2] == currentClass && spaceElement[4] == currentClass && spaceElement[6] == currentClass) {
            console.log(`${currentClass} won!`)
            return true;
        }
    if(spaceElement[3] == currentClass && spaceElement[4] == currentClass && spaceElement[5] == currentClass) {
            console.log(`${currentClass} won!`)
            return true;
        }
    if(spaceElement[6] == currentClass && spaceElement[7] == currentClass && spaceElement[8] == currentClass) {
            console.log(`${currentClass} won!`)
            return true;
    }
}   



////////////////////////////////
// Tries this and also can't get it to work
///////////////////////////////



// function checkWinner() {
//     let winner = currentClass; 
//     for (i = 0; i < 3; i++) {
//         if (gameBoard[i][0] == gameBoard[i][1] && gameBoard[i][0] == gameBoard[i][2] && gameBoard[i] !== '') {
//             return winner 
//         }
//     }
//     for (i = 0; i < 3; i++) {
//         if (gameBoard[0][i] == gameBoard[0][i] && gameBoard[0] !== '' ) {
//             return winner
//         }
//     }

//     if(gameBoard[0][0] == gameBoard[1][1] && gameBoard[0][0] == gameBoard[2][2] && gameBoard[0] !== '') {
//        return winner
//     } 
//     if (gameBoard[2][0] == gameBoard[1][1] && gameBoard[2][0] == gameBoard[0][2]) {
//         return winner
//     }
//     if (winner !== currentClass ){
//        return draw
//     } else {
//         return winner
//     }
// 
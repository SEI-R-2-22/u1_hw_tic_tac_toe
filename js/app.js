// Global Variables Here
const player = {
    sign: 'X',
    score: 0,
    lastClicked: 0,
    isTurn : true,
    isWiner : false,
}
const player1 = {
    sign: 'X',
    score: 0,
    lastClicked: 0,
    isTurn : true,
    isWiner : false,
}

const player2 = {
    sign: 'O',
    score: 0,
    lastClicked: 0,
    isTurn : false,
    isWiner : false,
}

let tie = 0
let isTie = false

//Create board game as an array: 3x3
let boardGame = Array(3).fill().map(() => Array(3))
//Initialize the value of the board to 0
for (let i = 0; i < 3; i++){
    for (let j = 0; j < 3; j++) {
        boardGame[i][j] = null
    }
}

////////////////////////////////
// Functions For Game Logic Here


//Update the board
const updateBoardGame = (player) =>{
    switch(player.lastClicked){
        case 1: 
            if (board-game[0][0] === null) {
                boardGame[0][0] = player.sign
                player.isTurn = false
            }
            break
        case 2:
            if (board-game[0][1] === null) {
                boardGame[0][1] = player.sign
                player.isTurn = false
            }
            break
        case 3:
            if (board-game[0][2] === null) {
                boardGame[0][2] = player.sign
                player.isTurn = false
            }
            break
        case 4:
            if (board-game[1][0] === null) {
                boardGame[1][0] = player.sign
                player.isTurn = false
            }
            break
        case 5:
            if (board-game[1][1] === null){
                boardGame[1][1] = player.sign
                player.isTurn = false
            }
            break
        case 6:
            if (board-game[1][2] === null){
                boardGame[1][2] = player.sign
                player.isTurn = false
            }
            break
        case 7:
            if (board-game[2][0] === null){
                boardGame[2][0] = player.sign
                player.isTurn = false
            }
            break
        case 8:
            if (board-game[2][1] === null){
                boardGame[2][1] = player.sign
                player.isTurn = false
            }
            break
        case 9:
            if (board-game[2][2] === null){
                boardGame[2][2] = player.sign
                player.isTurn = false
            }
            break  
        default: break           
    }
}

//Check if the board game is full
const isBoardFull = () => {
    let isFull = true
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++) {
            if (boardGame[i][j] === null) {
                isFull = false
            }
        }
    }
    return isFull
}
////////////////////////////////
// Event Listeners Here



////////////////////////////////

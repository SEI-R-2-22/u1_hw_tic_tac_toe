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

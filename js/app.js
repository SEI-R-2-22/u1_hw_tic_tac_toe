// Global Variables Here
const gameStatus = document.querySelector('.playerInfo')
let crntPlayer = 'Player 1 - X'
let turnCount = 0

/*selecting each box to place an x */
let box1 = document.querySelector('.tLft')
let box2 = document.querySelector('.tMid')
let box3 = document.querySelector('.tRgt')
let box4 = document.querySelector('.mLft')
let box5 = document.querySelector('.mid')
let box6 = document.querySelector('.mRgt')
let box7 = document.querySelector('.bLft')
let box8 = document.querySelector('.bMid')
let box9 = document.querySelector('.bRgt')

const printBox = (box) => {
    console.log('hi');
    if (turnCount % 2 === 0) {
        document.getElementById(box).innerHTML = "X";
    } else {
        document.getElementById(box).innerHTML = "O";
    }
    turnCount++
}
const resetGame = () => {
    turnCount = 0;2
    console.log(turnCount);
}


////////////////////////////////
// Functions For Game Logic Here




////////////////////////////////
// Event Listeners Here



////////////////////////////////

const inspect = document.querySelectorAll('.sqr')
console.log(inspect)

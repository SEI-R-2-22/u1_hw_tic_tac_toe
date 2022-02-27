// Global Variables Here
const gameStatus = document.querySelector('.playerInfo')
let crntPlayer = 'Player 1 - X'
let turnCount = 0
let boxArray = document.getElementsByClassName('sqr');
console.log(boxArray)

/* switch to variables??
let box1 = document.querySelector('.b1')
let box2 = document.querySelector('.')
let box3 = document.querySelector('.tRgt')
let box4 = document.querySelector('.mLft')
let box5 = document.querySelector('.mid')
let box6 = document.querySelector('.mRgt')
let box7 = document.querySelector('.bLft')
let box8 = document.querySelector('.bMid')
let box9 = document.querySelector('.bRgt')
*/

const printBox = (box) => {
    if (turnCount % 2 === 0) {
        document.getElementById(box).innerHTML = "X";
    } else {
        document.getElementById(box).innerHTML = "O";
    }
    document.getElementById(box).disabled = true;
    turnCount++;
}
const resetGame = () => {
    turnCount = 0;
    document.querySelectorAll('.sqr').forEach(button => button.innerHTML = "");
    document.querySelectorAll('.sqr').forEach(button => button.disabled = false);
  
}


////////////////////////////////
// Functions For Game Logic Here




////////////////////////////////
// Event Listeners Here



////////////////////////////////


// Global Variables Here

let turnCount = 0
let xArray = []
let oArray = []

const winCon1 = ['b1', 'b2', 'b3']
const winCon2 = ['b4', 'b5', 'b6']
const winCon3 = ['b7', 'b8', 'b9']
const winCon4 = ['b1', 'b4', 'b7']
const winCon5 = ['b2', 'b5', 'b8']
const winCon6 = ['b3', 'b6', 'b9']
const winCon7 = ['b1', 'b5', 'b9']
const winCon8 = ['b3', 'b5', 'b7']

const checkWinner = (winCon) => {


    const checkX = winCon.every(element => 
        {return xArray.includes(element);});
    if (checkX === true) {
        document.getElementById('playerInfo').innerHTML = "Player X WINS!! Reset to play again.";
        document.querySelectorAll('.sqr').forEach(button => button.disabled = true);
        console.log('player x wins')
    } 
    else {const checkO = winCon.every(element => 
        {return oArray.includes(element);});
    if (checkO === true) {
        console.log('Player O Wins')
        document.getElementById('playerInfo').innerHTML = "Player O WINS!! Reset to play again.";
        document.querySelectorAll('.sqr').forEach(button => button.disabled = true);
}
}
}
const printBox = (box) => {
    if (turnCount % 2 === 0) {
        document.getElementById(box).innerHTML = "X";
        xArray.push(box)
        document.getElementById('playerInfo').innerHTML = "It is Player O's turn";
        console.log(xArray)
    } else {
        document.getElementById(box).innerHTML = "O";
        document.getElementById('playerInfo').innerHTML = "It is Player X's turn";
        oArray.push(box)
        console.log(oArray)
    }
    document.getElementById(box).disabled = true;
    turnCount++;
    checkWinner(winCon1)
    checkWinner(winCon2)
    checkWinner(winCon3)
    checkWinner(winCon4)
    checkWinner(winCon5)
    checkWinner(winCon6)
    checkWinner(winCon7)
    checkWinner(winCon8)
    }



 

const resetGame = () => {
    turnCount = 0;
    document.querySelectorAll('.sqr').forEach(button => button.innerHTML = "");
    document.querySelectorAll('.sqr').forEach(button => button.disabled = false);
    document.getElementById('playerInfo').innerHTML = "Player X begins";
    xArray = []
    oArray = []
  }


////////////////////////////////
// Functions For Game Logic Here




////////////////////////////////
// Event Listeners Here



////////////////////////////////


// Global Variables Here
let board = ['','','','','','','','','']
let playerX = 'X'
let playerO = 'O'
let currentPlayer = 'X'
let xArray = []
let oArray = []
letIsGameActive = true;
const boxes = document.querySelectorAll('.box')
const PLAYERX_WON = PLAYERX_WON
const PLAYERO_WON = PLAYERO_WON
let turns = 0
let roundWon = false
const TIE = TIE


for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', () => {
        if (turns % 2 === 0) {
            boxes[i].innerText = playerX
            turns++ 
            handleResultvalidation
            console.log(WINNER!)
            
        }else if (turns % 2 === 1) {
            boxes[i].innerText = playerO
            turns++ 
            handleResultValidation
            console.log(WINNER!)
        }}

    )}

function checkWinner (){
    if(
        (board[0] == 'x' && board[1] == board[2] == 'x')||
        (board[3] == 'x' && board[4] == board[5] == 'x')||
        (board[6] == 'x' && board[7] == board[8] == 'x')||
        (board[0] == 'x' && board[3] == board[6] == 'x')||
        (board[1] == 'x' && board[4] == board[7] == 'x')||
        (board[2] == 'x' && board[5] == board[8] == 'x')||
        (board[0] == 'x' && board[4] == board[8] == 'x')||
        (board[2] == 'x' && board[4] == board[0] == 'x')||)){
        alert(PLAYERX_WON!)
        isGameActive = false
    
}else if {
    (board[0] == 'x' && board[1] == board[2] == 'x')||
        (board[0] == 'o' && board[1] == board[2] == 'o')||
        (board[3] == 'o' && board[4] == board[5] == 'o')||
        (board[6] == 'o' && board[7] == board[8] == 'o')||
        (board[0] == 'o' && board[3] == board[6] == 'o')||
        (board[1] == 'o' && board[4] == board[7] == 'o')||
        (board[2] == 'o' && board[5] == board[8] == 'o')||
        (board[0] == 'o' && board[4] == board[8] == 'o')||
        (board[2] == 'o' && board[4] == board[6] == 'o')||){
        alert(PLAYERO_WON!)
        isGameActive = false
} else if (turns === 9) {
    alert(TIE)
    isGameActive = false
}

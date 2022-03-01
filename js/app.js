const boxes = document.querySelectorAll('.box')
const resetButton = document.querySelector('#reset')
const announcer = document.querySelector('.announcer')
let displayPlayer = document.querySelector('.display-player')
let turns = 0
let board = ['', '', '', '', '', '', '', '', ''];
const playerX = 'X';
const playerO = 'O';
const currentPlayer = 'X'
let xArray = []
let oArray = []
let isGameActive = true;
const PLAYERX_WON = 'PLAYERX_WON'
const PLAYER0_WON = 'PLAYER0_WON'
const TIE = 'TIE'
let roundWon = false

//adds X or O to gameboard and rotates players
for (let i = 0; i < boxes.length; i++) {
    if (isGameActive = true) {
    boxes[i].addEventListener('click', function(){
        if (isGameActive) {
            if(turns % 2 == 0){
                let index = boxes[i].getAttribute('id')[1]
                board[index] = 'x'
                boxes[i].innerText = playerX
                turns++
                displayPlayer.innerText = `O's turn`
                xArray.push(boxes[i])
                checkWinner()
            }
            else if(turns % 2 == 1){
                let index = boxes[i].getAttribute('id')[1]
                board[index] = 'o'
                boxes[i].innerText = playerO
                turns++
                displayPlayer.innerText = `X's turn`
                oArray.push(boxes[i])
                checkWinner()
            }
        }   
    })
}

}

function checkWinner () {
    if (
        (board[0] == 'o' && board[1] == 'o' && board[2] == 'o') ||
        (board[3] == 'o' && board[4] == 'o' && board[5] == 'o') ||
        (board[6] == 'o' && board[7] == 'o' && board[8] == 'o') ||
        (board[0] == 'o' && board[3] == 'o' && board[6] == 'o') ||
        (board[1] == 'o' && board[4] == 'o' && board[7] == 'o') ||
        (board[2] == 'o' && board[5] == 'o' && board[8] == 'o') ||
        (board[0] == 'o' && board[4] == 'o' && board[8] == 'o') ||
        (board[2] == 'o' && board[4] == 'o' && board[6] == 'o')){
            announcer.innerText= 'Player O Won!'
            isGameActive = false
     } else if (
        (board[0] == 'x' && board[1] == 'x' && board[2] == 'x') ||
        (board[3] == 'x' && board[4] == 'x' && board[5] == 'x') ||
        (board[6] == 'x' && board[7] == 'x' && board[8] == 'x') ||
        (board[0] == 'x' && board[3] == 'x' && board[6] == 'x') ||
        (board[1] == 'x' && board[4] == 'x' && board[7] == 'x') ||
        (board[2] == 'x' && board[5] == 'x' && board[8] == 'x') ||
        (board[0] == 'x' && board[4] == 'x' && board[8] == 'x') ||
        (board[2] == 'x' && board[4] == 'x' && board[6] == 'x')){
            announcer.innerText= 'Player X Won!'
            isGameActive = false

     } else if (turns === 9) {
         announcer.innerText= `It's a tie.`
         isGameActive = false
     }
}

const resetBoard = () => {
    board = ['', '', '', '', '', '', '', '', ''];
    isGameActive = true;
    turns = 0
    announcer.classList.add('hide');

    if (currentPlayer === 'O') {
        changePlayer();
    }

    boxes.forEach(tile => {
        tile.innerText = '';
        tile.classList.remove('playerX');
        tile.classList.remove('playerO');
    });
}

resetButton.addEventListener('click', resetBoard);
// Global Variables Here
const gameBoard = document.querySelector('.gameBoard')

// const squares = document.querySelectorAll('.square');
const squares = Array.from(document.getElementsByClassName("square"));

const player1 = 'X';
const player2 = 'O';
const spaces = [null, null, null, null, null, null, null, null, null];
let currentPlayer = player1;

const restartBtn = document.querySelector('button');

////////////////////////////////
// Functions For Game Logic Here


 //for (let i = 0; i < squares.length; i++) {
//     squares[i].addEventListener('click', () => {
//     squares.textContent = "X"
//  //      let markSpot = document.querySelectorAll('.square');
//     //    gameBoard[squares] = player1
//     //    if (player1 === 1) {
//     //         squares.textContent = 'X'
//     //    } else {
//     //        squares.textContent = '0'
//     //    }
//        console.log('I have been clicked')
//     })
 //}

// square.addEventListener('click, boxClicked')


// const boxClicked = (e) => {
//     const id = e.target.squares;
//     console.log('box clicked');  
// }

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', () => {
        squares.innerText = 'X';
        console.log('box clicked'); 
      
        })
};

restartBtn.addEventListener('click', () => {
    location.reload();

});


// function playMove () {
//    const id = e.target.id;
//    console.log('box clicked');
// }
// for (let i = 0; i < squares.length; i++) {
// squares[i].addEventListener('click', playMove);
// }


////////////////////////////////
// Event Listeners Here



////////////////////////////////

// Global Variables Here
 const gameBoard = document.querySelector('.gameBoard')
//Top Row
// const squareTopLeft = document.querySelector('.squareTopLeft')
// const squareTopMiddle = document.querySelector('.squareTopMiddle')
// const squareTopRight = document.querySelector('.squareTopRight')
// //Middle Row
// const squareMiddleLeft = document.querySelector('.squareMiddleLeft')
// const squareMiddleMiddle = document.querySelector('.squareMiddleMiddle')
// const squareMiddleRight = document.querySelector('.squareMiddleRight')
// //Bottom Row
// const squareBottomLeft = document.querySelector('.squareBottomLeft')
// const squareBottomMiddle = document.querySelector('.squareBottomMiddle')
// const squareBottomRight = document.querySelector('.squareBottomRight')

const squares = document.querySelectorAll('.square');

const player1 = 'X';
const player2 = 'O';
const spaces = [null, null, null, null, null, null, null, null, null];
let currentPlayer = player1;

////////////////////////////////
// Functions For Game Logic Here

// function placeMark(square, currentClass) {
// 	square.classList.add(currentClass)
// }

// function swapTurns() {
// 	isPlayer1Turn = !isPlayer1Turn
// }
// square.addEventListener("click", squareClicked);
// squares.forEach(square => {
//     square.addEventListener('click', handleClick)
// });

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

function playMove () {
    squares.textContent = `X`;
}
for (let i = 0; i < squares.length; i++) {
squares[i].addEventListener('click', playMove);
}
// let markSpot = document.querySelectorAll('.square');
// gameBoard[squares] = player1
// if (player1 === 1) {
//     console.log('X')
//     // markSpot.textContent = 'X'
// } else {
//     markSpot.textContent = '0'
// }

// const squareClicked = (e) => {
//     const id = e.target.id;
//     if (!spaces[id]) {
//         spaces[id] = currentPlayer;
//         e.target.innerText = currentPlayer;
//     }
//     currentPlayer = currentPlayer === player1 ? player2 : player1;
// }

////////////////////////////////
// Event Listeners Here

// //Top Row
// squareTopLeft.addEventListener('click', event => {
//     squareTopLeft.textContent = `X`;
// });


// squareTopMiddle.addEventListener('click', event => {
//     squareTopMiddle.textContent = `X`;
// });

// squareTopRight.addEventListener('click', event => {
//     squareTopRight.textContent = `X`;
// });

// //Middle Row
// squareMiddleLeft.addEventListener('click', event => {
//     squareMiddleLeft.textContent = `X`;
// });

// squareMiddleMiddle.addEventListener('click', event => {
//     squareMiddleMiddle.textContent = `X`;
// });

// squareMiddleRight.addEventListener('click', event => {
//     squareMiddleRight.textContent = `X`;
// });

// //Bottom Row
// squareBottomLeft.addEventListener('click', event => {
//     squareBottomLeft.textContent = `X`;
// });

// squareBottomMiddle.addEventListener('click', event => {
//     squareBottomMiddle.textContent = `X`;
// });

// const squareBottomRight = document.querySelector('.squareBottomRight')

// squareBottomRight.addEventListener('click', event => {
//     squareBottomRight.textContent = `X`;
// });


// const square = document.getElementById('topRow')

// let playX = () => {
//     document.body.append('X')
// }


// const changeClass = () => {
//     document.body.classList.toggle('squareTopLeft::after')
// }

// square.addEventListener('click', changeClass)

// square.addEventListener('click',
//     document.body.classList.add('squareTopLeft::after')

// );

// const addText = () => {
//     document.body.append('X')
// }

// square.addEventListener('click', addText)



// window.addEventListener('click', function(e) {
//     const square = document.querySelector('.squareTopLeft');
//     square.classList.add('squareTopLeft::after');
//     console.log('square')
// })

////////////////////////////////

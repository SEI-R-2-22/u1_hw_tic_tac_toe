////////////////////////////////
// Global Variables Here



const spaces = [];
// const board = array.from(boxes)
let playerX = 'X'
let playerO = 'O'
const boxes = document.querySelectorAll('.box')
let ticTacToe = ['', '', '', '', '', '', '', '', ''] 
let turns = 0
let xArray = []
let oArray = []
let win = "You win!"
//keeps track of players plays
let player1Plays = []
let player2Plays = []




for(let i = 0; i<boxes.length; i++){
    boxes[i].addEventListener('click', function(){
        if(turns % 2 == 0){
            boxes[i].innerHTML=playerX
            turns++
            xArray.push(boxes[i])
            console.log(xArray)
            // let player1Plays = 
        } else if(turns % 2 == 1){
            boxes[i].innerText=playerO
            turns++
            oArray.push(boxes[i])
            console.log(oArray)
            // validPlay()
        }
        
    })
} 



////////// Valid play/////////

// const validPlay = (tile) => {
//     if (boxes.innerText === 'X' || boxes.innerText === 'O'){
//         return false;
//     }

//     return true;
// };
    const winCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    // function checkWinner() {
        //     if (winner === false) {
        //       if (
        //         boxes[0] + boxes[1] + boxes[2] === 3 ||
        //         boxes[0] + boxes[3] + boxes[6] === 3 ||
        //         boxes[0] + boxes[4] + boxes[8] === 3 ||
        //         boxes[1] + boxes[4] + boxes[7] === 3 ||
        //         boxes[2] + boxes[4] + boxes[6] === 3 ||
        //         boxes[2] + boxes[5] + boxes[8] === 3 ||
        //         boxes[3] + boxes[4] + boxes[5] === 3 ||
        //         boxes[6] + boxes[7] + boxes[8] === 3
        //       ) {
   
    

// function findWinner () {
//     let roundWon = false;
//     for (let i= 0; i <= 7, i++) {
//         const winCondition = winningConditions[i];
//         const a = board[winningConditions[0]]
//         const b = board[winningConditions[1]]
//         const c = board[winningConditions[2]]
//     }
// } if (a === b && b === c) {
//     roundWon = true;
// }


// if (roundWon) {
//     announce(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
//     isGameActive = false;
//     return;
// }








// max switch being 9
// innitiate a var called turns = 0
// turn reaches 9 without a winn its a draw
// if turn % 2 === 0 its player x. if === 1 its player o use math.ceiling

// const number = prompt('enter a number:')
// // ?check if the number is even or odd
// if(number % 2 == 0) {
//     console.log('the number is ever')
// }
// // Check if its off
// else {
//     console.log("the number is odd")
// }

//   let userAction = () =>{
//         if(turns %2 === 0){
//             boxes[i].innterText=playerX
//             turns=+1
//         } else if (turns % 2 === 1){
//             boxes[i].innerText=playerO
//             turns=+1
//         }
//     }













    
    // working //
// for(let i=0; i<boxes.length; i++){
//     boxes[i].addEventListener('click', () => { // why do we need to call a function
//         userAction()}
//     )}
  

   
    

// for (let i = 0; i < 9; i++) {
//     allSqs[i].addEventListener(‘click’, () =>{
//         if (player % 2 === 0){
//             allSqs[i].innerText = ‘X’
//             changePl()
//         }else if (player % 2 === 1){
//             allSqs[i].innerText = ‘O’
//             changePl()
//         };
//         const index
//     })
// }




////////////////////////////////
// Functions For Game Logic Here



////////////////////////////////
// Event Listeners Here



////////////////////////////////

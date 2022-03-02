// Global Variables Here
const TicTacToe = 'game';
const player1 = "O";
const player2 = "X";
let gameStart = true;
let currentPlayer = "X";
const statusDisplay = document.querySelector('.game--status');
const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ends in a draw`;
let xTurn = true ;
const oTurn = false;
let letter = "" ;
let player = '' ;




////////////////////////////////
// Functions For Game Logic Here

function print() {     
    if (xTurn===true) {
        //code to be executed }
        cell.innerHTML = "x";
        xTurn = !xTurn ;
    } else {
        cell.innerHTML = "o" ;
        xTurn = !xTurn
    }
}

////////////////////////////////
// Event Listeners Here

const turns = () =>{
    if(oTurn === true){
        xTurn = true;
        letter = "X" ;
    }else{
        oTurn = true;
        letter = "O" ;
    }
}

const checkBoard = () =>{
    window.alert(`${player} wins`)
}
const game = () =>{
//some code that does game 
    if(letter == "X"){
        player = player1 ;
    }else{
        player = player2 ;
    }



//when done with turn, change players

turns() ;

} ;
const cell1 = () =>{
    document.getElementById("c1").value = letter;
    document.getElementById("c1").disabled = true;

} ;

const cell2 = () =>{
    document.getElementById("c2").value = letter;
    document.getElementById("c2").disabled = true;
} ;
const cell3 = () =>{
    document.getElementById("c3").value = letter;
    document.getElementById("c3").disabled = true;
} ;
const cell4 = () =>{
    document.getElementById("c4").value = letter;
    document.getElementById("c4").disabled = true;
} ;
const cell5 = () =>{
    document.getElementById("c5").value = letter;
    document.getElementById("c5").disabled = true;
} ;
const cell6 = () =>{
    document.getElementById("c1").value = letter;
    document.getElementById("c1").disabled = true;
} ;
const cell7 = () =>{
    document.getElementById("c1").value = letter;
    document.getElementById("c1").disabled = true;
} ;
const cell8 = () =>{
    document.getElementById("c1").value = letter;
    document.getElementById("c1").disabled = true;
} ;
const cell9 = () =>{
    document.getElementById("c1").value = letter;
    document.getElementById("c1").disabled = true;
} ;



const c1, c2, c3, c4, c5, c6, c7, c8, c9;
    c1 = document.getElementById("c1").value;
    c2 = document.getElementById("c2").value;
    c3 = document.getElementById("c3").value;
    c4 = document.getElementById("c4").value;
    c5 = document.getElementById("c5").value;
    c6 = document.getElementById("c6").value;
    c7 = document.getElementById("c7").value;
    c8 = document.getElementById("c8").value;
    c9 = document.getElementById("c9").value;

    
    if ((c1 == 'x' || c1 == 'X') && (c2 == 'x' ||
    c2 == 'X') && (c3 == 'x' || c3 == 'X')) {
    document.getElementById('print')
        .innerHTML = "Player X won";
    document.getElementById("c4").disabled = true;
    document.getElementById("c5").disabled = true;
    document.getElementById("c6").disabled = true;
    document.getElementById("c7").disabled = true;
    document.getElementById("c8").disabled = true;
    document.getElementById("c9").disabled = true;
    window.alert('Player X won');

    }else if ((c1 == 'x' || c1 == 'X') && (c4 == 'x' ||
    c4 == 'X') && (c7 == 'x' || c7 == 'X')) {
    document.getElementById('print')
        .innerHTML = "Player X won";
    document.getElementById("c2").disabled = true;
    document.getElementById("c3").disabled = true;
    document.getElementById("c5").disabled = true;
    document.getElementById("c6").disabled = true;
    document.getElementById("c8").disabled = true;
    document.getElementById("c9").disabled = true;

    window.alert('Player X won');



 ////// Tie
}else if ((c1 == 'X' || c1 == '0') && (c2 == 'X'
 || c2 == '0') && (c3 == 'X' || c3 == '0') &&
 (c4 == 'X' || c4 == '0') && (c5 == 'X' ||
 c5 == '0') && (c6 == 'X' || c6 == '0') &&
 (c7 == 'X' || c7 == '0') && (c8 == 'X' ||
 c8 == '0') && (c9 == 'X' || c9 == '0')) {
document.getElementById('print')
.innerHTML = "Match Tie";
window.alert('Match Tie');
}
else 

 ///// results
 if (player == 1) {
     document.getElementById('print')
         .innerHTML = "Player X Turn";
 }
 else {
     document.getElementById('print')
     .innerHTML = "Player 0 Turn";

    }



    function gameOver()
    {
    gameBoardWinner = '?';
    return
    winner(1,1,2)
    winner(2,3,3)
    winner(1,1,4)
    winner(4,7,7)
    }
    


// for (let i = 1; i < 10; i++) {
//   // targeting divs 
//     let cell = document.getElementById(`c${i}`);

//     if (oTurn===true) {
//         //code to be executed }
//         cell.innerHTML = "o"
//         oTurn = !oTurn
        
//     }else {cell.innerHTML = "x"
//            oTurn = !oTurn
//     }
    
//     if (xTurn===true) {
//         //code to be executed }
//         cell.innerHTML = "x"
//         xTurn = !xTurn
        
//     }else {cell.innerHTML = "o"
//            oTurn = !oTurn

//         //    console.log("Next person is..");
//         //     (currentPlayer === 'x') 
//         //    (currentPlayer = 'o')

//         function handlePlayerChange() {
//             currentPlayer = currentPlayer === "X" ? "O" : "X";
//             statusDisplay.innerHTML = currentPlayerTurn();
//         }
    
// // adding event listener to divs
// cell.addEventListener('click',function(){
//     print()
// })
// }

// }
    
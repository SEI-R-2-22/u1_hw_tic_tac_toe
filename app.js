////////////////////////////////
// Global Variables Here

const gameSquare = Array.from(document.querySelectorAll('.game-square'));
const whosPlaying = document.querySelector('.whosPlaying');
const resetBtn = document.querySelector('#reset');


let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'O';
let gameIsPlaying = true;


const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
 ];




////////////////////////////////
// Functions For Game Logic Here



const moveIsAllowed = (box) => {
    if (box.innerText === 'X' || box.innerText === 'O'){
        return false;
    }

    return true;
};

const updateBoard =  (index) => {
    board[index] = currentPlayer;
 }

 const changePlayer = () => {
    whosPlaying.classList.remove(`player${currentPlayer}`);
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    whosPlaying.innerText = currentPlayer;
    whosPlaying.classList.add(`player${currentPlayer}`);
}


function getResult() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
      const winCondition = winningConditions[i];
      const a = board[winCondition[0]];
      const b = board[winCondition[1]];
      const c = board[winCondition[2]];
      if (a === "" || b === "" || c === "") {
        continue;
      }
      if (a === b && b === c) {
        roundWon = true;
        break;
      }
    }
  
    if (roundWon) {
      announce(currentPlayer === "X" ? PLAYERX_WON : PLAYERO_WON);
      gameIsPlaying = false;
      return;
    }
  
    if (!board.includes("")) announce(TIE);
  }

  const userAction = (box, index) => {
    if (moveIsAllowed(box) && gameIsPlaying) {
      box.innerText = currentPlayer;
      box.classList.add(`player${currentPlayer}`);
      updateBoard(index);
      getResult();
      changePlayer();
    }
  };

  gameSquare.forEach( (box, index) => {
    box.addEventListener('click', () => userAction(box, index));
});

const resetBoard = () => {
    board = ['', '', '', '', '', '', '', '', ''];
    gameIsPlaying = true;
    if (currentPlayer === 'O') {
        changePlayer();
    }

    gameSquare.forEach(box => {
        box.innerText = '';
        box.classList.remove('playerX');
        box.classList.remove('playerO');
    });
}





////////////////////////////////
// Event Listeners Here


resetBtn.addEventListener('click', resetBoard);



////////////////////////////////



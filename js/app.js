window.addEventListener('DOMContentLoaded', () => {
    const cell = Array.from(document.querySelectorAll('.cell'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');

    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let isGameActive = true;

    const PLAYERX_WON = 'PLAYERX_WON';
    const PLAYERO_WON = 'PLAYERO_WON';
    const DRAW = 'DRAW';

    const winningCombinations = [
        [0, 1, 2],
        [0, 3, 4],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8]
    ];

    function handleResultValidation() {
        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
            const winCombo = winningCombinations[i];
            const a = board[winCombo[0]];
            const b = board[winCombo[1]];
            const c = board[winCombo[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }
        if (roundWon) {
            announce(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
            isGameActive = false;
            return;
        }
        if (!board.includes(''))
            announce(DRAW);
    }

    const announce = (type) => {
        switch (type) {
            case PLAYERO_WON:
                announcer.innerHTML = 'Player <span class="playerO">O</span> Won';
                break;
            case PLAYERX_WON:
                announcer.innerHTML = 'Player <span class="playerX">X</span> Won';
                break;
            case DRAW:
                announcer.innerText = 'Draw';
        }
        announcer.classList.remove('hide');
    };

    const isValidAction = (cell) => {
        if (cell.innerText === 'X' || cell.innerText === 'O') {
            return false;
        }

        return true;
    };

    const updateBoard = (index) => {
        board[index] = currentPlayer;
    }

    const changePlayer = () => {
        playerDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerDisplay.classList.add(`player${currentPlayer}`);
    }

    function userAction(cell, index) {
        if (isValidAction(cell) && isGameActive) {
            cell.innerText = currentPlayer;
            cell.classList.add(`player${currentPlayer}`);
            updateBoard(index);
            handleResultValidation();
            changePlayer();
        }
    }

    const resetBoard = () => {
        board = ['', '', '', '', '', '', '', '', '']
        isGameActive = true;
        announcer.classList.add('hide');

        if (currentPlayer === 'O') {
            changePlayer();
        }

        cell.forEach(cell => {
            cell.innerText = '';
            cell.classList.remove('playerX');
            cell.classList.remove('playerO');
        });
    }

    cell.forEach((cell, index) => {
        cell.addEventListener('click', () => userAction(cell, index));
    });

    resetButton.addEventListener('click', resetBoard);
});





// A user should be able to click on different squares to make a move.
// Every click will alternate between marking an X and O
// A cell should not be able to be replayed once marked.
// You should not be able to click remaining empty cells after the game is over.
// Add a reset button that will clear the contents of the board.
// Display a message to indicate which turn is about to be played.
// Detect draw conditions (ties/cat's game)
// Detect winner: Stop game and declare the winner if one player ends up getting three in a row.
// Hint: Determine a set of winning combinations. Check those combinations on the board contents after every move.


////////////////////////////////
// Global Variables Here

// ////////////////////////////////
// // Functions For Game Logic Here

// ////////////////////////////////
// // Event Listeners Here

// //Event listener for clicking on play again button

// ///////////////////////////////

// <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1">
//   <script type="text/javascript" src="js/app.js"></script>
//   <title>Tic-Tac-Toe</title>
//   <link rel="stylesheet" type="text/css" href="css/style.css"></link>
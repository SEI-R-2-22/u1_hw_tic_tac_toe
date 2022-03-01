window.addEventListener('DOMContentLoaded', () => {
    const box = Array.from(document.querySelectorAll('.box'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');

    let screen = [];
    let currentPlayer = 'X';
    let isGameActive = true;

    const playerX_won = 'playerX_won';
    const player0_won = 'player0_won';
    const tie = 'tie';

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

    function handleResultValidation() {
        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
            const winConditions = winningConditions[i];
            const a = screen[winConditions[0]];
            const b = screen[winConditions[1]];
            const c = screen[winConditions[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundwon = true;
                break;
            }
        }
    if (roundWon) {
            announce(currentPlayer === 'X' ? playerX_won : player0_won);
            isGameActive = false;
            return;
        }
    if (!board.includes(''))
    announce(tie);
    }
    
    const announce = (type) => {
        switch(type){
            case player0_won:
                announcer.innerHTML = `Player <span class = "player0">0</span> Won`;
                break;
            case playerX_won:
                announcer.innerHTML = `Player <span class = "playerX">X</span> Won`;
                break;
            case tie:
                announcer.innerText = 'tie';
        }
        announcer.classList.remove('hide');
    };
    
    const isValidAction = (box) => {
        if (box.innerText === 'X' || box.innerText === '0'){
            return false;
        }
        return true;
    };

    const updateScreen = (index) => {
        board[index] = currentPlayer;
    }

    const changePlayer = () => {
        playerDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === 'X' ? '0' : 'X';
        playerDisplay.innerText = currentPlayer;
        playerDisplay.classList.add(`player${currentPlayer}`);
    }
    
    const userAction = (box, index) => {
        if(isValidAction(box) && isGameActive) {
            box.innerText = currentPlayer;
            box.classList.add(`player${currrentPlayer}`);
            updateScreen(index);
            handleResultValidation();
            changePlayer();
            }
        }

        const resetScreen = () => {
            screen = ['', '', '', '', '', '', '', '', ''];
            isGameActive = true;
            announcer.classList.add('hide');

            if (currentPlayer === '0') {
                changePlayer();
            }
            box.forEach(box => {
                box.innerText = '';
                box.classList.remove('playerX');
                box.classList.remove('player0');
            });
        }

        resetButton.addEventListener('click', resetScreen);
});
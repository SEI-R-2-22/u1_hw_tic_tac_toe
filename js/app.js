////////////////////////////////
// Global Variables Here
let boxObj = {};
let turn_sym = 'O';
let game_finished = 0;
let winner = null;
let winningCombos = {
    1 : [[2,3], [4,7], [5,9]],
    2 : [[1,3], [5,8]],
    3 : [[1,2], [5,7], [6,9]],
    4 : [[1,7], [5,6]],
    5 : [[1,9], [2,8], [3,7], [4,6]],
    6 : [[3,9], [4,5]],
    7 : [[1,4], [3,5], [8,9]],
    8 : [[2,5], [7,9]],
    9 : [[1,5], [3,6], [7,8]]
};
////////////////////////////////
// Functions For Game Logic Here
function checkGameWinner(boxNum) {
    let checkCombos = winningCombos[boxNum];
    checkCombos.forEach(combo => {
        if(boxObj[combo[0]] == turn_sym && boxObj[combo[1]] == turn_sym) {
            game_finished = 1;
            winner = turn_sym;
            document.getElementById("results_text").innerText = `${turn_sym} has won!`;
            console.log("winner found");
        }
    });
}
function checkGameDraw() {
    if(Object.keys(boxObj).length == 9 && game_finished == 0) {
        game_finished = 1;
        document.getElementById("results_text").innerText = "Draw!";
        console.log("tie game");
    }
}

////////////////////////////////
// Event Listeners Here
function selectBox(boxNum) {
    console.log(`${boxNum} clicked`);
    if(!(boxNum in boxObj) && game_finished === 0) {
        boxObj[boxNum] = turn_sym;
        document.getElementById(`box_${boxNum}`).innerText = turn_sym;
        checkGameWinner(boxNum);
        checkGameDraw();
        turn_sym = (turn_sym == 'O') ? 'X' : 'O';
        document.getElementById("turn_text").innerText = turn_sym;
    }
}
function resetGame(){
    let boxElements = document.getElementsByClassName("tic_tac_toe_box");
    boxObj = {};
    turn_sym = 'O';
    game_finished = 0;
    winner = null;
    for(let i=0; i<boxElements.length; i++) {
        boxElements[i].innerText = '';
    }
    document.getElementById("results_text").innerText = '';
    document.getElementById("turn_text").innerText = 'O';
}

////////////////////////////////

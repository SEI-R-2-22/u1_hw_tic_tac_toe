// Global Variables Here
const board = document.querySelectorAll(".space"); //board becomes an array of the buttons
let turn = 1;
let winner = 0;
// let xScore = 0;
// let oScore = 0;
const firstRow = document.querySelectorAll("#firstRow");
const secondRow = document.querySelectorAll("#secondRow");
const thirdRow = document.querySelectorAll("#thirdRow");
const firstColumn = document.querySelectorAll("#firstColumn");
const secondColumn = document.querySelectorAll("#secondColumn");
const thirdColumn = document.querySelectorAll("#thirdColumn");
const firstDiag = document.querySelectorAll("#firstDiag");
const secondDiag = document.querySelectorAll("#secondDiag");
const whosTurn = document.querySelector("h2");
const reset = document.querySelector("#reset");
// let content = board[i].innerText;

////////////////////////////////
// Functions For Game Logic Here
//my thoughts on this function are to check the equality of innerText within each of these Arrays.  No idea how i'd get that done yet
const checkWinner = (array) => {
  let box1 = array[0];
  let box2 = array[1];
  let box3 = array[2];
  let box4 = array[3];
  let box5 = array[4];
  let box6 = array[5];
  let box7 = array[6];
  let box8 = array[7];
  let box9 = array[8];
  // console.log(box1);
  if (
    (box1.classList.contains("x") &&
      box2.classList.contains("x") &&
      box3.classList.contains("x")) ||
    (box4.classList.contains("x") &&
      box5.classList.contains("x") &&
      box6.classList.contains("x")) ||
    (box7.classList.contains("x") &&
      box8.classList.contains("x") &&
      box9.classList.contains("x")) ||
    (box1.classList.contains("x") &&
      box4.classList.contains("x") &&
      box7.classList.contains("x")) ||
    (box2.classList.contains("x") &&
      box5.classList.contains("x") &&
      box8.classList.contains("x")) ||
    (box3.classList.contains("x") &&
      box6.classList.contains("x") &&
      box9.classList.contains("x")) ||
    (box1.classList.contains("x") &&
      box5.classList.contains("x") &&
      box9.classList.contains("x")) ||
    (box7.classList.contains("x") &&
      box5.classList.contains("x") &&
      box3.classList.contains("x")) ||
    (box1.classList.contains("o") &&
      box2.classList.contains("o") &&
      box3.classList.contains("o")) ||
    (box4.classList.contains("o") &&
      box5.classList.contains("o") &&
      box6.classList.contains("o")) ||
    (box7.classList.contains("o") &&
      box8.classList.contains("o") &&
      box9.classList.contains("o")) ||
    (box1.classList.contains("o") &&
      box4.classList.contains("o") &&
      box7.classList.contains("o")) ||
    (box2.classList.contains("o") &&
      box5.classList.contains("o") &&
      box8.classList.contains("o")) ||
    (box3.classList.contains("o") &&
      box6.classList.contains("o") &&
      box9.classList.contains("o")) ||
    (box1.classList.contains("o") &&
      box5.classList.contains("o") &&
      box9.classList.contains("o")) ||
    (box7.classList.contains("o") &&
      box5.classList.contains("o") &&
      box3.classList.contains("o"))
  ) {
    whosTurn.innerText = "WINNER!";
    winner = 1;
    // console.log(winner);
    // for (i = 0; i < board.length; i++) {
    //   board[i].disable = true;
    // }
  }

  //   winner === "yes";
  // } else if ((turn = 9)) {
  //   whosTurn.innerText = "It's a draw!";
  // }
};

////////////////////////////////
// Event Listeners Here

//We're gonna loop through the array listening for clicks.  on clicks depending on turn (even vs. odd), change innerText. if there's already text in clicked box we do nothing
for (i = 0; i < board.length; i++) {
  const content = board[i];
  board[i].addEventListener("click", () => {
    if (content.innerText === "" && winner === 0) {
      switch (turn) {
        case 1:
        case 3:
        case 5:
        case 7:
          ++turn;
          // console.log(turn);

          whosTurn.innerText = "O goes!";
          content.innerText = "X";
          content.classList.add("x");
          // content.disabled = true;

          checkWinner(board);

          break;
        case 2:
        case 4:
        case 6:
        case 8:
          ++turn;
          // console.log(turn);

          whosTurn.innerText = "X goes!";
          content.innerText = "O";
          content.classList.add("o");

          // content.disabled = true;

          checkWinner(board);

          break;

        case 9:
          whosTurn.innerText = "It's a draw!";
          content.innerText = "X";
          content.classList.add("x");
          // content.disabled = true;
          checkWinner(board);
          break;
      }
    } else if (winner === 1) {
      // console.log("already won!");
    } else {
      // console.log("already clicked");
    }
  });
}

reset.addEventListener(
  "click",
  () => {
    for (i = 0; i < board.length; i++) {
      let content = board[i];
      content.innerText = "";
      turn = 1;
      content.classList.remove("x");
      content.classList.remove("o");
      whosTurn.innerText = "X goes!";
      winner = 0;
      // console.log(turn);
    }
  }
  // location.reload()
);

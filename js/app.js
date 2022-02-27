// Global Variables Here
const board = document.querySelectorAll(".space"); //board becomes an array of the buttons
let turn = 1;
const firstRow = document.querySelectorAll("#firstRow");
const secondRow = document.querySelectorAll("#secondRow");
const thirdRow = document.querySelectorAll("#thirdRow");
const firstColumn = document.querySelectorAll("#firstColumn");
const secondColumn = document.querySelectorAll("#secondColumn");
const thirdColumn = document.querySelectorAll("#thirdColumn");
const firstDiag = document.querySelectorAll("#firstDiag");
const secondDiag = document.querySelectorAll("#secondDiag");
const whosTurn = document.querySelector("h2");
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
    (box1.innerText === box2.innerText && box3.innerText) ||
    (box4.innerText === box5.innerText && box6.innerText) ||
    (box7.innerText === box8.innerText && box9.innerText) ||
    (box1.innerText === box4.innerText && box7.innerText) ||
    (box2.innerText === box5.innerText && box8.innerText) ||
    (box3.innerText === box6.innerText && box9.innerText) ||
    (box1.innerText === box5.innerText && box9.innerText) ||
    (box7.innerText === box5.innerText && box3.innerText)
  ) {
    whosTurn.innerText = "WINNER!";
  }
};
//clickButton will either add a class or do nothng
// const clickButton = (turn) => {
//   switch (turn) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 9:
//       content = "X";
//   }
// };

////////////////////////////////
// Event Listeners Here

//We're gonna loop through the array listening for clicks.  on clicks depending on turn (even vs. odd), change innerText. If space has a class of selectX or selectO already
for (i = 0; i < board.length; i++) {
  const content = board[i];
  board[i].addEventListener("click", () => {
    // if (content = 'X' || 'O') {
    //    return;
    // }
    // else if (turn = 0) {
    //     content = '0';
    // }
    // else {
    //     content= 'X';
    // }
    // if ((content.innerText = "X" || "O")) {
    //   console.log("already selected");
    // } else {
    // let stat = content.getAttribute("isClicked");
    // console.log(stat);
    if (content.innerText === "") {
      switch (turn) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 9:
          ++turn;
          // if ((content.innerText = "X" || "O")) {
          // } else {
          // stat = "yes";
          whosTurn.innerText = "O goes!";
          content.innerText = "X";
          // checkWinner(firstRow);
          // }
          // content.innerText = "X";
          // turn += 1;
          // // }

          checkWinner(board);
          // console.log(content);
          break;
        case 2:
        case 4:
        case 6:
        case 8:
          ++turn;
          // if ((content.innerText = "X" || "O")) {
          // } else {
          whosTurn.innerText = "X goes!";
          content.innerText = "O";
          checkWinner(board);
          // stat = "yes";
          // }

          // console.log(content);
          break;
      }
    } else {
      console.log("already clicked");
    }

    // }
    //   console.log(score);
  });
}
////////////////////////////////

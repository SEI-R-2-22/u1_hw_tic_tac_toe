// Global Variables Here
let board = document.querySelectorAll(".space"); //board becomes an array of the buttons
let turn = 1;
// let content = board[i].innerText;

////////////////////////////////
// Functions For Game Logic Here
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

//We're gonna loop through the array listening for clicks.  on clicks depending on turn (even vs. odd), add class that applies x or o. If space has a class of selectX or selectO already
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

    switch (turn) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 9:
        content.innerText = "X";
        turn += 1;
        // console.log(content);
        break;
      case 2:
      case 4:
      case 6:
      case 8:
        content.innerText = "O";
        turn += 1;
        // console.log(content);
        break;
    }

    //   console.log(score);
  });
}
////////////////////////////////

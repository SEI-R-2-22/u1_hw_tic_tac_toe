// Global Variables Here
let board = document.querySelectorAll('space');//board becomes an array of the buttons
let turn = 1



////////////////////////////////
// Functions For Game Logic Here
//clickButton will either add a class or do nothng
const clickButton = (turn) => {
    switch (turn) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 9:
            //put an X
    }

}




////////////////////////////////
// Event Listeners Here

//We're gonna loop through the array listening for clicks.  on clicks depending on turn (even vs. odd), add class that applies x or o. If space has a class of selectX or selectO already
for (i = 0; i < board.length; i++) {
    let status = board[i].getAttribute("class");
    board[i].addEventListener("click", () => {

    }

      //   console.log(score);
      
      }
    


////////////////////////////////

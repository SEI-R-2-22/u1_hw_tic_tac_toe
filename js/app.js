// Global Variables Here

let cellEntry = {
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
}

let gridItem = document.querySelectorAll(".grid-item");

let turnCounter = 0;

let message = document.getElementById("message");

let resetBtn = document.getElementById("resetBtn");

let winnerX = false;
let winnerO = false;
let drawFlag = false;

////////////////////////////////
// Functions For Game Logic Here

const checkWinner = () => {
    console.log("checkWinner works!");
    // check current board layout to see if the game is over
    // connect to displayMessage function to display winner/tie

    if (cellEntry[0]=== "x" && cellEntry[1]=== "x" && cellEntry[2]=== "x") {
        winnerX = true;
        stopGame()
    } else if (cellEntry[3]=== "x" && cellEntry[4]=== "x" && cellEntry[5]=== "x") {
        winnerX = true;
    } else if (cellEntry[6]=== "x" && cellEntry[7]=== "x" && cellEntry[8]=== "x") {
        winnerX = true;
    } else if (cellEntry[0]=== "x" && cellEntry[3]=== "x" && cellEntry[6]=== "x") {
        winnerX = true;
    } else if (cellEntry[1]=== "x" && cellEntry[4]=== "x" && cellEntry[7]=== "x") {
        winnerX = true;
    } else if (cellEntry[2]=== "x" && cellEntry[5]=== "x" && cellEntry[8]=== "x") {
        winnerX = true;
    } else if (cellEntry[0]=== "x" && cellEntry[4]=== "x" && cellEntry[8]=== "x") {
        winnerX = true;
    } else if (cellEntry[2]=== "x" && cellEntry[4]=== "x" && cellEntry[6]=== "x") {
        winnerX = true;
    }
    else if (cellEntry[0]=== "o" && cellEntry[1]=== "o" && cellEntry[2]=== "o") {
        winnerO = true;
    } else if (cellEntry[3]=== "o" && cellEntry[4]=== "o" && cellEntry[5]=== "o") {
        winnerO = true;
    } else if (cellEntry[6]=== "o" && cellEntry[7]=== "o" && cellEntry[8]=== "o") {
        winnerO = true;
    } else if (cellEntry[0]=== "o" && cellEntry[3]=== "o" && cellEntry[6]=== "o") {
        winnerO = true;
    } else if (cellEntry[1]=== "o" && cellEntry[4]=== "o" && cellEntry[7]=== "o") {
        winnerO = true;
    } else if (cellEntry[2]=== "o" && cellEntry[5]=== "o" && cellEntry[8]=== "o") {
        winnerO = true;
    } else if (cellEntry[0]=== "o" && cellEntry[4]=== "o" && cellEntry[8]=== "o") {
        winnerO = true;
    } else if (cellEntry[2]=== "o" && cellEntry[4]=== "o" && cellEntry[6]=== "o") {
        winnerO = true;
    }
    

}   

// display turn, winner, or tie
const displayMessage = () => {
    console.log("displayMessage works!");
    
    // tie
    drawFlag = true
    
    for (let i = 0; i < 9; i++) {
        if (cellEntry[i] === null) {
            drawFlag=false;
            break

        }

    }

    // winner
    if (winnerX === true) {
        message.innerText = "X won!";
    }
    else if (winnerO === true) {
        message.innerText = "O won!";
    }
    else if ( drawFlag ){
        message.innerText = "Draw!"
    }

    // turn
    else if (turnCounter % 2 === 0) {
        message.innerText = "It's X's turn!";
    }
    else {
        message.innerText = "It's O's turn!";

    }

}

// replaces "null" property value in cellEntry object with either "x" or "o"
// currentElement refers to the "this" value gathered from the event listener
const markCell = (clickedGrid, currentElement) => {
    console.log("markCell works!");


    // increments turnCounter if grid-item has not been clicked
    if (cellEntry[clickedGrid] === null) {
        turnCounter += 1;

    // replaces "null" value with "x" or "o" when clicked
    cellEntry[clickedGrid] = (turnCounter % 2 === 0 ? "o" : "x");
    
    console.log(cellEntry);
    console.log(currentElement);

    checkWinner();
    displayMessage();
    }    
}

// resets values for global variables back to "null", "false" and 0
const reset = () => {
    location.reload()
    console.log("reset works!");

    // I had trouble getting the following code to work so reset button triggers a page reload instead

    // // reset all values to null, remove all xs and os
    // for (i = 0; i < 9; i++) {
    //     cellEntry[i] = null;
    //     gridItem[i].classList.remove('x');
    //     gridItem[i].classList.remove('o');
        
    // }
    // // resets global variables
    // winnerX = false;
    // winnerO = false;
    // turnCounter = 0;
    // drawFlag = false;

    // displayMessage();
    // for (let i = 0; i < 9; i++) {
    //     gridItem[i].addEventListener("click", function () {
    //         let clickedGrid = this.innerHTML;
    //         let currentElement = this;
    //         markCell(clickedGrid, currentElement);
            
    //     })
        
    // };
    console.log(cellEntry);
}

// sets the grid-item to either an "x" image or "o" image
const setImage = () => {
    for (i = 0; i < 9; i++) {
        
        if (cellEntry[i] === 'x') {
            gridItem[i].classList.add('x');
        }
        else if (cellEntry[i] === 'o') {
            gridItem[i].classList.add('o');
        }
    }
}



////////////////////////////////
// Event Listeners Here

// listens for click on a gridItem and stores the innerHTML using "this" into currentElement, runs markCell
for (let i = 0; i < 9; i++) {
    gridItem[i].addEventListener("click", function () {
        let clickedGrid = this.innerHTML;
        let currentElement = this;
        markCell(clickedGrid, currentElement);
        
    })
    
};

// listens for click on gridItem, runs setImage to pass in currentElement and assign "x" or "o" image
for (let i = 0; i < 9; i++) {
    gridItem[i].addEventListener("click", setImage);
}

// prevents clicking cells after game is over
let stopGame = () => {
    setTimeout(() => { 
            for (i = 0; i < 9; i++) {
            gridItem[i].removeEventListener("click", setImage);
        }

    }, 100);
    
}


// reset button
resetBtn.addEventListener("click", reset);






////////////////////////////////
// test functions

// If I want to access the grid
// console.log(grid)

// // If I want to access the first grid object (testing access for any specific grid object)
// console.log( grid['topLeft'])

// // within the first grid object there are two properties
// console.log( grid['topLeft'].gridItem) // for the html element
// console.log( grid['topLeft'].isMarked) // for the flag

// // changing the property in the grid object and testing the change (is grid center now marked true?)
// grid['center'].isMarked = true
// console.log(grid)
////////////////////////////////
// Global Variables Here
let playerX ='X'
let playerO = 'O'
const boxes = document.querySelectorAll('.box')
const resetButton = document.querySelector('#reset')
let board = [ ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ']
let turns = 0;
let xArray= []
let oArray= []
let isGameActive = true;
let win = ("something")
let legalPlay
//Switch between x and o  
//initiate variable called turns, starting off at zero
//using some math operator, us js logic to decide whether or not our turn is even or odd with that we can decide we have player x or o
//if turn modulo 2=0 then it is player x, if turn modulo 2=1 then it is o, use math.ceiling

//const number = prompt("Enter a number");


// let userAction = (x, i) => {
//    if (turns % 2 == 0) {
//     boxes[i].innerText= playerX
//     turns++
//    }
//    else if (turns % 2  == 1) {
//       boxes[i].innerText=playerO
//        turns++
//    }

//    }

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

const boxValue1 = board[winningConditions[0]]
const boxValue2 = board[winningConditions[1]]
const boxValue3 = board[winningConditions[2]]



if (boxValue1 === boxValue2 &&
    boxValue2 === boxValue3) {


    }

    // const box = event.target
    // const boxNumber = box.dataset.index
    // if(box.innerText !="") {
    //     return
    // }

    //let win = "something"

for(let i =0; i<boxes.length; i++) {
        boxes[i].addEventListener('click', () => {
            if(turns % 2 == 0) {
                boxes[i].innerText= playerX
                turns++
                xArray.push(boxes[i])
                console.log(xArray);
        }  
            else if (turns % 2 == 1 ) {
            boxes[i].innerText = playerO
            turns++
            oArray.push(boxes[i])
            console.log(oArray);
          }
        })}
    
        // const winningConditions = [
        //     [0, 1, 2],
        //     [3, 4, 5],
        //     [6, 7, 8],
        //     [0, 3, 6],
        //     [1, 4, 7],
        //     [2, 5, 8],
        //     [0, 4, 8],
        //     [2, 4, 6]
        // ];

        // let win = "something"

        // for(let i = 0; i<boxes.length; i++){
        //     boxes[i].addEventListener('click', function() {

        //     }
        // }


    

    
////////////////////////////////
// Functions For Game Logic Here



////////////////////////////////
// Event Listeners Here


    

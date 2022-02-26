// Global Variables Here
let players = ["X","O","X","O","X","O","X","O","X"]
let gameBox = document.querySelector(".container");
let boxes = []
let tCount = 0;
let gameOver = false;
let gStatus = document.querySelector('#player');
gStatus.innerText = `It is ${players[0]}'s turn!`;

console.log(gameBox);
let uBoxes = () =>{
    boxes = [];                                             // neeed to empty array in order to not keep adding more than 9 boxes
    for(let i = 1; i < 10; i++){
        let box = document.querySelector("#box"+i);
        boxes.push(box.innerText);
        console.log(`${box.innerText} is in ${box.id}`);
    }       
}

////////////////////////////////
// Functions For Game Logic Here

let checkIfEmpty = (a,b,c) =>{

    console.log("CHECK EMTPY LOOP START")
    if(a.length >0 && b.length > 0, c.length > 0){
        //alert(`Bxs full ${a},${b},${c}`);
        return true;
    }else{
        //alert(`Bxs empty ${a},${b},${c}`);
        return false;
    }

}
let tieTest = (gArray) =>{// if any of the boxes are empty then the game isnt over
    for(let i = 0; i < gArray.length; i++){
        if(boxes[i] === ""){
            return false;
        }
    }
    return true;
} 

let winTest = () =>{  
    uBoxes();
    //Row win condition
    if (boxes[0] === boxes[1] && boxes[0] === boxes[2] ){
        if  (checkIfEmpty(boxes[0],boxes[1],boxes[2])){
            gStatus.innerText = `${boxes[0]} wins via top row`;
            gameOver = true;
        }
    }else if (boxes[3] === boxes[4] && boxes[3] === boxes[5] ){
        if  (checkIfEmpty(boxes[3],boxes[4],boxes[5])){
            gStatus.innerText = `${boxes[3]} wins via middle row`;
            gameOver = true;
        }
    }else if (boxes[6] === boxes[7] && boxes[6] === boxes[8] ){
        if  (checkIfEmpty(boxes[6],boxes[7],boxes[8])){
            gStatus.innerText = `${boxes[6]} wins via last row`;
            gameOver = true;
        }
    }

    //Column win condition

    else if (boxes[0] === boxes[3] && boxes[0] === boxes[6] ){
        if  (checkIfEmpty(boxes[0],boxes[3],boxes[6])){
            gStatus.innerText = `${boxes[0]} wins via left column`;
            gameOver = true;
        }
    }else if (boxes[1] === boxes[4] && boxes[1] === boxes[7] ){
        if  (checkIfEmpty(boxes[1],boxes[4],boxes[7])){
            gStatus.innerText = `${boxes[1]} wins via middle column`;
            gameOver = true;
        }
    }else if (boxes[2] === boxes[5] && boxes[2] === boxes[8] ){
        if  (checkIfEmpty(boxes[2],boxes[5],boxes[8])){
            gStatus.innerText = `${boxes[2]} wins via right column`;
            gameOver = true;
        }
    }
    //Cross win condition
    else if (boxes[0] === boxes[4] && boxes[0] === boxes[8] ){
        if  (checkIfEmpty(boxes[0],boxes[4],boxes[8])){
            gStatus.innerText = `${boxes[0]} wins via left top to right bottom!`;
            gameOver = true;
        }
    }else if (boxes[2] === boxes[4] && boxes[2] === boxes[6] ){
        if  (checkIfEmpty(boxes[2],boxes[4],boxes[6])){
            gStatus.innerText = `${boxes[2]} wins via left bottom to right top!`;
            gameOver = true;
        }
    }else if(!gameOver){ 
        ///////////TIE CONDITIONS
        if(tieTest(boxes)){
            gStatus.innerText = "ITS A TIE!";
        gameOver = true;
        }
    }else{
        console.log("Next turn");
    }
}


////////////////////////////////
// Event Listeners Here
document.addEventListener('click',(e) =>{
    if(e.target.classList[0] === "pSquare"){
        if(!gameOver){
            if(e.target.innerText.length < 1){
                e.target.innerText = players[tCount];
                tCount++;
                document.querySelector('#player').innerText = `It is ${players[tCount]}'s turn!`;

            }
            winTest();
            console.log(`you clicked ${e.target.id}`)
        }
    };
    if(e.target.id === 'reset'){
        alert(`Game Is Being reset`);
        for(let i = 0; i < gameBox.children.length; i++){
           gameBox.children[i].innerText = "";
        }
        gStatus.innerText = `It is ${players[0]}'s turn!`;
        tCount = 0;
        gameOver = false;
    }
})

////////////////////////////////
////////////////////////////////
///////////SOURCES//////////////
////////////////////////////////
////////////////////////////////

//https://gomakethings.com/why-event-delegation-is-a-better-way-to-listen-for-events-in-vanilla-js/ 
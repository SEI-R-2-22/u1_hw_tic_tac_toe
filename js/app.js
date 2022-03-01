// Global Variables Here

// Square Variables
const square_1_bu = document.getElementById("board").children[0];
const square_2_bu = document.getElementById("board").children[1];
const square_3_bu = document.getElementById("board").children[2];
const square_4_bu = document.getElementById("board").children[3];
const square_5_bu = document.getElementById("board").children[4];
const square_6_bu = document.getElementById("board").children[5];
const square_7_bu = document.getElementById("board").children[6];
const square_8_bu = document.getElementById("board").children[7];
const square_9_bu = document.getElementById("board").children[8];







const square_1 = document.getElementById("sq1");
const square_2 = document.getElementById("sq2");
const square_3 = document.getElementById("sq3");
const square_4 = document.getElementById("sq4");
const square_5 = document.getElementById("sq5");
const square_6 = document.getElementById("sq6");
const square_7 = document.getElementById("sq7");
const square_8 = document.getElementById("sq8");
const square_9 = document.getElementById("sq9");
const board = document.getElementById("board");
const reset_butt = document.getElementById("reset")

const sq1_text = square_1.children[0].innerHTML;
const sq3_text = square_3.children[0].innerHTML;
const sq2_text = square_2.children[0].innerHTML;
const sq4_text = square_4.children[0].innerHTML;
const sq5_text = square_5.children[0].innerHTML;
const sq6_text = square_6.children[0].innerHTML;
const sq7_text = square_7.children[0].innerHTML;
const sq8_text = square_8.children[0].innerHTML;
const sq9_text = square_9.children[0].innerHTML;
let draw_count = 0;


// Win Cons
// const win1 = [square_1.getAttribute("class"), square_2.getAttribute("class"), square_3.getAttribute("class")];
// const win2 = [square_4.getAttribute("class"), square_5.getAttribute("class"), square_6.getAttribute("class")];
// const win3 = [square_7.getAttribute("class"), square_8.getAttribute("class"), square_9.getAttribute("class")];
// const win4 = [square_1.getAttribute("class"), square_4.getAttribute("class"), square_7.getAttribute("class")];
// const win5 = [square_2.getAttribute("class"), square_5.getAttribute("class"), square_8.getAttribute("class")];
// const win6 = [square_3.getAttribute("class"), square_6.getAttribute("class"), square_9.getAttribute("class")];
// const win7 = [square_1.getAttribute("class"), square_5.getAttribute("class"), square_9.getAttribute("class")];
// const win8 = [square_3.getAttribute("class"), square_5.getAttribute("class"), square_7.getAttribute("class")];
// const winArray = [["sq1", "sq2", "sq3"], ["sq4", "sq5", "sq6"], ["sq7", "sq8", "sq9"], ["sq1", "sq4", "sq7"], ["sq2", "sq5", "sq8"], ["sq3", "sq6", "sq9"], ["sq1", "sq5", "sq9"], ["sq3", "sq5", "sq7"]];

let option = "x" || "o";
let ph = "ph";

row1= [ph];
row2 = [ph];
row3 = [ph];
column1 = [ph];
column2 = [ph];
column3 = [ph];
cross1 = [ph];
cross2 = [ph];






x = document.getElementById("score_num_x").innerHTML;
o = document.getElementById("score_num_o").innerHTML;
let xMark = document.getElementById("marker_x");
let markerX = xMark.getAttribute("class");
let oMark = document.getElementById("marker_o");
let markerO = oMark.getAttribute("class");

const boxArr = ["sq1", "sq2", "sq3", "sq4", "sq5", "sq6", "sq7", "sq8", "sq9"]

let playerX = false;

////////////////////////////////
// Functions For Game Logic Here

const resetCommon = () => {

    // square_1_bu.setAttribute("id", "sq1");
    // square_2_bu.setAttribute("id", "sq2");
    // square_3_bu.setAttribute("id", "sq3");
    // square_4_bu.setAttribute("id", "sq4");
    // square_5_bu.setAttribute("id", "sq5");
    // square_6_bu.setAttribute("id", "sq6");
    // square_7_bu.setAttribute("id", "sq7");
    // square_8_bu.setAttribute("id", "sq8");
    // square_9_bu.setAttribute("id", "sq9");
    document.getElementById("sq1").children[0].innerHTML = "";
    document.getElementById("sq2").children[0].innerHTML = "";
    document.getElementById("sq3").children[0].innerHTML = "";
    document.getElementById("sq4").children[0].innerHTML = "";
    document.getElementById("sq5").children[0].innerHTML = "";
    document.getElementById("sq6").children[0].innerHTML = "";
    document.getElementById("sq7").children[0].innerHTML = "";
    document.getElementById("sq8").children[0].innerHTML = "";
    document.getElementById("sq9").children[0].innerHTML = "";
    xMark.setAttribute("class", "color");
    oMark.setAttribute("class", "");
    playerX = false;
    row1= [ph];
    row2 = [ph];
    row3 = [ph];
    column1 = [ph];
    column2 = [ph];
    column3 = [ph];
    cross1 = [ph];
    cross2 = [ph];
    draw_count = 0;

}

const removeIds = () => {

    square_1.setAttribute("id", "");
    square_2.setAttribute("id", "");
    square_3.setAttribute("id", "");
    square_4.setAttribute("id", "");
    square_5.setAttribute("id", "");
    square_6.setAttribute("id", "");
    square_7.setAttribute("id", "");
    square_8.setAttribute("id", "");
    square_9.setAttribute("id", "");




}


const reset_button = () => {
    resetCommon();
    document.getElementById("score_num_x").innerHTML = "0";
    document.getElementById("score_num_o").innerHTML = "0";
    


}


const replayFunc = () => {
    
    resetCommon();
    
}

const drawFunc = () => {

if (draw_count === 9 && playerX === true) {

    let replay = confirm("Draw!\nReplay?");
    if (replay === true) {

        replayFunc();

    }else if (replay === false) {


    }
}


}

const winFunc = (winner) => {

    alert("The winner is " + winner + "!");
    playerX = true;
    switch (winner) {

        case "x":
            // removeIds();
            let score_update_x = document.getElementById("score_num_x").innerHTML;
            let score_int_x = parseInt(score_update_x) + 1;
            document.getElementById("score_num_x").innerHTML = score_int_x;
            replayFunc();
            

            // let replay_x = confirm("Replay?");
            // if (replay_x === true) {

            //     replayFunc();

            // }else if (replay_x === false) {

                

            // }

            break;
        case "o":

            let score_update_o = document.getElementById("score_num_o").innerHTML;
            let score_int_o = parseInt(score_update_o) + 1;
            document.getElementById("score_num_o").innerHTML = score_int_o;
            replayFunc();
            // let replay_o = confirm("Replay?");
            // if (replay_o === true) {

            //     replayFunc();

            // }else if (replay_o === false) {


            // }

            break;

        default:
            alert("error: winFunc");
            break;

    }
    
    


}


const checkWinnerO = () => {

   
    if (row1[0] === "o" && row1[1] === "o" && row1[2] === "o") {
        winFunc("o");
    }else if (row2[0] === "o" && row2[1] === "o" && row2[2] === "o") {
        winFunc("o");
    }else if (row3[0] === "o" && row3[1] === "o" && row3[2] === "o") {
        winFunc("o");
    }else if (column1[0] === "o" && column1[1] === "o" && column1[2] === "o") {
        winFunc("o");
    }else if (column2[0] === "o" && column2[1] === "o" && column2[2] === "o") {
        winFunc("o");
    }else if (column3[0] === "o" && column3[1] === "o" && column3[2] === "o") {
        winFunc("o");
    }else if (cross1[0] === "o" && cross1[1] === "o" && cross1[2] === "o") {
        winFunc("o");
    }else if (cross2[0] === "o" && cross2[1] === "o" && cross2[2] === "o") {
        winFunc("o");
    }



}



const checkWinnerX = () => {


   
    if (row1[0] === "x" && row1[1] === "x" && row1[2] === "x") {
        winFunc("x");
    }else if (row2[0] === "x" && row2[1] === "x" && row2[2] === "x") {
        winFunc("x");
    }else if (row3[0] === "x" && row3[1] === "x" && row3[2] === "x") {
        winFunc("x");
    }else if (column1[0] === "x" && column1[1] === "x" && column1[2] === "x") {
        winFunc("x");
    }else if (column2[0] === "x" && column2[1] === "x" && column2[2] === "x") {
        winFunc("x");
    }else if (column3[0] === "x" && column3[1] === "x" && column3[2] === "x") {
        winFunc("x");
    }else if (cross1[0] === "x" && cross1[1] === "x" && cross1[2] === "x") {
        winFunc("x");
    }else if (cross2[0] === "x" && cross2[1] === "x" && cross2[2] === "x") {
        winFunc("x");
    }



}




const checkUsed = (square_used) => {
   
    

    let sq_usage = square_used.children[0].innerHTML;
    
    
    switch(sq_usage.toLowerCase()) {

        case "x":
            
            return false;
            
        case "o":
            
            return false
            
        default:
            
            xMark.classList.toggle("color");
            oMark.classList.toggle("color");
            return true;

            

            // switch(markerX) {

            //     case "color":
            //         alert("x color")
            //         square_used.children[0].innerHTML = "X";
            //         xMark.classList.toggle("color");
            //         oMark.classList.toggle("color");
            //         square_used.setAttribute("class", "x_owned");
            //         break;


            //     default:
            //         square_used.children[0].innerHTML = "O";
            //         xMark.classList.toggle("color");
            //         oMark.classList.toggle("color");
            //         square_used.setAttribute("class", "o_owned");
            //         break;

            
                
            

        }




    }







////////////////////////////////
// Event Listeners Here





reset_butt.addEventListener("click", function() {

    reset_button();

})


square_1.addEventListener("click", function(){
    
    let used = checkUsed(square_1);
    if (used === true) { 
        
        if (playerX === false) {
            square_1.children[0].innerHTML = "X";
            playerX = !playerX;
            
            row1.unshift("x");
            column1.unshift("x");
            cross1.unshift("x");
            draw_count += 1
            
           
        }else if (playerX === true) {

            square_1.children[0].innerHTML = "O";
            playerX = !playerX;
            square_1.setAttribute("class", "o_owned");
            row1.unshift("o");
            column1.unshift("o");
            cross1.unshift("o");
            draw_count += 1

        }else {
            alert("error: sq1 : if2")
        }

    }else if (used === false) {

        
    }else {

        alert("error: sq1 : if1")
    }

    checkWinnerX();
    checkWinnerO();

})

square_2.addEventListener("click", function(){
    let used = checkUsed(square_2);
    if (used === true) { 
        
        if (playerX === false) {
            square_2.children[0].innerHTML = "X";
            playerX = !playerX;
            square_2.setAttribute("class", "x_owned");
            row1.unshift("x");
            column2.unshift("x");
            draw_count += 1
          
        }else if (playerX === true) {

            square_2.children[0].innerHTML = "O";
            playerX = !playerX;
            square_2.setAttribute("class", "o_owned");
            row1.unshift("o");
            column2.unshift("o");
            draw_count += 1
           

        }else {
            alert("error: sq1 : if2")
        }

    }else if (used === false) {

        
    }else {

        alert("error: sq1 : if1")
    }

    checkWinnerX();
    checkWinnerO();
    drawFunc();
    
})

square_3.addEventListener("click", function(){

    let used = checkUsed(square_3);
    if (used === true) { 
        
        if (playerX === false) {
            square_3.children[0].innerHTML = "X";
            playerX = !playerX;
            square_3.setAttribute("class", "x_owned");
            row1.unshift("x");
            column3.unshift("x");
            cross2.unshift("x");
            draw_count += 1
           
        }else if (playerX === true) {

            square_3.children[0].innerHTML = "O";
            playerX = !playerX;
            square_3.setAttribute("class", "o_owned");
            row1.unshift("o");
            column3.unshift("o");
            cross2.unshift("o");
            draw_count += 1
           
        }else {
            alert("error: sq1 : if2")
        }

    }else if (used === false) {

        
    }else {

        alert("error: sq1 : if1")
    }

    checkWinnerX();
    checkWinnerO();
    drawFunc();

    
})

square_4.addEventListener("click", function(){

    
    let used = checkUsed(square_4);
    if (used === true) { 
        
        if (playerX === false) {
            square_4.children[0].innerHTML = "X";
            playerX = !playerX;
            square_4.setAttribute("class", "x_owned");
            row2.unshift("x");
            column1.unshift("x");
            draw_count += 1
           
        }else if (playerX === true) {

            square_4.children[0].innerHTML = "O";
            playerX = !playerX;
            square_4.setAttribute("class", "o_owned");
            row2.unshift("o");
            column1.unshift("o");
            draw_count += 1
           

        }else {
            alert("error: sq1 : if2")
        }

    }else if (used === false) {

        
    }else {

        alert("error: sq1 : if1")
    }

    checkWinnerX();
    checkWinnerO();
    drawFunc();


    
})

square_5.addEventListener("click", function(){

    let used = checkUsed(square_5);
    if (used === true) { 
        
        if (playerX === false) {
            square_5.children[0].innerHTML = "X";
            playerX = !playerX;
            square_5.setAttribute("class", "x_owned");
            row2.unshift("x");
            column2.unshift("x");
            cross1.unshift("x");
            cross2.unshift("x");
            draw_count += 1
           

        }else if (playerX === true) {

            square_5.children[0].innerHTML = "O";
            playerX = !playerX;
            square_5.setAttribute("class", "o_owned");
            row2.unshift("o");
            column2.unshift("o");
            cross1.unshift("o");
            cross2.unshift("o");
            draw_count += 1
           
            

        }else {
            alert("error: sq1 : if2")
        }

    }else if (used === false) {

        
    }else {

        alert("error: sq1 : if1")
    }

    checkWinnerX();
    checkWinnerO();
    drawFunc();


    
})

square_6.addEventListener("click", function(){

    
    let used = checkUsed(square_6);
    if (used === true) { 
        
        if (playerX === false) {
            square_6.children[0].innerHTML = "X";
            playerX = !playerX;
            square_6.setAttribute("class", "x_owned");
            row2.unshift("x");
            column3.unshift("x");
            draw_count += 1
        }else if (playerX === true) {

        square_6.children[0].innerHTML = "O";
        playerX = !playerX;
        square_6.setAttribute("class", "o_owned");
        row2.unshift("o");
        column3.unshift("o");
        draw_count += 1

        }else {
            alert("error: sq1 : if2")
        }

    }else if (used === false) {

        
    }else {

        alert("error: sq1 : if1")
    }

    checkWinnerX();
    checkWinnerO();
    drawFunc();

    
})

square_7.addEventListener("click", function(){

    
    let used = checkUsed(square_7);
    if (used === true) { 
        
        if (playerX === false) {
            square_7.children[0].innerHTML = "X";
            playerX = !playerX;
            square_7.setAttribute("class", "x_owned");
            row3.unshift("x");
            column1.unshift("x");
            cross2.unshift("x");
            draw_count += 1
        }else if (playerX === true) {

        square_7.children[0].innerHTML = "O";
        playerX = !playerX;
        square_7.setAttribute("class", "o_owned");
        row3.unshift("o");
        column1.unshift("o");
        cross2.unshift("o");
        draw_count += 1
            

        }else {
            alert("error: sq1 : if2")
        }

    }else if (used === false) {

        
    }else {

        alert("error: sq1 : if1")
    }

    checkWinnerX();
    checkWinnerO();
    drawFunc();


    
})

square_8.addEventListener("click", function(){

    let used = checkUsed(square_8);
    if (used === true) { 
        
        if (playerX === false) {
            square_8.children[0].innerHTML = "X";
            playerX = !playerX;
            square_8.setAttribute("class", "x_owned");
            row3.unshift("x");
            column2.unshift("x");
            draw_count += 1
        }else if (playerX === true) {

            square_8.children[0].innerHTML = "O";
            playerX = !playerX;
            square_8.setAttribute("class", "o_owned");
            row3.unshift("o");
            column2.unshift("o");
            draw_count += 1

        }else {
            alert("error: sq1 : if2")
        }

    }else if (used === false) {

        
    }else {

        alert("error: sq1 : if1")
    }

    checkWinnerX();
    checkWinnerO();
    drawFunc();

    
})

square_9.addEventListener("click", function(){

    let used = checkUsed(square_9);
    if (used === true) { 
        
        if (playerX === false) {
            square_9.children[0].innerHTML = "X";
            playerX = !playerX;
            square_9.setAttribute("class", "x_owned");
            row3.unshift("x");
            column3.unshift("x");
            cross1.unshift("x");
            draw_count += 1
        }else if (playerX === true) {

            square_9.children[0].innerHTML = "O";
            playerX = !playerX;
            square_9.setAttribute("class", "o_owned");
            row3.unshift("o");
            column3.unshift("o");
            cross1.unshift("o");
            draw_count += 1

        }else {
            alert("error: sq1 : if2")
        }

    }else if (used === false) {

        
    }else {

        alert("error: sq1 : if1")
    }

    checkWinnerX();
    checkWinnerO();
    drawFunc();


    
})


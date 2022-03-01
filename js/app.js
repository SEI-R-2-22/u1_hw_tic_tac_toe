// Global Variables Here

let turn;
let moves = 0;
let isDraw = false;
let isTeamBlue = true;
let markedBox1 = false;
let markedBox2 = false;
let markedBox3 = false;
let markedBox4 = false;
let markedBox5 = false;
let markedBox6 = false;
let markedBox7 = false;
let markedBox8 = false;
let markedBox9 = false;
const btn = document.getElementById('btn')
const box1 = document.querySelector('.topLeft');
const box2 = document.querySelector('.midLeft');
const box3 = document.querySelector('.bottomLeft');
const box4 = document.querySelector('.top');
const box5 = document.querySelector('.mid');
const box6 = document.querySelector('.bottom');
const box7 = document.querySelector('.topRight');
const box8 = document.querySelector('.midRight');
const box9 = document.querySelector('.bottomRight');

////////////////////////////////
// Functions For Game Logic Here

function checkWinner() {

    let cir1 = document.getElementById('circle1').style.opacity;
    let cir2 = document.getElementById('circle2').style.opacity;
    let cir3 = document.getElementById('circle3').style.opacity;
    let cir4 = document.getElementById('circle4').style.opacity;
    let cir5 = document.getElementById('circle5').style.opacity;
    let cir6 = document.getElementById('circle6').style.opacity;
    let cir7 = document.getElementById('circle7').style.opacity;
    let cir8 = document.getElementById('circle8').style.opacity;
    let cir9 = document.getElementById('circle9').style.opacity;

    if ((cir1 === "1" && cir2 === "1" && cir3 === "1") ||
    (cir4 === "1" && cir5 === "1" && cir6 === "1") ||
    (cir7 === "1" && cir8 === "1" && cir9 === "1") ||
    (cir1 === "1" && cir4=== "1" && cir7 === "1") ||
    (cir2 === "1" && cir5 === "1" && cir8 === "1") ||
    (cir3 === "1" && cir6 === "1" && cir9 === "1") ||
    (cir1 === "1" && cir5 === "1" && cir9 === "1") ||
    (cir7 === "1" && cir5 === "1" && cir3 === "1"))
    {
        document.querySelector('#turn').innerHTML = "Blue Won!";
        document.getElementById('turn').style.color = 'blue';
        markAllBoxes();
        
    } else if ((mark1.style.backgroundColor === "red" && mark2.style.backgroundColor === "red" && mark3.style.backgroundColor === "red") ||
    (mark4.style.backgroundColor === "red" && mark5.style.backgroundColor === "red" && mark6.style.backgroundColor === "red") ||
    (mark7.style.backgroundColor === "red" && mark8.style.backgroundColor === "red" && mark9.style.backgroundColor === "red") ||
    (mark1.style.backgroundColor === "red" && mark4.style.backgroundColor === "red" && mark7.style.backgroundColor === "red") ||
    (mark2.style.backgroundColor === "red" && mark5.style.backgroundColor === "red" && mark8.style.backgroundColor === "red") ||
    (mark3.style.backgroundColor === "red" && mark6.style.backgroundColor === "red" && mark9.style.backgroundColor === "red") ||
    (mark1.style.backgroundColor === "red" && mark5.style.backgroundColor === "red" && mark9.style.backgroundColor === "red") ||
    (mark7.style.backgroundColor === "red" && mark5.style.backgroundColor === "red" && mark3.style.backgroundColor === "red"))
    {
        document.querySelector('#turn').innerHTML = "Red Won!";
        document.getElementById('turn').style.color = 'red';
        markAllBoxes();
    } else if (moves === 9){
        isDraw = true;
    }
}

function checkDraw () {
    if (moves === 9 && isDraw === true) {
        document.querySelector('#turn').innerHTML = "Draw!"
        document.getElementById('turn').style.color = 'white';
        moves = 0;
    }
}

function changeTeam () {
    if (isTeamBlue === true){
        isTeamBlue = false;
        document.querySelector('#turn').innerHTML = "Red's Turn!";
        document.getElementById('turn').style.color = 'red';
    } else {
        isTeamBlue = true;
        document.querySelector('#turn').innerHTML = "Blue's Turn!";
        document.getElementById('turn').style.color = 'blue';
    }
}

function markAllBoxes () {
    markedBox1 = true;
    markedBox2 = true;
    markedBox3 = true;
    markedBox4 = true;
    markedBox5 = true;
    markedBox6 = true;
    markedBox7 = true;
    markedBox8 = true;
    markedBox9 = true;
}

function resetGame () {
    circle1.style.opacity = "0%";
    circle2.style.opacity = "0%";
    circle3.style.opacity = "0%";
    circle4.style.opacity = "0%";
    circle5.style.opacity = "0%";
    circle6.style.opacity = "0%";
    circle7.style.opacity = "0%";
    circle8.style.opacity = "0%";
    circle9.style.opacity = "0%";
    mark1.style.backgroundColor = "black";
    mark2.style.backgroundColor = "black";
    mark3.style.backgroundColor = "black";
    mark4.style.backgroundColor = "black";
    mark5.style.backgroundColor = "black";
    mark6.style.backgroundColor = "black";
    mark7.style.backgroundColor = "black";
    mark8.style.backgroundColor = "black";
    mark9.style.backgroundColor = "black";
    markedBox1 = false;
    markedBox2 = false;
    markedBox3 = false;
    markedBox4 = false;
    markedBox5 = false;
    markedBox6 = false;
    markedBox7 = false;
    markedBox8 = false;
    markedBox9 = false;
    moves = 0;
    isDraw = false;
    changeTeam();
}

////////////////////////////////
// Event Listeners Here

btn.addEventListener('click', () => {
    alert("Game has been reset");
    resetGame();
});

box1.addEventListener('click', () => {
    if (markedBox1 === false) {
        if (isTeamBlue === true) {
            circle1.style.opacity = "100%";
            moves++;
            changeTeam();
        } else {
            mark1.style.backgroundColor = "red";
            moves++;
            changeTeam();
        }
    } else {
        return;
    }
    markedBox1 = true;
    checkWinner();
    checkDraw();
});

box2.addEventListener('click', () => {
    if (markedBox2 === false) {
        if (isTeamBlue === true) {
            circle2.style.opacity = "100%";
            moves++;
            changeTeam();
        } else {
            mark2.style.backgroundColor = "red";
            moves++;
            changeTeam();
        }
    } else {
        return;
    }
    markedBox2 = true;
    checkWinner();
    checkDraw();
});

box3.addEventListener('click', () => {
    if (markedBox3 === false) {
        if (isTeamBlue === true) {
            circle3.style.opacity = "100%";
            moves++;
            changeTeam();
        } else {
            mark3.style.backgroundColor = "red";
            moves++;
            changeTeam();
        }
    } else {
        return;
    }
    markedBox3 = true;
    checkWinner();
    checkDraw();
});

box4.addEventListener('click', () => {
    if (markedBox4 === false) {
        if (isTeamBlue === true) {
            circle4.style.opacity = "100%";
            moves++;
            changeTeam();
        } else {
            mark4.style.backgroundColor = "red";
            moves++;
            changeTeam();
        } 
    } else {
        return;
    }
    markedBox4 = true;
    checkWinner();
    checkDraw();
});

box5.addEventListener('click', () => {
    if (markedBox5 === false) {
        if (isTeamBlue === true) {
            circle5.style.opacity = "100%";
            moves++;
            changeTeam();
        } else {
            mark5.style.backgroundColor = "red";
            moves++;
            changeTeam();
        } 
    } else {
        return;
    }
    markedBox5 = true;
    checkWinner();
    checkDraw();
});

box6.addEventListener('click', () => {
    if (markedBox6 === false) {
        if (isTeamBlue === true) {
            circle6.style.opacity = "100%";
            moves++;
            changeTeam();
        } else {
            mark6.style.backgroundColor = "red";
            moves++;
            changeTeam();
        } 
    } else {
        return;
    }
    markedBox6 = true;
    checkWinner();
    checkDraw();
});

box7.addEventListener('click', () => {
    if (markedBox7 === false) {
        if (isTeamBlue === true) {
            circle7.style.opacity = "100%";
            moves++;
            changeTeam();
        } else {
            mark7.style.backgroundColor = "red";
            moves++;
            changeTeam();
        } 
    } else {
        return;
    }
    markedBox7 = true;
    checkWinner();
    checkDraw();
});

box8.addEventListener('click', (team) => {
    if (markedBox8 === false) {
        if (isTeamBlue === true) {
            circle8.style.opacity = "100%";
            moves++;
            changeTeam();
        } else {
            mark8.style.backgroundColor = "red";
            moves++;
            changeTeam();
        } 
    } else {
        return;
    }
    markedBox8 = true;
    checkWinner();
    checkDraw();
});

box9.addEventListener('click', (team) => {
    if (markedBox9 === false) {
        if (isTeamBlue === true) {
            circle9.style.opacity = "100%";
            moves++;
            changeTeam();
        } else {
            mark9.style.backgroundColor = "red";
            moves++;
            changeTeam();
        } 
    } else {
        return;
    }
    markedBox9 = true;
    checkWinner();
    checkDraw();
});


////////////////////////////////


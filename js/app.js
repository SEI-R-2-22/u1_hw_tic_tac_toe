// Global Variables Here
const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')
const grid = document.querySelectorAll('div.row')
const reset = document.getElementsByName ("Reset")



let score = 1

////////////////////////////////
// Functions For Game Logic Here

const box1 = () => {
    score += 1;

    if (score % 2 == 0) {
        one.innerText = "X"
        one.removeEventListener('click', box1)
        }
     else if (score % 2 == 1) {
        one.innerText = "O"
        one.removeEventListener('click', box1)
        } }

const box2 = () => {
    score += 1;

    if (score % 2 == 0) {
        two.innerText = "X"
        two.removeEventListener('click', box2)
        }
     else if (score % 2 == 1) {
        two.innerText = "O"
        two.removeEventListener('click', box2)
    }
}
const box3 = () => {
    score += 1;

    if (score % 2 == 0) {
        three.innerText = "X"
        three.removeEventListener('click', box3)
        }
     else if (score % 2 == 1) {
        three.innerText = "O"
        three.removeEventListener('click', box3)
    }
}
const box4 = () => {
    score += 1;

    if (score % 2 == 0) {
        four.innerText = "X"
        four.removeEventListener('click', box4)
        }
     else if (score % 2 == 1) {
        four.innerText = "O"
        four.removeEventListener('click', box4)
    }
}
const box5 = () => {
    score += 1;

    if (score % 2 == 0) {
        five.innerText = "X"
        five.removeEventListener('click', box5)
        }
     else if (score % 2 == 1) {
        five.innerText = "O"
        five.removeEventListener('click', box5)
    }
}
const box6 = () => {
    score += 1;

    if (score % 2 == 0) {
        six.innerText = "X"
        six.removeEventListener('click', box6)
        }
     else if (score % 2 == 1) {
        six.innerText = "O"
        six.removeEventListener('click', box6)
    }
}
const box7 = () => {
    score += 1;

    if (score % 2 == 0) {
        seven.innerText = "X"
        seven.removeEventListener('click', box7)
        }
     else if (score % 2 == 1) {
        seven.innerText = "O"
        seven.removeEventListener('click', box7)
    }
}
const box8 = () => {
    score += 1;

    if (score % 2 == 0) {
        eight.innerText = "X"
        eight.removeEventListener('click', box8)
        }
     else if (score % 2 == 1) {
        eight.innerText = "O"
        eight.removeEventListener('click', box8)
    }
}
const box9 = () => {
    score += 1;

    if (score % 2 == 0) {
        nine.innerText = "X"
        nine.removeEventListener('click', box9)
        }
     else if (score % 2 == 1) {
        nine.innerText = "O"
        nine.removeEventListener('click', box9)
    }
}

function gameReset() {
}

////////////////////////////////
// Event Listeners Here
one.addEventListener('click', box1)
two.addEventListener('click', box2)
three.addEventListener('click', box3)
four.addEventListener('click', box4)
five.addEventListener('click', box5)
six.addEventListener('click', box6)
seven.addEventListener('click', box7)
eight.addEventListener('click', box8)
nine.addEventListener('click', box9)
reset.addEventListener('click', gameReset)


////////////////////////////////



/*

White Board
    make 9 squares
    switch between X and O 
    3 in a row win
        if not game tied
        
Psuedocoding
    make 9 divs
    grid or flexbox
    css: div height = width
    Use modulus
        if (turn % 2 = 0) player 1
        if turn % 2 = 1 player 2
        add Event Listener to each div

rubber ducking
    9 divs
    centered
    x and o change up
    if statement/condtion winnner
*/

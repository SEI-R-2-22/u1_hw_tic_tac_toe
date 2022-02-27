// Global Variables Here
let sZer = document.querySelector('#sq0')
let sOne = document.querySelector('#sq1')
let sTwo = document.querySelector('#sq2')
let sThr = document.querySelector('#sq3')
let sFou = document.querySelector('#sq4')
let sFiv = document.querySelector('#sq5')
let sSix = document.querySelector('#sq6')
let sSev = document.querySelector('#sq7')
let sEig = document.querySelector('#sq8')






////////////////////////////////
// Functions For Game Logic Here
playerChoice = () => {
    let boxs = document.querySelector('.sqr')
    switch(boxes){
        case sZer:
            sZer.style.color = 'blue'
    }
}


////////////////////////////////
// Event Listeners Here
const sayHello =() => {
    alert("Button Clicked")
}

const btnBoard = document.getElementsByClassName('btn')

for (let i = 0; i < 8; i++) {
    btnBoard[i].addEventListener('click', sayHello)
}



////////////////////////////////

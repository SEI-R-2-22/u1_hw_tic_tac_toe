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
const btn = document.getElementById("btn")
const result = document.querySelector('#playerTurn')
const turn = document.getElementsByName('playerTurn')

const squares = [one, two, three, four, five, six, seven, eight, nine];

let score = 1

////////////////////////////////
// Functions For Game Logic Here

const test = () => {
    if (document.getElementById('one').innerText === "X" && document.getElementById('two').innerText === 'X' && document.getElementById('three').innerText === 'X') { //Row 1
        alert('Player X has one! Click the reset button to play again') 
        } else if (document.getElementById('four').innerText === 'X' && document.getElementById('five').innerText === 'X' && document.getElementById('six').innerText === 'X') { //Row 2
            alert('Player X has one! Click the reset button to play again')
        } else if (document.getElementById('seven').innerText === "X" && document.getElementById('eight').innerText === 'X' && document.getElementById('nine').innerText === 'X') { //Row 3
            alert('Player X has one! Click the reset button to play again')
        } else if (document.getElementById('one').innerText === "X" && document.getElementById('four').innerText === 'X' && document.getElementById('seven').innerText === "X") { //Column 1
            alert('Player X has one! Click the reset button to play again')
        } else if (document.getElementById('two').innerText === 'X' && document.getElementById('five').innerText === 'X' && document.getElementById('eight').innerText === 'X') { //Column 2
            alert('Player X has one! Click the reset button to play again')
        } else if (document.getElementById('three').innerText === 'X' && document.getElementById('six').innerText === 'X' && document.getElementById('nine').innerText === 'X') { //Column 3
            alert('Player X has one! Click the reset button to play again')
        } else if (document.getElementById('one').innerText === "X" && document.getElementById('five').innerText === 'X' && document.getElementById('nine').innerText === 'X') { //Diagonal Right 
            alert('Player X has one! Click the reset button to play again')
        } else if (document.getElementById('three').innerText === 'X' && document.getElementById('five').innerText === 'X' && document.getElementById('seven').innerText === "X") {//Diagonal Left
            alert('Player X has one! Click the reset button to play again')
        } else if (document.getElementById('one').innerText === "O" && document.getElementById('two').innerText === "O" && document.getElementById('three').innerText === "O") { //Row 1
            alert('Player O has one! Click the reset button to play again') 
            } else if (document.getElementById('four').innerText === "O" && document.getElementById('five').innerText === "O" && document.getElementById('six').innerText === "O") { //Row 2
                alert('Player O has one! Click the reset button to play again')
            } else if (document.getElementById('seven').innerText === "O" && document.getElementById('eight').innerText === "O" && document.getElementById('nine').innerText === "O") { //Row 3
                alert('Player O has one! Click the reset button to play again')
            } else if (document.getElementById('one').innerText === "O" && document.getElementById('four').innerText === "O" && document.getElementById('seven').innerText === "O") { //Column 1
                alert('Player O has one! Click the reset button to play again')
            } else if (document.getElementById('two').innerText === "O" && document.getElementById('five').innerText === "O" && document.getElementById('eight').innerText === "O") { //Column 2
                alert('Player O has one! Click the reset button to play again')
            } else if (document.getElementById('three').innerText === "O" && document.getElementById('six').innerText === "O" && document.getElementById('nine').innerText === "O") { //Column 3
                alert('Player O has one! Click the reset button to play again')
            } else if (document.getElementById('one').innerText === "O" && document.getElementById('five').innerText === "O" && document.getElementById('nine').innerText === "O") { //Diagonal Right 
                alert('Player O has one! Click the reset button to play again')
            } else if (document.getElementById('three').innerText === "O" && document.getElementById('five').innerText === "O" && document.getElementById('seven').innerText === "O") {//Diagonal Left
                alert('Player O has one! Click the reset button to play again')
            } 
}



const box1 = () => {
    score += 1;

    if (score % 2 == 0) {
        one.innerText = "X"
        one.removeEventListener('click', box1)
        result.innerText = 'Player X chose top left. Player O you are now up'
        }
     else if (score % 2 == 1) {
        one.innerText = "O"
        one.removeEventListener('click', box1)
        result.innerText = 'Player O chose top left. Player X you are now up'
        }
        test () 
    }

const box2 = () => {
    score += 1;

    if (score % 2 == 0) {
        two.innerText = "X"
        two.removeEventListener('click', box2)
        result.innerText = 'Player X chose top middle. Player O you are now up'
        }
     else if (score % 2 == 1) {
        two.innerText = "O"
        two.removeEventListener('click', box2)
        result.innerText = 'Player O chose top middle. Player X you are now up'
    }
    test ()
}
const box3 = () => {
    score += 1;

    if (score % 2 == 0) {
        three.innerText = "X"
        three.removeEventListener('click', box3)
        result.innerText = 'Player X chose top right. Player O you are now up'
        }
     else if (score % 2 == 1) {
        three.innerText = "O"
        three.removeEventListener('click', box3)
        result.innerText = 'Player O chose top right. Player X you are now up'
    }
    test ()
}
const box4 = () => {
    score += 1;

    if (score % 2 == 0) {
        four.innerText = "X"
        four.removeEventListener('click', box4)
        result.innerText = 'Player X chose middle left. Player O you are now up'
        }
     else if (score % 2 == 1) {
        four.innerText = "O"
        four.removeEventListener('click', box4)
        result.innerText = 'Player O chose middle left. Player X you are now up'
    }
    test ()
}
const box5 = () => {
    score += 1;

    if (score % 2 == 0) {
        five.innerText = "X"
        five.removeEventListener('click', box5)
        result.innerText = 'Player X chose the middle. Player O you are now up'
        }
     else if (score % 2 == 1) {
        five.innerText = "O"
        five.removeEventListener('click', box5)
        result.innerText = 'Player O chose the middle. Player X you are now up'
    }
    test ()
}
const box6 = () => {
    score += 1;

    if (score % 2 == 0) {
        six.innerText = "X"
        six.removeEventListener('click', box6)
        result.innerText = 'Player X chose the middle right. Player O you are now up'
        }
     else if (score % 2 == 1) {
        six.innerText = "O"
        six.removeEventListener('click', box6)
        result.innerText = 'Player O chose the middle right. Player X you are now up'
    }
    test ()
}
const box7 = () => {
    score += 1;

    if (score % 2 == 0) {
        seven.innerText = "X"
        seven.removeEventListener('click', box7)
        result.innerText = 'Player X chose the bottom left. Player O you are now up'
        }
     else if (score % 2 == 1) {
        seven.innerText = "O"
        seven.removeEventListener('click', box7)
        result.innerText = 'Player O chose the bottom left. Player X you are now up'
    }
    test ()
}
const box8 = () => {
    score += 1;

    if (score % 2 == 0) {
        eight.innerText = "X"
        eight.removeEventListener('click', box8)
        result.innerText = 'Player X chose the bottom middle. Player O you are now up'
        }
     else if (score % 2 == 1) {
        eight.innerText = "O"
        eight.removeEventListener('click', box8)
        result.innerText = 'Player O chose the bottom middle. Player X you are now up'
    }
    test ()
}
const box9 = () => {
    score += 1;

    if (score % 2 == 0) {
        nine.innerText = "X"
        nine.removeEventListener('click', box9)
        result.innerText = 'Player X chose the bottom right. Player O you are now up'
        }
     else if (score % 2 == 1) {
        nine.innerText = "O"
        nine.removeEventListener('click', box9)
        result.innerText = 'Player O chose the bottom right. Player X you are now up'
    }
    test ()
}

const restart = () => {
    location.reload()
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
btn.addEventListener('click', restart)


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

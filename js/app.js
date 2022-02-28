// Global Variables Here
const button0 = document.querySelector('#B0')
const button1 = document.querySelector('#B1')
const button2 = document.querySelector('#B2')
const button3 = document.querySelector('#B3')
const button4 = document.querySelector('#B4')
const button5 = document.querySelector('#B5')
const button6 = document.querySelector('#B6')
const button7 = document.querySelector('#B7')
const button8 = document.querySelector('#B8')

const buttonsAll = document.querySelectorAll('.button')
//document.querySelectorAll('.button').innerText is undefined

const choices = ['X', 'O']

////////////////////////////////
// Functions For Game Logic Here

const buttonAllDisable = () => {
  for (let i = 0; i < buttonsAll.length; i++) {
    buttonsAll[i].disabled = true
  }
}

let winOTopRowResult = false
const winOTopRow = () => {
  if (
    buttonsAll[0].innerText === 'O' &&
    buttonsAll[1].innerText === 'O' &&
    buttonsAll[2].innerText === 'O'
  ) {
    winOTopRowResult = true
    alert('O wins')
    buttonAllDisable()
  }
  //console.log(winOTopRowResult)
}

let winXTopRowResult = false
const winXTopRow = () => {
  if (
    buttonsAll[0].innerText == 'X' &&
    buttonsAll[1].innerText == 'X' &&
    buttonsAll[2].innerText == 'X'
  ) {
    winXTopRowResult = true
    alert('X wins')
    buttonAllDisable()
  }
  console.log(winXTopRowResult)
}

let winOMidRowResult = false
const winOMidRow = () => {
  if (
    buttonsAll[3].innerText == 'O' &&
    buttonsAll[4].innerText == 'O' &&
    buttonsAll[5].innerText == 'O'
  ) {
    winOMidRowResult = true
    alert('O wins')
    buttonAllDisable()
  }
}

let winXMidRowResult = false
const winXMidRow = () => {
  if (
    buttonsAll[3].innerText === 'X' &&
    buttonsAll[4].innerText === 'X' &&
    buttonsAll[5].innerText === 'X'
  ) {
    winXMidRowResult = true
    alert('X wins')
    buttonAllDisable()
  }
}

let winOBotRowResult = false
const winOBotRow = () => {
  if (
    buttonsAll[6].innerText == 'O' &&
    buttonsAll[7].innerText == 'O' &&
    buttonsAll[8].innerText == 'O'
  ) {
    winOBotRowResult = true
    alert('O wins')
    buttonAllDisable()
  }
}

let winXBotRowResult = false
const winXBotRow = () => {
  if (
    buttonsAll[6].innerText == 'X' &&
    buttonsAll[7].innerText == 'X' &&
    buttonsAll[8].innerText == 'X'
  ) {
    winXBotRowResult = true
    alert('X wins')
    buttonAllDisable()
  }
}

let winOCol1Result = false
const winOCol1 = () => {
  if (
    buttonsAll[0].innerText == 'O' &&
    buttonsAll[3].innerText == 'O' &&
    buttonsAll[6].innerText == 'O'
  ) {
    winOCol1Result = true
    alert('O wins')
    buttonAllDisable()
  }
}

let winXCol1Result = false
const winXCol1 = () => {
  if (
    buttonsAll[0].innerText == 'X' &&
    buttonsAll[3].innerText == 'X' &&
    buttonsAll[6].innerText == 'X'
  ) {
    winXCol1Result = true
    alert('X wins')
    buttonAllDisable()
  }
}

let winOCol2Result = false
const winOCol2 = () => {
  if (
    buttonsAll[1].innerText == 'O' &&
    buttonsAll[4].innerText == 'O' &&
    buttonsAll[7].innerText == 'O'
  ) {
    winOCol2Result = true
    alert('O wins')
    buttonAllDisable()
  }
}

let winXCol2Result = false
const winXCol2 = () => {
  if (
    buttonsAll[1].innerText == 'X' &&
    buttonsAll[4].innerText == 'X' &&
    buttonsAll[7].innerText == 'X'
  ) {
    winXCol2Result = true
    alert('X wins')
    buttonAllDisable()
  }
}

let winOCol3Result = false
const winOCol3 = () => {
  if (
    buttonsAll[2].innerText == 'O' &&
    buttonsAll[5].innerText == 'O' &&
    buttonsAll[8].innerText == 'O'
  ) {
    winOCol3Result = true
    alert('O wins')
    buttonAllDisable()
  }
}

let winXCol3Result = false
const winXCol3 = () => {
  if (
    buttonsAll[2].innerText == 'X' &&
    buttonsAll[5].innerText == 'X' &&
    buttonsAll[8].innerText == 'X'
  ) {
    winXCol3Result = true
    alert('X wins')
    buttonAllDisable()
  }
}

let winOCrossTLBRResult = false
const winOCrossTLBR = () => {
  if (
    buttonsAll[0].innerText == 'O' &&
    buttonsAll[4].innerText == 'O' &&
    buttonsAll[8].innerText == 'O'
  ) {
    winOCrossTLBRResult = true
    alert('O wins')
    buttonAllDisable()
  }
}

let winXCrossTLBRResult = false
const winXCrossTLBR = () => {
  if (
    buttonsAll[0].innerText == 'X' &&
    buttonsAll[4].innerText == 'X' &&
    buttonsAll[8].innerText == 'X'
  ) {
    winXCrossTLBRResult = true
    alert('X wins')
    buttonAllDisable()
  }
}

let winOCrossBLTRResult = false
const winOCrossBLTR = () => {
  if (
    buttonsAll[6].innerText == 'O' &&
    buttonsAll[4].innerText == 'O' &&
    buttonsAll[2].innerText == 'O'
  ) {
    winOCrossBLTRResult = true
    alert('O wins')
    buttonAllDisable()
  }
}

let winXCrossBLTRResult = false
const winXCrossBLTR = () => {
  if (
    buttonsAll[6].innerText == 'X' &&
    buttonsAll[4].innerText == 'X' &&
    buttonsAll[2].innerText == 'X'
  ) {
    winXCrossBLTRResult = true
    alert('X wins')
    buttonAllDisable()
  }
}
// const conditionTie = () => {
//   let tieResult = true
//   for (let i = 0; i < buttonsAll.length; i++) {
//     if (buttonsAll[i].innerText == 'X' || buttonsAll[i].innerText == 'O') {
//       //|| buttonsAll[i].innerText == 'O' --> holder for the O
//       tieResult = false
//       //confirm("It's a tie. Play again?")
//     }
//   }
//   if (tieResult == false) {
//     for (let i = 0; i < buttonsAll.length; i++) {
//       buttonsAll[i].disabled = true
//     }
//   }
//   console.log(tieResult)
// }
//Other Tie conditions ideas, check if all buttons are disabled, then trigger tie alert/play again.

////////////////////////////////
// Event Listeners Here

button0.addEventListener('click', () => {
  if (button0.innerText == 'X') {
    button0.innerText = 'O'
    if (
      confirm('This player chose O, confirm yes, or reclick to choose X') ===
      true
    ) {
      button0.disabled = true
      alert('The next player will choose for X')
    }
  } else {
    button0.innerText = 'X'
    if (
      confirm('This player chose X, confirm yes, or reclick to choose X') ===
      true
    ) {
      button0.disabled = true
      alert('The next player will choose for O')
    }
  }
  winOTopRow()
  winXTopRow()
  winOCol1()
  winXCol1()
  winOCrossTLBR()
  winXCrossTLBR()
})

button1.addEventListener('click', () => {
  if (button1.innerText == 'X') {
    button1.innerText = 'O'
    if (
      confirm('This player chose O, confirm yes, or reclick to choose X') ===
      true
    ) {
      button1.disabled = true
      alert('The next player will choose for X')
    }
  } else {
    button1.innerText = 'X'
    if (
      confirm('This player chose X, confirm yes, or reclick to choose X') ===
      true
    ) {
      button1.disabled = true
      alert('The next player will choose for O')
    }
  }
  winOTopRow()
  winXTopRow()
  winOCol2()
  winXCol2()
})

button2.addEventListener('click', () => {
  if (button2.innerText == 'X') {
    button2.innerText = 'O'
    if (
      confirm('This player chose O, confirm yes, or reclick to choose X') ===
      true
    ) {
      button2.disabled = true
      alert('The next player will choose for X')
    }
  } else {
    button2.innerText = 'X'
    if (
      confirm('This player chose X, confirm yes, or reclick to choose X') ===
      true
    ) {
      button2.disabled = true
      alert('The next player will choose for O')
    }
  }
  winOTopRow()
  winXTopRow()
  winOCol3()
  winXCol3()
  winOCrossBLTR()
  winXCrossBLTR()
})

button3.addEventListener('click', () => {
  if (button3.innerText == 'X') {
    button3.innerText = 'O'
  } else {
    button3.innerText = 'X'
  }
})

button4.addEventListener('click', () => {
  if (button4.innerText == 'X') {
    button4.innerText = 'O'
  } else {
    button4.innerText = 'X'
  }
})

button5.addEventListener('click', () => {
  if (button5.innerText == 'X') {
    button5.innerText = 'O'
  } else {
    button5.innerText = 'X'
  }
})

button6.addEventListener('click', () => {
  if (button6.innerText == 'X') {
    button6.innerText = 'O'
  } else {
    button6.innerText = 'X'
  }
})

button7.addEventListener('click', () => {
  if (button7.innerText == 'X') {
    button7.innerText = 'O'
  } else {
    button7.innerText = 'X'
  }
})

button8.addEventListener('click', () => {
  if (button8.innerText == 'X') {
    button8.innerText = 'O'
  } else {
    button8.innerText = 'X'
  }
})

////////////////////////////////

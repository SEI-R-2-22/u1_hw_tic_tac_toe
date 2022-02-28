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
let turnCount = 9
let winCountO = 0
let winCountX = 0
let tieCount = 0
const winCountTotalO = document.querySelector('#oWins')
const winCountTotalX = document.querySelector('#xWins')
const tieCountTotal = document.querySelector('#tieCount')
////////////////////////////////
// Functions For Game Logic Here

const updateOWins = () => {
  winCountO = winCountO + 1
  winCountTotalO.innerText = winCountO
}

const updateXWins = () => {
  winCountX = winCountX + 1
  winCountTotalX.innerText = winCountX
}

const updateTieCount = () => {
  tieCount = tieCount + 1
  tieCountTotal.innerText = tieCount
}

const replay = () => {
  if (confirm('Play again?') === true) {
    for (let i = 0; i < buttonsAll.length; i++) {
      buttonsAll[i].innerText = ''
      buttonsAll[i].disabled = false
      turnCount = 9
      console.log(buttonsAll[i].innerText)
    }
  }
}
//replay()

const turnCountdown = () => {
  turnCount = turnCount - 1
  console.log(turnCount)
}

const tieCheck = () => {
  if (
    winOTopRowResult === false &&
    winXTopRowResult === false &&
    winOMidRowResult === false &&
    winXMidRowResult === false &&
    winOBotRowResult === false &&
    winXBotRowResult === false &&
    winOCol1Result === false &&
    winXCol1Result === false &&
    winOCol2Result === false &&
    winXCol2Result === false &&
    winOCol3Result === false &&
    winXCol3Result === false &&
    winOCrossBLTRResult === false &&
    winXCrossBLTRResult === false &&
    winOCrossTLBRResult === false &&
    winXCrossTLBRResult === false &&
    turnCount === 0
  ) {
    alert('Tie')
    updateTieCount()
    replay()
  }
}

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
    updateOWins()
    alert('O wins')
    buttonAllDisable()
    replay()
  }
}

let winXTopRowResult = false
const winXTopRow = () => {
  if (
    buttonsAll[0].innerText == 'X' &&
    buttonsAll[1].innerText == 'X' &&
    buttonsAll[2].innerText == 'X'
  ) {
    winXTopRowResult = true
    updateXWins()
    alert('X wins')
    buttonAllDisable()
    replay()
  }
}

let winOMidRowResult = false
const winOMidRow = () => {
  if (
    buttonsAll[3].innerText == 'O' &&
    buttonsAll[4].innerText == 'O' &&
    buttonsAll[5].innerText == 'O'
  ) {
    winOMidRowResult = true
    updateOWins()
    alert('O wins')
    buttonAllDisable()
    replay()
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
    updateXWins()
    alert('X wins')
    buttonAllDisable()
    replay()
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
    updateOWins()
    alert('O wins')
    buttonAllDisable()
    replay()
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
    updateXWins()
    alert('X wins')
    buttonAllDisable()
    replay()
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
    updateOWins()
    alert('O wins')
    buttonAllDisable()
    replay()
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
    updateXWins()
    alert('X wins')
    buttonAllDisable()
    replay()
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
    updateOWins()
    alert('O wins')
    buttonAllDisable()
    replay()
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
    updateXWins()
    alert('X wins')
    buttonAllDisable()
    replay()
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
    updateOWins()
    alert('O wins')
    buttonAllDisable()
    replay()
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
    updateXWins()
    alert('X wins')
    buttonAllDisable()
    replay()
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
    updateOWins()
    alert('O wins')
    buttonAllDisable()
    replay()
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
    updateXWins()
    alert('X wins')
    buttonAllDisable()
    replay()
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
    updateOWins()
    alert('O wins')
    buttonAllDisable()
    replay()
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
    updateXWins()
    alert('X wins')
    buttonAllDisable()
    replay()
  }
}

////////////////////////////////
// Event Listeners Here

button0.addEventListener('click', () => {
  if (button0.innerText == 'x') {
    button0.innerText = 'o'
    if (
      confirm('This player chose O, confirm yes, or reclick to choose X') ===
      true
    ) {
      button0.innerText = 'O'
      turnCountdown()
      button0.disabled = true
      alert('The next player will choose for X')
    }
  } else {
    button0.innerText = 'x'
    if (
      confirm('This player chose X, confirm yes, or reclick to choose O') ===
      true
    ) {
      button0.innerText = 'X'
      turnCountdown()
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
  tieCheck()
})

button1.addEventListener('click', () => {
  if (button1.innerText == 'x') {
    button1.innerText = 'o'
    if (
      confirm(
        'This player chose O, confirm yes, or cancel then reclick to choose X'
      ) === true
    ) {
      button1.innerText = 'O'
      turnCountdown()
      button1.disabled = true
      alert('The next player will choose for X')
    }
  } else {
    button1.innerText = 'x'
    if (
      confirm(
        'This player chose X, confirm yes, or cancl then reclick to choose O'
      ) === true
    ) {
      button1.innerText = 'X'
      turnCountdown()
      button1.disabled = true
      alert('The next player will choose for O')
    }
  }
  winOTopRow()
  winXTopRow()
  winOCol2()
  winXCol2()
  tieCheck()
})

button2.addEventListener('click', () => {
  if (button2.innerText == 'x') {
    button2.innerText = 'o'
    if (
      confirm(
        'This player chose O, confirm yes, or cancel then reclick to choose X'
      ) === true
    ) {
      button2.innerText = 'O'
      turnCountdown()
      button2.disabled = true
      alert('The next player will choose for X')
    }
  } else {
    button2.innerText = 'x'
    if (
      confirm(
        'This player chose X, confirm yes, or cancel then reclick to choose O'
      ) === true
    ) {
      button2.innerText = 'X'
      turnCountdown()
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
  tieCheck()
})

button3.addEventListener('click', () => {
  if (button3.innerText == 'x') {
    button3.innerText = 'o'
    if (
      confirm(
        'This player chose O, confirm yes, or cancel then reclick to choose X'
      ) === true
    ) {
      button3.innerText = 'O'
      turnCountdown()
      button3.disabled = true
      alert('The next player will choose for X')
    }
  } else {
    button3.innerText = 'x'
    if (
      confirm(
        'This player chose X, confirm yes, or cancel then reclick to choose O'
      ) === true
    ) {
      button3.innerText = 'X'
      turnCountdown()
      button3.disabled = true
      alert('The next player will choose for O')
    }
  }
  winOCol1()
  winXCol1()
  winOMidRow()
  winXMidRow()
  tieCheck()
})

button4.addEventListener('click', () => {
  if (button4.innerText == 'x') {
    button4.innerText = 'o'
    if (
      confirm(
        'This player chose O, confirm yes, or cancel then reclick to choose X'
      ) === true
    ) {
      button4.innerText = 'O'
      turnCountdown()
      button4.disabled = true
      alert('The next player will choose for X')
    }
  } else {
    button4.innerText = 'x'
    if (
      confirm(
        'This player chose X, confirm yes, or cancel then reclick to choose O'
      ) === true
    ) {
      button4.innerText = 'X'
      turnCountdown()
      button4.disabled = true
      alert('The next player will choose for O')
    }
  }
  winOMidRow()
  winXMidRow()
  winOCol2()
  winXCol2()
  winOCrossTLBR()
  winXCrossTLBR()
  winOCrossBLTR()
  winXCrossBLTR()
  tieCheck()
})

button5.addEventListener('click', () => {
  if (button5.innerText == 'x') {
    button5.innerText = 'o'
    if (
      confirm(
        'This player chose O, confirm yes, or cancel then reclick to choose X'
      ) === true
    ) {
      button5.innerText = 'O'
      turnCountdown()
      button5.disabled = true
      alert('The next player will choose for X')
    }
  } else {
    button5.innerText = 'x'
    if (
      confirm(
        'This player chose X, confirm yes, or cancel then reclick to choose O'
      ) === true
    ) {
      button5.innerText = 'X'
      turnCountdown()
      button5.disabled = true
      alert('The next player will choose for O')
    }
  }
  winOCol3()
  winXCol3()
  winOMidRow()
  winXMidRow()
  tieCheck()
})

button6.addEventListener('click', () => {
  if (button6.innerText == 'x') {
    button6.innerText = 'o'
    if (
      confirm(
        'This player chose O, confirm yes, or cancel then reclick to choose X'
      ) === true
    ) {
      button6.innerText = 'O'
      turnCountdown()
      button6.disabled = true
      alert('The next player will choose for X')
    }
  } else {
    button6.innerText = 'x'
    if (
      confirm(
        'This player chose X, confirm yes, or cancel then reclick to choose O'
      ) === true
    ) {
      button6.innerText = 'X'
      turnCountdown()
      button6.disabled = true
      alert('The next player will choose for O')
    }
  }
  winOBotRow()
  winXBotRow()
  winOCol1()
  winXCol1()
  winOCrossBLTR()
  winXCrossBLTR()
  tieCheck()
})

button7.addEventListener('click', () => {
  if (button7.innerText == 'x') {
    button7.innerText = 'o'
    if (
      confirm(
        'This player chose O, confirm yes, or cancel then reclick to choose X'
      ) === true
    ) {
      button7.innerText = 'O'
      turnCountdown()
      button7.disabled = true
      alert('The next player will choose for X')
    }
  } else {
    button7.innerText = 'x'
    if (
      confirm(
        'This player chose X, confirm yes, or cancel then reclick to choose O'
      ) === true
    ) {
      button7.innerText = 'X'
      turnCountdown()
      button7.disabled = true
      alert('The next player will choose for O')
    }
  }
  winOBotRow()
  winXBotRow()
  winOCol2()
  winXCol2()
  tieCheck()
})

button8.addEventListener('click', () => {
  if (button8.innerText == 'x') {
    button8.innerText = 'o'
    if (
      confirm(
        'This player chose O, confirm yes, or cancel then reclick to choose X'
      ) === true
    ) {
      button8.innerText = 'O'
      turnCountdown()
      button8.disabled = true
      alert('The next player will choose for X')
    }
  } else {
    button8.innerText = 'x'
    if (
      confirm(
        'This player chose X, confirm yes, or cancel then reclick to choose O'
      ) === true
    ) {
      button8.innerText = 'X'
      turnCountdown()
      button8.disabled = true
      alert('The next player will choose for O')
    }
  }
  winOBotRow()
  winXBotRow()
  winOCol3()
  winXCol3()
  winOCrossTLBR()
  winXCrossTLBR()
  tieCheck()
})
////////////////////////////////

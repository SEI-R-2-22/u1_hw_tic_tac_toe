// Global Variables Here
let xoro = 'x'
const allGrid = document.querySelectorAll('.grid')
const squares = document.querySelectorAll('.box')
playerOne = 'x'
playerTwo = 'o'
/// prints x or o to the screeen when box
const squareClick = (index) => {
  squares[index].innerHTML = xoro
  if (xoro === "x") {
    xoro = "o" 
  } else if ( xoro === 'o') {
    xoro = "x"
  }}


/// gives click property to items in grid
squares.forEach((square, idx)=> {
  square.addEventListener('click', ()=> {
    squareClick(idx)
  })
})

// displays whos turn it is on the screen
let whosTurn = (xoro + "'s turn")
const addText = () => {

  if (xoro === "x") {
    document.firstElementChild.append("X's Turn")
  } else if ( xoro === 'o') {
    document.firstElementChild.append("O's Turn")
  }
  document.firstElementChild.append(whosTurn)
}
squares.forEach((square, idx)=> {
  square.addEventListener('click', addText)
    
  })
///
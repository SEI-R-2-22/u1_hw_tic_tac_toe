const square = document.querySelectorAll('.square')
console.log(square)

square.forEach( s =>
  s.addEventListener('click', () => {
    console.log('click')
  })
)


sq.forEach ( s => 
  s.addEventListener('click', () => {
    let location = s.getAttribute('id');
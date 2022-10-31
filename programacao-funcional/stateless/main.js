let number = 2;

//stetefull
function square(){
  return number * number
}

number = square()

//stateless
const square = n => n * n
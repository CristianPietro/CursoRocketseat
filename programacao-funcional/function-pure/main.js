// function pure

//exemplo 1: está dependendo de dado externo
// que não foi passado como parametro
function calculateCircumference(radius) {
  return Math.PI * (radius + radius)
}

// exemplo 2: esta alterando um dado externo
let person = {
  name: 'Rafael Camarada',
  age: 'jovem'
}
function changeName(name){
  person.name = name
}

//Função pura

//Exemplo 1
const calculateCircumference = function (pi, radius){
  return pi * (radius + radius)
}

// com arrow function
const calculateCircumference = (pi, radius) =>
pi * (radius + radius)

//exemplo 2

const changePersonName = (person, name) =>
({ ...person, name })
// function expression

//Parameters
const sum = function (number1, number2) {
  return number1 + number2
}

console.log(sum(2, 3)) // arguments


//Função é um liquidificador

function fazerSuco(fruta1, fruta2){
  return fruta1 + fruta2
}

const copo = fazerSuco('banana ', 'maçã')

console.log(copo)

// Function Scope

let object = 'create video'

function createThink(object) {
  object = 'study'
  return object
}

console.log(createThink(object))
console.log(object)

//Callback function

function sayMyName(name) {
  console.log('Antes de executar a função callback');
  name()
  console.log('depois de executar a callback')
}

sayMyName(
  () => {
    console.log('Estou em uma callback')
  }
)

/*

  Function() constructors
  * expressão new
  * criar um novo objeto
  * this keyword
  
*/

function Person(name){
  this.name = name
  this.walk = function () {
    return this.name + " andando"
  }
}

const pietro = new Person('Pietro')
const cristian = new Person('Cristian')
console.log(pietro.walk())
console.log(cristian.walk())
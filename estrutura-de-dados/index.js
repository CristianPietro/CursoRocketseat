const pilotos = ['Senna', 'prost', 'schumacher', 'hamilton']

// A Indexação (index) começa pelo 0
console.log(pilotos[0]) //Sena

// Acessa o tamaho da array
console.log(pilotos.length) // 4

// Interável
for(let piloto of pilotos){
  console.log(piloto)
}

// Adcionar elemento
pilotos.push('Alonso')
console.log(pilotos)

// Encontrar um piloto
const senna = pilotos.find(piloto => piloto === 'Senna')
console.log(senna)

// Deletqar elemento
pilotos.splice(1, 1)
console.log(pilotos)


/***
 * Matriz
 */

const students = [
  ['José', 35, 'MG'],
  ['Mariana', 25, 'SP'],
  ['Priscila', 21, 'RS']
]

console.log(students[1][0])

/**
 *  Stack do código
 */

//Passo 1 : Modelando

class Stack {
  constructor(){
    this.data = []
    this.top = -1
  }

  push(value){
  this.top++
  this.data[this.top] = value
  return this.data
  }

  pop(){
    if (this.top < 0) return undefined
    const poppedTop = this.data[this.top]
    delete this.data[this.top]
    this.top--
    return poppedTop
  }

  peek(){
    return this.top >= 0 ? this.data[this.top] : undefined
  }

}

// Passo 2 : Ultilizando

const stack = new Stack()

// adcionar dados
stack.push('learning')
stack.push('data')
console.log(stack.push('structures'))

console.log(stack.peek())

//Remover

stack.pop()
console.log(stack.pop())

console.log(stack.peek())

/**
 *  Queue
 */


// passo 1: Modelagem

class Queue{
  constructor(){
    this.deta = []
  }

  enqueue(item){
    this.deta.push(item)
    console.log(`${item} chegou na fila`)
  }

  dequeue(){
    const item = this.deta.shift()
    console.log(`${item} saiu da fila`)
  }


}

// passo 2: Ultilizando

const fila = new Queue()

fila.enqueue('Mariana')
fila.enqueue('Joao')
fila.enqueue('Ariel')
fila.dequeue()
fila.dequeue()
fila.dequeue()        
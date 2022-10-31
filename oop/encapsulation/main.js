/*
Estrutural
*/


let altura1 = 50
let largura1 = 60

function calcularArea1(){
  return altura1 * largura1
}

let area1 = calcularArea1()

/*
Orientada a objetos
*/

class poligono { //classe

  constructor(altura, largura) {
  this.altura = altura    //THIS é referente ao objeto que vai ser criado
  this.largura = largura
  }

  get area() {
    return this.#calcularArea()
  }
 // Hashtag não permite que seja visualizado fora da classe
  #calcularArea() {
    return this.altura * this.largura
  }

}

/**
 * Criar o objeto
 */

let poligono = new poligono(50, 60)
 
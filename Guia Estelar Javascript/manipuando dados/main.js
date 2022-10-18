

//console.log("Pietro".__proto__)

//

/*

// Type coersion

console.log('10' + 5)

//Type conversion

console.log(Number('10') + 5)


// Transformar string em número e número em string

console.log(Number("10"))
console.log(String(10))


// contar quantos caracteres tem uma palavra e quantos dígitos tem um número

let word = "Paralelepipedo"
console.log(word.length)

let number = 1234
console.log(String(number).length)


// Transformar um número quebrado com 2 casas decimais e trocaar ponto por virgua

let number = 851.156581;
console.log(number.toFixed(2).replace(".", ","))


// Verificar se o texto contém a palavra amor

let phrase = "eu quero viver o amor"
console.log(phrase.includes("casa"))
console.log(phrase.includes("amor"))


// Criar array com construtor

let myArray = ["a", "b", "c"]
console.log(myArray)

let myArray2 = new Array('a', 'b', 'c')
console.log(myArray2)
*/

// Manipulando Arrays
let techs = ["html", "css", "js"]
// Adcionar um item no fim
techs.push("node.js")
//adcionar no começo
techs.unshift("react.js")
//remover do fim
techs.pop()
//remover do inicio
techs.shift()
//Pegar somente alguns elementos da array
console.log(techs.slice(2, 3))
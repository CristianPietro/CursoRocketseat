/***
 * 
 Promisse
 *
 * A promessa de que algo ira acontecer
 * podera dar certo ou errado 
 * mas irá acontecer
 */

 let aceitar = false;

console.log('pedir uber');

const promessa = new Promise((resolve, reject) =>{

  if(aceitar){
     return resolve('Pedido aceito')
  }
      return reject('pedido negado')
})

console.log('aguardando')

promessa
.then(result => console.log(result))
.catch(erro => console.log(erro))
.finally(() => console.log('finalizada'))
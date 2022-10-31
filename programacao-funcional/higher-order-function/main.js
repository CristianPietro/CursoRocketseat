// Exemplo com .map() JS

const number = [2, 4, 8 , 16]

const square= n => n * n

const squareNumber = numbers.map(square)

//Exemplo de uum retorno de função
//(currying ou aplicação parcial da função)

const pause = wait => fn => setTimeout(fn, wait)

pause(600) ( () => console.log('waiting 600'))

const wait200 = pause(200)
const wait1000 = pause(1000)

wait200(() => console.log('waiting 200ms'))
wait1000(() => console.log('Waiting 1s'))


const question = [
  "O que eu aprendi hoje?",
  "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
  "O que me deixou feliz hoje?",
  "Quantas pessoas ajudei hoje?"
]

const ask = (index = 0) => {
process.stdout.write('\n\n' + question[index] + ' > ')
}

ask()

const answer = []
//enquanto não tiver dados vai ficar ouindo
//quando entrar dados vai rodar uma função
process.stdin.on("data",  data =>{
  answer.push( data.toString().trim())
  if(answer.length < question.length){
    ask(answer.length)
  }else{
    process.exit() // processo finalizado
  }
} )

process.on("exit", () =>{
console.log(`

  Massa Cristian Pietro!

  O que tu aprendeu hoje foi:
  ${answer[0]}

  O que te aborreceu e tu poderia melhorar é:
  ${answer[1]}

  O que te deixou feliz foi:
  ${answer[2]}

  Você ajudou ${answer[3]} pessoas hoje!!!

  Volte amanhã para novas reflexões

`)
})

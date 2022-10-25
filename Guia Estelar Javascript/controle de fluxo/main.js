//If and else

let temperature = 40
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37.5
if (highTemperature) {
  console.log("Está com febre alta")
} else if (mediumTemperature) {
  console.log("Está com febre")
} else {
  console.log("Não está com febre")
}

// Switch

function calculate(number1, operator, number2) {
  let result
  switch (operator) {
    case "+":
      result = number1 + number2
      break
    case "-":
      result = number1 - number2
      break
    case "*":
      result = number1 * number2
      break
    case "/":
      result = number1 - number2
      break
    default:
      console.log("Não implementado")
      break
  }
  return result
}
console.log(calculate(10, "+", 10))

// Throw
function sayMyName(name = "") {
  if (name === "") {
    throw "Nome é obrigatório"
  }
  console.log(name)
}
// Try... Catch
try {
  sayMyName("Pietro")
} catch (e) {
  console.log(e)
}

// For

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break
  }
  console.log(i + 1)
}

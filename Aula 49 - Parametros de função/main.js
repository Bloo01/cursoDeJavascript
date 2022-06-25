// Argumentos que sustentam todos os argumentos enviados

function funcao() {
  console.log(arguments[0])
}

funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

// exemplo 2

function funcao1() {
  let total = 0
  for (let argumento of arguments) {
    total += argumento
  }
  console.log(total)
}

funcao1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

// exemplo 3

function funcao3(a, b = 2, c = 4) {
  console.log(a + b + c)
}

funcao3(2, undefined, 20)

// exemplo 4

function conta(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === '+') acumulador += numero
    if (operador === '-') acumulador -= numero
    if (operador === '/') acumulador /= numero
    if (operador === '*') acumulador *= numero
  }
  console.log(acumulador)
}

conta('+', 0, 20, 30, 40, 50)

// Utilizando argumentos em Arrow function

const teste = (...args) => {
  console.log(args)
}
teste('+', 1, 20, 30, 40, 50)

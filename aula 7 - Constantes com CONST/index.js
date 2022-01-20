// NÃO PODEMOS CRIAR CONSTANTES COM PALAVRAS RESERVADAS
// CONSTANTES PRECISAM TER NOMES SIGNIFICATIVOS
// NÃO PODE COMEÇAR O NOME DE UMA CONSTANTE COM NÚMERO
// NÃO PODEM CONTER ESPAÇOS OU TRAÇOS.
// UTILIZAMOS camelCase
// Case-sensitive
// NÃO PODE MODIFICAR O VALOR DE UMA CONSTANTE
// Não podemos redeclarar CONSTANTES com let
// NÃO UTILIZE VAR, UTILIZE CONST.

const nome = 'joão'
console.log(nome)

const primeiroNumero = 5
const segundoNumero = 10
const resultado = primeiroNumero * segundoNumero
const resultadoDuplicado = resultado * 2

console.log(resultado)
console.log(resultadoDuplicado)

let resultadoTriplicado = resultado * 3
resultadoTriplicado = resultadoTriplicado + 5
console.log(resultadoTriplicado)

console.log(typeof (primeiroNumero + segundoNumero))

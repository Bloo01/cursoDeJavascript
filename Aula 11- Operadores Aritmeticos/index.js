/*
 * Aritméticos
 * + Adição / Concatenação
 * -  / * (** potenciação)
 * % Resto da divisão
 */
const num1 = 5
const num2 = 10
const num3 = 5
console.log(num1 + num2 * 5)

// INCREMENTO = ++ E DECREMENTO = --

let contador = 1 // Não pode ser constante, pois o valor está sempre sendo alterado
contador++ // 2
contador++ // 3
contador++ // 4
contador++ // 5
console.log(contador)

let contador = 1
console.log(++contador) // Mostra o valor 2 direto, pois foi efetuado o cálculo primeiro.
console.log(contador++) // Mostra o valor 1 (foi somado depois)
console.log(contador) // Mostra o valor 2 pois foi somado no log anteiror

let contador = 10
console.log(--contador) // Mostra o valor 9 direto, pois foi efetuado o cálculo primeiro.

// Operadores de Atribuição

let contador = 2
contador *= 2
contador *= 2
contador *= 2
console.log(contador) // Resultado = 8

// NaN - Not A Number
const num1 = 10
const num2 = '5'
console.log(num1 + num2) // Resultado = concatenar -> 105

// ParseInt (inteiro) ParseFloat (decimais)

const num1 = 10
const num2 = parseInt('5.2')
console.log(num1 + num2) // Resultado = 15 -> ParseInt passou para INTEIRO e para number. ParseFLOAT contaria o ,2 e contaria number.

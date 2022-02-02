/* 
Primitivos ( imuntáveis ) - String, number, boolean, undefined, null (bigint, symbol) - Valor
*/

/* let a = 'A'
let b = a // Cópia
console.log(a, b)

a = 'Outra coisa'
console.log(a, b)
*/

// Referência (mutável) - Array, Object, Function //

let a = [1, 2, 3]
let b = a
console.log(a, b)

a.push(4)
console.log(a, b)

// Comando: b = [...a]  mantem o valor inicial. SPREAD.

let num1 = 10.5785545263 // number
let num2 = 2.5 // number

console.log(num1.toString() + num2) // apenas ''vira uma String'' ao ser mostrado no Log.
// num1 = num1.toString()       Viraria realmente uma String.
// console.log(num1.toString(2));     Viraria  11, juntando o valor duas vezes.
console.log(typeof num1)
console.log(num1.toFixed(2)) // arredonda o valor usando apenas duas casas decimais
console.log(Number.isInteger(num1)) // retorna boolean se é um número inteiro ou não
console.log(Number.isNaN(num1)) // retorna se o número é "não é um número"
______________________________________________________________________________________
let num1 = 0.7
let num2 = 0.1

num1 += num2 // 0.8
num1 += num2 // 0.9
num1 += num2 // 1.0

num1 = (num1 * 100 + num2 * 100) / 100 // 0.8
num1 = (num1 * 100 + num2 * 100) / 100 // 0.9
num1 = (num1 * 100 + num2 * 100) / 100 // 1.0
console.log(Number.isInteger(num1)) // será inteiro.

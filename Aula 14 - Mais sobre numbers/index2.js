let num1 = 9.54578
let num2 = Math.floor(num1) // Arredonda o valor para baixo.
let num3 = Math.ceil(num1) // Arredonda o valor para cima.
let num4 = Math.round(num1) // Arredonda se o valor for metade ou mais para cima, menos da metade, para baixo
console.log(num2)
console.log(num3)
console.log(num4)

console.log(Math.max(1, 2, 3, 4, -10, -50, 1500, 9, 8, 7, 6)) //Vai achar o maior número da sequencia.
console.log(Math.min(1, 2, 3, 4, -10, -50, 1500, 9, 8, 7, 6)) //Vai achar o menor número da sequencia.
console.log(Math.random()) // Acha um número aleatório entre 0 e 1

const aleatorio = Math.round(Math.random() * (10 - 5) + 5) // Acha um número aleatório entre  5 e 10 (Math round faz arredondar)
console.log(aleatorio)

let num6 = 9
console.log(num6 ** 0.5)

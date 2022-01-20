//               01234567
let umaString = 'Um "texto"'

console.log(umaString)

let umaString1 = 'Um \\texto' //Dessa forma, aparecerá a barra invertida sem problema.

console.log(umaString1)

let umaString2 = 'Um texto'

console.log(umaString2[4]) //Caso seja colocado um número fora do range = UNDEFINED - .CharAt -> faz a mesma coisa

let umaString3 = 'Um texto'
console.log(umaString3.concat(' em um lindo dia.'))
console.log(umaString3 + ' em um lindo dia.')
console.log(`${umaString3} em um lindo dia.`)

console.log(umaString.indexOf('texto')) //Acha em qual indice começa a palavra

console.log(umaString2.replace('Um', 'Outro')) //Substitui a palavra Um por Outro - Para substituir todas as letras iguais usar flag G.

console.log(umaString2.length) // Mostra a quantidade de caractere da String

let umaString4 = 'O rato roeu a roupa do rei de roma.'
console.log(umaString4.slice(-5, -1)) // Acha do final para o começo com o "-" - fatia.
console.log(umaString4.split('r')) //remove os 'R's da String
console.log(umaString4.toUpperCase()) //Transforma em Letra Maiúscula
console.log(umaString4.toLowerCase()) //Transforma em Letra Minúscula

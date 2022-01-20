const nome = 'Luiz Otavio'
const sobrenome = 'Miranda'
const idade = 30
const peso = 84
const alturaEmM = 1.8

let indiceMassaCorporal = peso / (alturaEmM * alturaEmM)
let anoDeNascimento = 2023 - idade

console.log(indiceMassaCorporal)
console.log(anoDeNascimento)

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg`)
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`)
console.log(`${nome} nasceu em, ${anoDeNascimento}.`)

// For in -> Lê os indices ou chaves do objeto.

const frutas = ['Pera', 'Maça', 'Uva']

/* for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i])
}
*/

/* for (let i in frutas) {
  console.log(i)
}
*/

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio',
  idade: 30
}

for (let chave in pessoa) {
  console.log(chave, pessoa[chave])
}

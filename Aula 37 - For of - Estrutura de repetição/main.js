// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o Indice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, array ou strings)

const nomes = ['Luiz', 'Otávio', 'Henrique']

for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i])
}

console.log('####')

for (let i in nomes) {
  console.log(nomes[i])
}

console.log('####')

for (let valor of nomes) {
  console.log(valor)
}

// apenas para conhecimento.

nomes.forEach(function (valor, indice, array) {
  console.log(valor, indice, array)
})

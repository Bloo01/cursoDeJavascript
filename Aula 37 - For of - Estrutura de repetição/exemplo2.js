// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o Indice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, array ou strings)

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio'
}

for (let key in pessoa) {
  console.log(key, pessoa[key])
}

for (let valor of pessoa) {
  // O objeto pessoa não é um iterável
}

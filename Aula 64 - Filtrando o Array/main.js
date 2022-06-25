// Filter -> sempre retorna um array com a mesma quantidade de elementos ou menos

//Retorne os números maiores que 10

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numerosFiltrados = numeros.filter(valor => valor > 50)
//console.log(numerosFiltrados)

const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Walace', idade: 47 }
]

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5)
console.log(pessoasComNomeGrande)

const pessoasComMaisDe50 = pessoas.filter(obj => obj.idade > 50)
console.log(pessoasComMaisDe50)

const nomeTerminaComA = pessoas.filter(obj =>
  obj.nome.toLowerCase().endsWith('a')
)
console.log(nomeTerminaComA)

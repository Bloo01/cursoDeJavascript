// Object.values
// Object.entries
// Object.getOwnPropertDescriptor
// ...(spread)

const produto = { nome: 'produto', preco: 1.8 }
const caneca = { ...produto, material: 'porcelana' }

caneca.nome = 'Outro nome'
caneca.preco = 2.5

console.log(produto)
console.log(caneca)

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))

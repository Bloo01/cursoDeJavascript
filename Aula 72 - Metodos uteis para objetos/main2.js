// Object.values
// Object.entries
// Object.getOwnPropertDescriptor
// Object.assign(des, any)
// ...(spread)

const produto = { nome: 'produto', preco: 1.8, material: 'porcelana' }

for (let [chave, valor] of Object.entries(produto)) {
  console.log(chave, valor)
}

// defineProperty - defineProperties

function Produto(nome, preco, estoque) {
  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    value: estoque, // valor da chave
    writable: false, // pode alterar
    configurable: true // configurável
  })

  Object.defineProperties(this, {
    nome: {
      enumerable: true,
      value: nome,
      writable: false,
      configurable: true
    },

    preço: {
      enumerable: true,
      value: preco,
      writable: false,
      configurable: true
    }
  })
}

const p1 = new Produto('Camiseta', 20, 3)
/* p1.estoque = 50000 // não funcionará caso o writable esteja "false" */

console.log(p1)

for (let chave in p1) {
  console.log(chave)
}

function Produto(nome, preco, estoque) {
  ;(this.nome = nome), (this.preco = preco)

  let estoquePrivado = estoque

  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    configurable: true, // configurável
    get: function () {
      return estoquePrivado
    },
    set: function (valor) {
      if (typeof valor !== 'number') {
        throw TypeError('Mensagem')
      }
      estoquePrivado = valor
    }
  })
}

function criaProduto() {
  return {
    get nome() {
      return nome
    },
    set nome(valor) {
      valor = valor.replace('coisa.', '')
      nome = valor
    }
  }
}

const p1 = new Produto('Camiseta', 20, 3)
// console.log(p1)
p1.estoque = 5000
console.log(p1.estoque)

const p2 = criaProduto('Camisa')
p2.nome = 'Qualquer coisa.'
console.log(p2.nome)

// Factory function (função fábrica)
// Constructor function (função construtora)

function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,
    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`
    },

    // Setter

    set nomeCompleto(valor) {
      valor = valor.split(' ')
      this.nome = valor.shift()
      this.sobrenome = valor.join(' ')
    },

    fala: function (assunto = 'Falando sobre nada') {
      return `${this.nome} está ${assunto}.`
    },

    altura: a,
    peso: p,
    // Getter
    get imc() {
      const indice = this.peso / this.altura ** 2
      return indice.toFixed(2)
    }
  }
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.72, 60)
const p2 = criaPessoa('Joao', 'Otávio', 1.7, 80)
const p3 = criaPessoa('Pedro', 'Otávio', 1.5, 110)

console.log(p3)

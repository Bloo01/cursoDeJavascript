// Construtora -> molde (classe)

function Pessoa(nome, sobrenome) {
  ;(this.nome = nome), (this.sobrenome = sobrenome)
  //(this.nomeCompleto = () => this.nome + ' ' + this.sobrenome)
}

Pessoa.prototype.nomeCompleto = function () {
  return this.nome + ' ' + this.sobrenome
}

// Instancia

const pessoa1 = new Pessoa('Luiz', 'O') // <- Pessoa = função construtora
const pessoa2 = new Pessoa('Maria', 'A')
const data = new Date() // <- Date = função construtora

console.log(pessoa1)
console.log(data)

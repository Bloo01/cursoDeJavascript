// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
  // Atributos ou métodos privados
  const ID = 123456
  const metodoInterno = function () {}

  // Atributos ou métodos públicos
  this.nome = nome
  this.sobrenome = sobrenome

  this.metodo = function () {
    console.log(this.nome + ': sou um metodo')
  }
}

const p1 = new Pessoa('Luiz', 'Otavio')
const p2 = new Pessoa('Maria', 'Oliveira')
p2.metodo()

console.log(p1.nome)

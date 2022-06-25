// Factory functions / Constructor function / Classes

/*
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`
    }
  }
}

const p1 = criaPessoa('Luiz', 'Otavio')

console.log(p1.nomeCompleto)
                                                */

function Pessoa(nome, sobrenome) {
  this.nome = nome
  this.sobrenome = sobrenome

  // Object.freeze(this)
}

// New cria um objeto vazio {} <- this -> this
const p1 = new Pessoa('Luiz', 'Miranda')
p1.nome = 'Qualquer coisa' // Não seria alterado caso o Object estivesse com o Freeze no "this".
const p2 = new Pessoa('Maria', 'Miranda')

console.log(p1)
console.log(p2)

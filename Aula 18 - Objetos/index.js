const pessoa10 = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 25
}

console.log(pessoa10.nome)

// ----------------- FACTORY ----------- //
function criaPessoa(nome, sobrenome, idade) {
  return {
    nome,
    sobrenome,
    idade
  }
}

const pessoa1 = criaPessoa('Luiz', 'Otavio', 25)
const pessoa2 = criaPessoa('João', 'Oliveira', 21)
const pessoa3 = criaPessoa('Junior', 'Moreira', 42)
const pessoa4 = criaPessoa('Maria', 'Uchiha', 15)
const pessoa5 = criaPessoa('Jean', 'Uzumaki', 10)

console.log(pessoa1.nome, pessoa2.nome)

// ------------------------ PARTE 2 ------------------ //

const pessoaN = {
  nome: 'Thresh',
  sobrenome: 'Chains',
  idade: 111,

  fala() {
    console.log(`A minha idade atual é ${this.idade}.`)
  },

  incrementaIdade() {
    this.idade++
  }
}

pessoaN.fala()
pessoaN.incrementaIdade()
pessoaN.fala()

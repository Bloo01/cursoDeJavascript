// IIFE - Imediately invoked function expression

;(function (idade, peso, altura) {
  function criaNome(nome) {
    const sobrenome = 'Miranda'
    return nome + ' ' + sobrenome
  }

  function falaNome() {
    console.log(criaNome('Luiz'))
  }

  falaNome()
  console.log(idade, peso, altura)
})(30, 60, 1.72)

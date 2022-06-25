// return
// retorna um valor
// termina a função

function soma(a, b) {
  return a + b
}

console.log(soma(10, 50))

/*   exemplo 2 */

function criaPessoa(nome, sobrenome) {
  return { nome, sobrenome }
}

const p1 = criaPessoa('Luiz', 'Otavio')
const p2 = {
  nome: 'João',
  sobrenome: 'Oliveira'
}

console.log(typeof p1)
console.log(typeof p2)

/* exemplo 3 */

function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + '' + resto
  }
  return falaResto
}

const fala = falaFrase('Olá')
const resto = fala('mundo!')
console.log(resto)

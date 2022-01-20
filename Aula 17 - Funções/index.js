function saudacao(nome) {
  return `Bom dia ${nome}!`
}

const variavel = saudacao('Luiz')
console.log(variavel)

function soma(x, y) {
  const resultado = x + y
  return resultado // Return tem que ser o ultimo na função, nada abaixo é executado
}

console.log(soma(2, 2))
console.log(soma(3, 1))
console.log(soma(10, 5))

// console.log(resultado) = IS NOT DEFINED - porque está tentando acessar dentro do escopo da FUNCTION

// Outra forma de executar a function
const raiz = function (n) {
  return n ** 0.5
}
console.log(raiz(9))
console.log(raiz(16))

const raiz = n => n ** 0.5 // A mesma coisa mas funcionando com ARROW FUNCTION

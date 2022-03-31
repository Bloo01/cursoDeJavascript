const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
  endereço: {
    rua: 'Av. Brasil',
    numero: 320
  }
}

// Atribuição via desestruturação
const {
  endereço: { rua: r = 123, numero }, // Caso não haja o valor na procura de 'r' o valor encontrado é 123
  endereço
} = pessoa // Caso não haja um nome '', ficará em branco e não undefined.
console.log(r, numero, endereço)

const { nome, ...resto } = pessoa
console.log(nome, resto)

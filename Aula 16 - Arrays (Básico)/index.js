//                0        1       2
const alunos = ['Luiz', 'Maria', 'João'] // Otavio, Fabio

alunos.push('Otávio') // Push adiciona NO FIM
alunos.push('Fabio') // Push adiciona NO FIM

//                      (0, -2) menos dois do Final
console.log(alunos.slice(0, 4)) //O último não é contado no slice (fatiar)
// delete alunos [1]   <- DELETA O INDÍCE, FAZENDO ELE APARECER VAZIO NO OUTPUT <empty slot>, fazendo virar um Undefined

//                     shift - remove do começo
// const removido = alunos.pop() // Remove o último
// console.log(removido) // mostra o removido

// alunos.unshift('Luiza') // UNSHIFT ADICIONA NO COMEÇO
// alunos.unshift('Cleber') // UNSHIFT ADICIONA NO COMEÇO

// alunos[alunos.length] = 'Luiza'   Adiciona NO FIM
// alunos[alunos.length] = 'Fábio'
// alunos[alunos.length] = 'Luana'

// alunos[0] = 'Eduardo'
// alunos[3] = 'Luiza' // Não há indíce [3], porém quando não existe, é criado.
// console.log(alunos)

console.log(alunos) // Acharia o Luiz, porém foi alterado o valor de [0] acima, transformando o 0 em Eduardo.
console.log(alunos[0])
console.log(alunos[2])
console.log(alunos.length) // Achar o tamanho do Array
console.log(typeof alunos) // Acha um OBJETO. Array = Objeto.
console.log(alunos instanceof Array) // Retorna verdadeiro, pois é um array.

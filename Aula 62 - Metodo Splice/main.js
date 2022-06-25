//                -5     -4           -3       -2        -1
//                0       1           2         3        4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia']
// nomes.splice(indice, delete, elem1, elem2, elem3)
const removidos = nomes.splice(3, 2, 'Luiz', 'Otavio')
console.log(nomes, removidos)

// pop
// const removidos = nomes.splice(-1, 1)
// shift
// const removidos = nomes.splice(0, 1)
// push
// const nomes.splice(nomes.length, 0, 'Luiz')
// unshift
// const removidos = nomes.splice(0, 0, 'Luiz')

// (condição) ? 'valor para verdadeiro' : 'valor para falso'
const pontuaçãoUsuario = 500
const nivelUsuario = pontuaçãoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal'

const corUsuario = 'Pink'
const corPadrao = corUsuario || 'Preta'

console.log(nivelUsuario, corPadrao)

//if (pontuaçãoUsuario >= 1000) {
//  console.log('Usuario VIP')
//} else {
//  console.log('Usuario normal')
//}

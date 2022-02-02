/* 
Operadores lógicos
&& -> AND -> E   Todas as expressões precisam ser verdadeiras para retornar TRUE
|| -> OR -> OU   Se um for verdade, irá retornar TRUE. Se todos forem falsos, retornará FALSE
! -> NOT -> NÃO  Nega (inverte) uma expressão
*/

const expressaoAnd = true && false && true && true
const expressaoOr = false || true || false || false
console.log(expressaoAnd)
console.log(expressaoOr)

//----------------------------- //
const usuario = 'Luiz' // form que o usuario digitou
const senha = '123456' // form que o usuario digitou

const vaiLogar = usuario === 'Luiz' && senha === '123456'
console.log(vaiLogar)

//----------------------------- //
console.log(!true)

/* && -> false && true  -> false  "o valor mesmo"
|| -> true || false => vai retornar "o valor verdadeiro"

*/

function falaOi() {
  return 'Oi'
}
const vaiExecutar = false

console.log(vaiExecutar && falaOi())

console.log(0 || false || null || 'Luiz Otavio' || true)

const corUsuario = '' //se tiver alguma cor aqui, será essa, do contrário, o "preto"
const corPadrão = corUsuario || 'preto'
console.log(corPadrão)

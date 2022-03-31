// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
//const tresHoras = 60 * 60 * 3 * 1000 // mil porque é milisegundos
//const umDia = 60 * 60 * 24 * 1000 //um dia em milésimos de segundos
//const data = new Date(0 + tresHoras + umDia) // 01/01/1970 Timestamp unix ou época unix
//const data = new Date(2019, 3, 20) //meses no JS começam no 0 -  a, m, d, h, M, s, ms

/*const data = new Date('2019-04-20 20:15:59.100')
console.log('Dia', data.getDate())
console.log('Mês', data.getMonth() + 1) // Mês começa do zero
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Min', data.getMinutes())
console.log('Seg', data.getSeconds())
console.log('Ms', data.getMilliseconds())
console.log('Semana', data.getDay()) // 0 - Domingo, 6 - Sabado
console.log(data.toString())*/

// console.log(Date.now())
function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`
}

function formataData(data) {
  const dia = zeroAEsquerda(data.getDate())
  const mes = zeroAEsquerda(data.getMonth() + 1)
  const ano = zeroAEsquerda(data.getFullYear())
  const hora = zeroAEsquerda(data.getHours())
  const min = zeroAEsquerda(data.getMinutes())
  const sec = zeroAEsquerda(data.getSeconds())

  return `${dia} / ${mes} / ${ano} / ${hora}:${min}:${sec}`
}

const data = new Date()
const dataBrasil = formataData(data)
console.log(dataBrasil)

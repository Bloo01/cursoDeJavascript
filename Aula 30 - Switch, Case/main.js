/*const h1 = document.querySelector('.container h1')
const data = new Date('2019-10-07 22:52:00')
h1.innerHTML = data.toString()

function getDiaSemanaTexto(diaSemana) {
  let diaSemanaTexto

  switch (diaSemana) {
    case 0:
      diaSemanaTexto = 'domingo'
      return diaSemanaTexto

    case 1:
      diaSemanaTexto = 'segunda-feira'
      return diaSemanaTexto

    case 2:
      diaSemanaTexto = 'terça-feira'
      return diaSemanaTexto

    case 3:
      diaSemanaTexto = 'quarta-feira'
      return diaSemanaTexto

    case 4:
      diaSemanaTexto = 'quinta-feira'
      return diaSemanaTexto

    case 5:
      diaSemanaTexto = 'sexta-feira'
      return diaSemanaTexto

    case 6:
      diaSemanaTexto = 'sábado'
      return diaSemanaTexto

    default:
      diaSemanaTexto = ''
      return diaSemanaTexto
  }
}

function getNomeMes(numeroMes) {
  let diaSemanaTexto

  switch (numeroMes) {
    case 0:
      nomeMes = 'Janeiro'
      return nomeMes

    case 1:
      nomeMes = 'Fevereiro'
      return nomeMes

    case 2:
      nomeMes = 'Março'
      return nomeMes

    case 3:
      nomeMes = 'Abril'
      return nomeMes

    case 4:
      nomeMes = 'Maio'
      return nomeMes

    case 5:
      nomeMes = 'Junho'
      return nomeMes

    case 6:
      nomeMes = 'Julho'
      return nomeMes

    case 7:
      nomeMes = 'Agosto'
      return nomeMes

    case 8:
      nomeMes = 'Setembro'
      return nomeMes

    case 9:
      nomeMes = 'Outubro'
      return nomeMes

    case 10:
      nomeMes = 'Novembro'
      return nomeMes

    case 11:
      nomeMes = 'Dezembro'
      return nomeMes
  }
}

function criaData(data) {
  const diaSemana = data.getDay()
  const numeroMes = data.getMonth()

  const nomeDia = getDiaSemanaTexto(diaSemana)
  const nomeMes = getNomeMes(numeroMes)

  return (
    `${nomeDia}, ${data.getDate()} de ${nomeMes} ` +
    `de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}
  `
  )
}

h1.innerHTML = criaData(data)
*/

// Outra opção seria criar ao invés de um switch, um array com os meses e outro com os dias da semana, com o return da mesma forma.

const h1 = document.querySelector('.container h1')
const data = new Date()
h1.innerHTML = data.toLocaleString('pt-BR', {
  dateStyle: 'full',
  timeStyle: 'short'
})

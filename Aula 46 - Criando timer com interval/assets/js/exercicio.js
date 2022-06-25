function relogio() {
  function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'GMT'
    })
  }

  const relogio = document.querySelector('.relogio')
  /* const iniciar = document.querySelector('.Iniciar')
  const pausar = document.querySelector('.Pausar')
  const zerar = document.querySelector('.Zerar') */
  let segundos = 0
  let timer

  function iniciarRelogio() {
    timer = setInterval(function () {
      segundos++, (relogio.innerHTML = getTimeFromSeconds(segundos))
    }, 1000)
  }

  document.addEventListener('click', function (e) {
    const el = e.target

    if (el.classList.contains('Iniciar')) {
      relogio.classList.remove('pausado')
      clearInterval(timer)
      iniciarRelogio()
    }

    if (el.classList.contains('Pausar')) {
      clearInterval(timer)
      relogio.classList.add('pausado')
    }

    if (el.classList.contains('Zerar')) {
      clearInterval(timer)
      relogio.innerHTML = '00:00:00'
      relogio.classList.remove('pausado')
      segundos = 0
    }
  })
}

relogio()

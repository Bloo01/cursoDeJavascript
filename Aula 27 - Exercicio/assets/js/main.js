function meuEscopo() {
  const form = document.querySelector('.formulario')
  const resultado = document.querySelector('.resultado')

  pessoas = []

  function recebeEventoForm(evento) {
    evento.preventDefault()

    const peso = form.querySelector('.peso')
    const altura = form.querySelector('.altura')

    pessoas.push({
      peso: peso.value,
      altura: altura.value
    })

    const imc = peso.value / (altura.value * altura.value)

    if (imc <= 18.5) {
      resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(
        2
      )} (Abaixo do peso)</p>`
    } else if (imc > 18.5 && imc <= 24.9) {
      resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Peso normal)</p>`
    } else if (imc >= 25 && imc <= 29.9) {
      resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Sobrepeso)</p>`
    } else if (imc > 30 && imc <= 34.9) {
      resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(
        2
      )} (Obesidade grau 1)</p>`
    } else if (imc > 35 && imc <= 39.9) {
      resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(
        2
      )} (Obesidade grau 2) </p> `
    } else if (imc > 40) {
      resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(
        2
      )} (Obesidade grau 3) </p> `
    } else {
      resultado.innerHTML = `<p>Seu IMC é Inválido </p> `
    }
  }
  form.addEventListener('submit', recebeEventoForm)
}

meuEscopo()

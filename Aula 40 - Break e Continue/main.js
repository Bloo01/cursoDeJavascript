const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let numero of numeros) {
  if (numero === 2) {
    console.log('Pulei o número 2')
    continue
  }

  if (numero === 7) {
    console.log('7 encontrado, saindo...')
    break
  }

  console.log(numero)
}

// Utilizando For in

for (let i in numeros) {
  let numero = numeros[i]

  if (numero === 2) {
    console.log('Pulei o número 2')
    continue
  }

  if (numero === 7) {
    console.log('7 encontrado, saindo...')
    break
  }

  console.log(numero)
}

// Utilizando for clássico.

for (let i = 0; i < numeros.length; i++) {
  let numero = numeros[i]

  if (numero === 2) {
    console.log('Pulei o número 2')
    continue
  }

  if (numero === 7) {
    console.log('7 encontrado, saindo...')
    break
  }

  console.log(numero)
}

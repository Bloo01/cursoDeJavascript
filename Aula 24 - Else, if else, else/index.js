// If pode ser usado sozinho
// Sempre que utilizo a palavra Else, preciso de um If antes.
// Posso ter vários Else Ifs na checagem
// Só posso ter um Else na checagem
// Podemos usar condições sem elfe if, utilizando apenas if e else

const hora = 50

if (hora >= 0 && hora <= 11) {
  console.log('Bom dia')
} else if (hora >= 12 && hora <= 17) {
  console.log('Boa tarde')
} else if (hora >= 18 && hora <= 23) {
  console.log('Boa noite')
} else {
  console.log('Olá')
}

const tenhoGrana = true

if (tenhoGrana) {
  console.log('Vou sair de casa')
} else {
  console.log('Não vou sair de casa')
}

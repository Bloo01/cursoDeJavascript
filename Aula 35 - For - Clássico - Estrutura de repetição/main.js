// i - index

//                      i+= 10 - somaria mais 10
for (let i = 0; i <= 5; i++) {
  console.log(`Linha ${i}`)
}

for (let i = 0; i <= 5; i++) {
  const par = i % 2 === 0 ? 'par' : 'impar' // indica se o valor é divisivel por 2, informando se é par.
  console.log(i, par)
}

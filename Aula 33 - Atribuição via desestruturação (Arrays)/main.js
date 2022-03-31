//               0       1     2     3     4     5     6     7    8
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]
const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros
// ... rest, ... spread
console.log(primeiroNumero, segundoNumero, terceiroNumero)
console.log(resto)

let numeros2 = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]
let [um, , tres, , cinco, , sete, ...resto2] = numeros2

console.log(um, tres, cinco, sete)
console.log(resto2)

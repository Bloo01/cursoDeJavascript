function max(x, y) {
  if (x > y) {
    return x
  }
  return y
}
// const maior = max(1, 2)

console.log(max(1, 2))

// console.log(maior)

/* diminuindo o código:  */

function max(x, y) {
  if (x > y) return x
  return y
}

/* diminuindo mais o código: */

function max(x, y) {
  return x > y ? x : y
}

console.log(max(1, 20))

/* Utilizando arrow funciton */

const max2 = (x, y) => (x > y ? x : y)

console.log(max2(100, 20))

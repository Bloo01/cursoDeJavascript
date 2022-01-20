let nome = 'João'

console.log('nome, nasceu em 1984.')
console.log('Em 2000 João conheceu Maria.')
console.log('João casou-se com Maria em 2012.')
console.log('Maria teve 1 filho com João em 2015.')
console.log('O filho de João se chama Eduardo')

// NÃO PODEMOS CRIAR VARIAVEIS COM PALAVRAS RESERVADAS
// VARIAVEIS PRECISAM TER NOMES SIGNIFICATIVOS

let nomeCliente = 'João'
console.log(nomeCliente)

// NÃO PODE COMEÇAR O NOME DE UMA VARIAVEL COM NÚMERO
//**let no1me**//
// NÃO PODEM CONTER ESPAÇOS OU TRAÇOS.
// UTILIZAMOS camelCase
// Case-sensitive
// NÃO UTILIZE VAR, UTILIZE LET

let nomeCliente = 'Luiz'
let nomecliente = 'Otávio'

console.log(nomeCliente, nomecliente)

// Não podemos redeclarar variáveis com let
let nomeCliente = 'Luiz'
nomeCliente = 'Otávio' //será utilizado, pois é o último valor

console.log(nomeCliente) //Otávio

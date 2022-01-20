const meuChar = {
  level: 125,
  classe: 'mago',
  habilidade: 'fogo'
}

console.log(meuChar.level)

function criaChar(level, classe, habilidade) {
  return {
    level,
    classe,
    habilidade
  }
}

const char1 = criaChar(200, 'Assassino', 'Invisibilidade')

console.log(char1.classe)

const oMago = {
  level: 125,
  classe: 'mago',
  habilidade: 'fogo',

  fala() {
    console.log(`O meu level atual é ${this.level}.`)
  },

  levelUp() {
    this.level++
  }
}

oMago.fala()
oMago.levelUp()
oMago.fala()

// cadeia de protótipos
const avo = {
  atributoAvo: `avô`,
};
const pai = {
  __proto__: avo,
  atributoPai: `pai`,
};

const filho = {
  __proto__: pai,
  atributoFilho: `filho`,
};
console.log('atributos ', filho.atributoPai, '-', filho.atributoAvo);

const carro = {
  velocidadeAtual: 0,
  velocidadeMaxima: 200,
  acelerarMais(delta) {
    if (this.velocidadeAtual + delta <= this.velocidadeMaxima) {
      this.velocidadeAtual += delta;
    } else {
      this.velocidadeAtual = this.velocidadeMaxima;
    }
  },
  status() {
    return `${this.velocidadeAtual}KM/h de ${this.velocidadeMaxima}KM/h`;
  },
};
const ferrari = {
  modelo: `F40`,
  velocidadeMaxima: 324, //sobreescrista de atributos
};
const volvo = {
  modelo: `V40`,
  status() {
    return `${this.modelo}: ${super.status()}`; //sobreescrita de função atrave do `super`
  },
};

console.log(volvo);//exibe apenas atributos do volvo

//definindo a herança atraves da função setPrototypeOf
Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

volvo.acelerarMais(100);
console.log(volvo.status());

ferrari.acelerarMais(300);
console.log(ferrari.status());
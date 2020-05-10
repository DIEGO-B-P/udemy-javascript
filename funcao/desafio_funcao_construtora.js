/* classe
class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
  falar() {
    console.log(`Meu nome é ${this.nome}`);
  }
}
*/

//função construtora
function Pessoa(nome) {
  this.nome = nome;

  this.falar = function () {
    console.log(`Meu nome é ${this.nome}`);
  };
}
const p1 = new Pessoa(`Diego`);
p1.falar();

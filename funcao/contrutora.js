function Carro(velocidadeMaxima = 200, delta = 5) {
  //atributo privado
  let velocidadeAtual = 0;

  //metodo público
  this.acerelar = () => {
    if (velocidadeAtual + delta <= velocidadeMaxima) velocidadeAtual += delta;
    else velocidadeAtual = velocidadeMaxima;
  };
  //método público
  this.getVelocidadeAtual = () => velocidadeAtual;
}
//para instanciar, parentes são opcionais
const uno = new Carro();
uno.acerelar();
console.log(`Uno : ${uno.getVelocidadeAtual()}`);

const ferrari = new Carro(350, 20);
ferrari.acerelar();
ferrari.acerelar();
ferrari.acerelar();
console.log(`Ferrari: ${ferrari.getVelocidadeAtual()}`);

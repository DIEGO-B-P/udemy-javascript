/* eslint-disable*/
function getPreco(imposto = 0, moeda = `R$`) {
  return `${moeda} ${this.preco * (1 - this.desc) * 1 + imposto}`;
}
const produto = {
  nome: `Notebook`,
  preco: 4589,
  desc: 0.15,
  getPreco,
};
// maneira comum de chamar uma função
console.log(produto.getPreco());

const carro = { preco: 49990, desc: 0.2 };

// chamando com o call
console.log(getPreco.call(carro));

// chamando com o apply
console.log(getPreco.apply(carro));

// no call pode passar parâmetros diretamente, primeiro é o contexto
console.log(getPreco.call(carro, 0.17, `$`));

// com o apply o pode passar parâmetro como array. primeiro é o contexto4
console.log(getPreco.apply(carro, [0.17, `$`]));

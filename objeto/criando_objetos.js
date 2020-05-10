//1ª - usando a notação literal
const obj1 = {};
console.log(obj1);

//2ª - Object em JS
console.log(typeof Object, typeof new Object());
const obj2 = new Object();
console.log(obj2);

//3ª - função construtora
function Produto(nome, preco, desc) {
  //quando coloca o `this` o atributo se torna público
  this.nome = nome;
  this.getPrecoComDesconto = () => {
    return preco + (1 - desc);
  };
}
const p1 = new Produto(`Caneta`, 7.99, 0.15);
const p2 = new Produto(`Notebook`, 2999.99, 0.25);
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

//4ª - função factory
function criarFuncionarios(nome, salarioBase, faltas) {
  //retorno como objeto literal
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas);
    },
  };
}
const f1 = criarFuncionarios(`Joao`, 7980, 4);
const f2 = criarFuncionarios(`Maria`, 11400, 1);
console.log(f1.getSalario(), f2.getSalario());

/*5ª - Object.crate 
/const filha = Object.crate(null);
filha.nome = `Ana`;
console.log(filha);*/

//6ª - criando com JSON
const fromJSON = JSON.parse(`{"info":"sou JSON"}`);
console.log(fromJSON.info);

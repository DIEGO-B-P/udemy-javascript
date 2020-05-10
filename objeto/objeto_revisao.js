//coleção dinâmica de pares chave/valor
const produto = new Object();
produto.nome = `cadeira`;
//outra forma de adicionar  atributos
produto[`marca do produto`] = `Generica`;
produto.preco = 220;
console.log(produto);

//deletando atributos
delete produto.preco;
console.log(produto);

//--------------------------------
//criando um objeto `carro`
const carro = {
  modelo: `A4`, // criando atributo
  valor: 89000,
  proprietario: {
    nome: `Raul`,
    idade: 56,
    endereco: {
      logradouro: `Rua ABC`,
      numero: 23,
    },
  },
  //criando um array de condutores com atributos
  condutores: [
    {
      nome: `junior`,
      idade: 19,
    },
    {
      nome: `Ana`,
      idade: 42,
    },
  ],
  calcularValorSeguro: function () {
    // atribuindo uma função para o objeto carro
  },
};
//acessando os atributos de carro pelo `pontos` e mudando o valor
carro.proprietario.endereco.numero = 1000;
//outra forma de acessar os atributos de um objeto, nesse caso é necessário conhecer o objeto
carro[`proprietario`][`endereco`][`logradouro`] = `AV gigante`;
console.log(carro);

/* deletando atributos e funções
delete carro.condutores;
delete carro.calcularValorSeguro;
*/
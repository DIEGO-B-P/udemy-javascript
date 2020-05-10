const pessoa = {
  nome: `Ana`,
  idade: 5,
  endereco: {
    logradouro: `Rua ABC`,
    numero: 1000,
  },
};

const { nome, idade } = pessoa;
console.log(nome, idade);

//retirando um atributo de um objeto com destructuring
const { nome: n, idade: i } = pessoa;
console.log(n, i);

//acessando objeto dentro do objeto com destructuring
const {
  endereco: { logradouro, numero },
} = pessoa;
console.log(logradouro, numero);

//atribuindo valores com o destracturing em um array
const [n1, , n3, , n5] = [10, 7, 9];

//pode também definir como valor padrão
function rand({ min = 0, max = 1000 }) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}
const obj = { max: 50, min: 40 };
console.log(rand(obj));
//passar apenas uma variavel
console.log(rand({min:955}))

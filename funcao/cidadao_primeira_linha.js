/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
// criação de função
function fun() {}

// armazenar em uma variável
const fun2 = fun();
const fun3 = function () {
  return console.log('Sou uma função!!');
};

// armazenar em um array
const array = [
  function (a, b) {
    return a + b;
  },
  fun3,
];

// armazenar em um atributi de objeto
const obj = {};
obj.falar = function () {
  // eslint-disable-next-line quotes
  return `oi`;
};
console.log(obj.falar());

// passar uma função como paramentro
function run(fun) {
  fun();
}
run(() => {
  console.log('Executando ..');
});

// uma função pode retornar/conter  uma função
function soma(a, b) {
  return function (c) {
    console.log(a + b + c);
  };
}
soma(2, 3)(1);

const cincoMais = soma(2, 3);
cincoMais(4);

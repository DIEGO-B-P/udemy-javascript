//function declaration
//é possivel chamar a função declaration antes
//o interpretador carrega primeiro as funções
console.log(soma(3,5));
function soma(x, y) {
  return x + y;
}

//function expression
const sub = function (x, y) {
  return x - y;
};
//só é permitido chamar depois de declarar
console.log(sub(5,3));

//named function expression
const mult = function mult(x, y) {
  return x * y;
};

const ferrari = {
  modelo: `F40`,
  velocidadeMaxima: 324,
};

const volvo = {
  modelo: `V40`,
  velocidadeMaxima: 200,
};

console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);

//obs: __proto__  acessar um atributo do objeto pai
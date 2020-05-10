// adicionando função no prototype
String.prototype.reverso = function () {
  return this.split('').reverse().join('');
};
console.log(`teste para reverter`.reverso());

Array.prototype.primeiroElemento = function () {
  return this[0];
};
console.log([1, 2, 3, 4].primeiroElemento());

//sobrescrevendo funções com o prototype
//nunca substituir métodos nativos
String.prototype.toString = function () {
  return `Nunca faça isso!!`;
};
console.log(`teste`.toString());

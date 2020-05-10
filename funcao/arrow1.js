/* eslint-disable*/
// convencional
let dobro = function (a) {
  return 2 * a;
};
// arrow
dobro = () => 2 * a;

// arrow reduzida (sem chaves("{}"),
// somente quando tem uma setença de código)
// return implicito
dobro = (a) => 2 * a;

let ola = function () {
  return `Ola`;
};

ola = () => 'Ola';
ola = (_) => 'Ola'; // possui param

console.log(ola());

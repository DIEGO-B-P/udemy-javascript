//simulando o operador `new`

//criando um função base para servir de objeto
function Aula(nome, videoId) {
  this.nome = nome;
  this.videoId = videoId;
}

const obj1 = new Aula(`bem vindo`, 123);
const obj2 = new Aula(`até breve`, 456);

console.log(obj1, obj2);

//criando a função que vai realizar a simulação
function novo(f, ...params) {
  const obj = {};
  obj.__proto__ = f.prototype;
  f.apply(obj, params);
  return obj;
}

const obj3 = novo(Aula, `bem vindo`, 123);
const obj4 = novo(Aula, `até mais`, 456);
console.log(obj3, obj4);

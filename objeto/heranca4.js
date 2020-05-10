function meuObjeto() {}

console.log(meuObjeto.prototype);

const obj1 = new meuObjeto();
const obj2 = new meuObjeto();
//todo objeto criado da mesma função contrutora aponta para o mesmo prototipo
console.log(obj1.__proto__ === obj2.__proto__); // resposta true

meuObjeto.prototype.nome = `Anônimo`;
meuObjeto.prototype.falar = function () {
  console.log(`Meu nome é ${this.nome}`);
};

obj1.falar();
obj2.nome = `Rafael`;
obj2.falar();

const obj3 = {};
obj3.__proto__ = meuObjeto.prototype;
obj3.nome = `Obj3`;
obj3.falar();

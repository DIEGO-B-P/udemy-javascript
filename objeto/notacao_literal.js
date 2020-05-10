const a = 1;
const b = 2;
const c = 3;

//melhoria no ES6
//antes
const obj1 = { a: a, b: b, c: c };
//depois
const obj2 = { a, b, c };

const nomeAtributo = `notas`;
const valorAtributo = 7.5;

//antes
const obj3 = {};
obj3[nomeAtributo] = valorAtributo;
//depois
const obj4 = { [nomeAtributo]: valorAtributo };

const obj5 = {
  funcao1: function (params) {
    //antes
  },
  funcao2() {
    //depois
  },
};
console.log(obj5);

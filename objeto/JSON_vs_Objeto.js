//JSON é um formato de dados textual (interoperabilidade entre sistema)
//usado para fazer a comunicão entre sistemas com tecnologias diferentes
//Não é possível executar o JSON, portanto função são `perdidas`
//todos atributos do JSON são com aspas duplas("")

const obj = {
  a: 1,
  b: 2,
  c: 3,
  soma() {
    return a + b + c;
  },
};
console.log(JSON.stringify(obj)); // tranformando um objeto em JSON

console.log(JSON.parse('{"a":1,"b":2,"c":3}')); // transformar um objeto a partir de um JSON

//pode passar como dados objetos, array, boolean, texto, números
console.log(
    JSON.parse(`{"a": 1,"b": "texto(entre aspas duplas)","c": true, "d": {},"e":[] }`)
);

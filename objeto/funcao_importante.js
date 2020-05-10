const pessoa = {
  nome: `Rebeca`,
  idade: 21,
  peso: 13,
};
//obtenção de dados do objeto (chave)
console.log(Object.keys(pessoa));

//obtenção de dados do objeto (valor)
console.log(Object.values(pessoa));

//obtenção de dados do objeto (chave e valor)
console.log(Object.entries(pessoa));
Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}:${valor}`);
});
//definir uma propriedade
Object.defineProperty(pessoa, `dataNascimento`, {
  enumerable: true, //enumerada na lista de chaves
  writable: false, //pode ser reescrita
  value: `01/01/2019`, //setando o valor
});
console.log(pessoa.dataNascimento);

//Object.assign (ECMAScript 2015)
const objeto1 = { a: 1 };
const objeto2 = { b: 2 };
const objeto3 = { c: 3, a: 4 };
/*essa função concatena todos atributos dos objetos passado como parametro 
sobreescrevendo os valores se já estiver com o mesmo nome*/
const objetoResultante = Object.assign(objeto1, objeto2, objeto3);
console.log(objetoResultante);

// uma outra função importante é quando aponta diretamente para uma herança do objeto
//ex: Object.setPrototypeOf(filho, pai)
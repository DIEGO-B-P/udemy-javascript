//Object.preventExtensions -
//previne que o objeto não seja extendido (adicionar novos atributos)
//pode ser editado e excluído
const produto = Object.preventExtensions({
  nome: `qualquer`,
  preco: 1.99,
  tag: `promoção`,
});
console.log(`Extensível :`, Object.isExtensible(produto));
produto.nome = `Borracha`;
produto.descricao = `borracha branca escolar`; // essa linha não será executada
delete produto.tag;
console.log(produto);

//Object.seal
//não é possível adicionar e excluir, porém pode modificar
const pessoa = {
  nome: `Juliana`,
  idade: 35,
};
Object.seal(pessoa);
console.log(`Selado :`, Object.isSealed(pessoa));
pessoa.sobrenome = `Silva`; //essa linha não será executada
delete pessoa.nome; //essa linha não será executada
pessoa.idade = 29;
console.log(pessoa);

//Object.freeze
//congela objeto, não pode ser modificado, excluidou ou adicionar dados(atributo)

// pessoa aponta um edereço de memória
const pessoa = { nome: `joao` };
pessoa.nome = `Pedro`;
console.log(pessoa.nome);

// acontecerá um erro pois está tentando atribuir um outro endereço de memória
//pessoa = { nome: `Ana` };

//congelando um objeto
Object.freeze(pessoa);
pessoa.end = `Rua ABC`; //não é possivel criar novos atributos
delete pessoa.nome; // não é possível deletar
//Não é possível fazer mudaças em atributos
pessoa.nome = `Maria`;
console.log(pessoa);

const pessoa = {
  saudacao: `Bom dia`,
  falar() {
    console.log(this.saudacao);
  },
};
pessoa.falar();
const falar = pessoa.falar;
falar(); //conflito entre paradigmas: funcional e Orientação a obj


//amarra a função do objeto "pessoa" a variável "falarPessoa"
const falarPessoa = pessoa.falar.bind(pessoa);
falarPessoa();

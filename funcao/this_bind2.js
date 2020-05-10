function Pessoa() {
  this.idade = 0;
  //cria essa constate para acessar o this
  const self = this;

  setInterval(
    function () {
      self.idade++;
      console.log(self.idade);
    } /*.bind(this)*/,
    1000
  );
}

new Pessoa();

class Lancamento {
  constructor(nome = `generico`, valor = 0) {
    this.nome = nome;
    this.valor = valor;
  }
}
class CicloFinanceiro {
  constructor(mes, ano) {
    this.mes = mes;
    this, (ano = ano);
    this.lancamentos = [];
  }
  addLancamentos(...lancamentos) {
    lancamentos.forEach((l) => this.lancamentos.push(l));
  }
  sumario() {
    let valorConsolidado = 0;
    this.lancamentos.forEach((l) => {
      valorConsolidado += l.valor;
    });
    return valorConsolidado;
  }
}
const salario = new Lancamento(`Salário`, 4500);
const contaLuz = new Lancamento(`Luz`, -220);

const contas = new CicloFinanceiro(6, 2018);
contas.addLancamentos(salario, contaLuz);
console.log(contas.sumario());
console.log(contas.lancamentos);
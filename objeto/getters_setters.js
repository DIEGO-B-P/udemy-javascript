const sequencia = {
  _valor: 1, // conversão (acessada apenas internamente)
  get valor() {
    return this._valor++;
  },
  set valor(valor) {
    this._valor = valor;
  },
};

const pai = { nome: `Pedro`, corCabelo: `preto` };

const filha1 = Object.create(pai); // pode definir um prototipo
filha1.nome = `Ana`;
console.log(filha1.corCabelo);

const filha2 = Object.create(pai, {
  nome: { value: `Bia`, writable: false, enumerable: true },
});

console.log(filha2.nome);
filha2.nome = `Carla`;
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

console.log(`=============================`);

for (let i in filha2) {
  //hasOwnProperty se é propriedade do Objeto 
  filha2.hasOwnProperty(i) ? console.log(i) : console.log(`Por herança: ${i}`);
}

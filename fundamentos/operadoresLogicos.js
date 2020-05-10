function compras(trab1, trab2) {
  const comprarSorvete = trab1 || trab2;
  const comprarTV50 = trab1 && trab2;
  const comprarTV32 = trab1 != trab2;
  const manterSaudave = !comprarSorvete;

  return { comprarSorvete, comprarTV50, comprarTV32, manterSaudave };
}

console.log(compras(true,true))
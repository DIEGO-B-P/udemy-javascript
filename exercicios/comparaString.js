const string1 = "1234567890";
const string2 = "1234567";

function comparaPercentual(str1, str2) {
  let cont = 0;
  if (comparaTamanho(str1, str2) == true) {
    for (let key in str2) {
      if (str1[key] === str2[key]) {
        cont++;
      }
    }
    return (100 * cont) / str1.length;
  } else {
    for (let key in str1) {
      if (str2[key] === str1[key]) {
        cont++;
      }
    }
    return (100 * cont) / str2.length;
  }
}
//compara qual string é maior
function comparaTamanho(str1, str2) {
  if (str1.length >= str2.length) return true;
  else return false;
}

console.log(comparaPercentual(string1, string2).toFixed(2), `%`);
//teste para commit
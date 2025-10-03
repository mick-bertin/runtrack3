// Créez une fonction “sommenombrespremiers” qui prend en paramètres deux variables.
// Si ces deux variables sont des nombres premiers, alors la fonction retourne leur
// somme. Sinon, la fonction retourne false.

function sommenombrespremiers(nombre) {
  if (nombre === 3 || nombre == 2) {
    return true;
  }
  //  supprime tout les mombre paire sauf 2
  if (nombre === 1 || nombre % 2 == 0) {
    return false;
  }
  //  parcourir les nombres  impaire en commençant par 3 avec la fonction de racine carre
  for (let index = 3; index < Math.sqrt(nombre); index += 2) {
    // si le resultat du reste supérieur a 0 donc le nombre est pas divisible par la valeur
    if (nombre % index === 0) {
      return false;
    }
  }
  return true;
}

console.log(sommenombrespremiers(45));
console.log(sommenombrespremiers(9, 3));
console.log(sommenombrespremiers(2, 5));
console.log(sommenombrespremiers(0, 10));

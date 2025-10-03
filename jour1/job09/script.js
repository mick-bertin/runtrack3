// Créez une fonction “tri” qui prend en paramètres un tableau de nombres nommé
// “numbers” et une variable “order” qui contient “asc” ou “desc”. A l’aide de la fonction
// sort() d’un algorithme développé par vos soins, cette fonction doit trier le tableau dans
// l’ordre ascendant ou décroissant, selon le paramètre passé, puis retourner le tableau.

function tri(numbers, order) {
  return numbers.sort(function (a, b) {
    if (order === "asc") {
      // Tri croissant
      return a - b;
    } else if (order === "desc") {
      // Tri décroissant
      return b - a;
    }
  });
}

// Exemple
console.log(tri([5, 3, 9, 1, 7], "asc"));
console.log(tri([5, 3, 9, 1, 7], "desc"));

// Créez une fonction javascript “jsonValueKey()” qui prend en paramètre une chaîne de
// caractères au format json et une clé.
// Cette fonction retourne la valeur liée à cette clé dans la chaîne de caractères.
// Par exemple : si la string passée en paramètre est
// “{
// name: "La Plateforme_",
// address: "8 rue d'hozier",
// city: "Marseille",
// nb_staff: "11",
// creation:"2019"
// }”
// et la clé est “city”, la fonction retourne “Marseille”.

// cree une fonction
function jsonValueKey(user, cle) {
  // JSON.parse()pour convertir du texte en objet JavaScript :
  const myObj = JSON.parse(user);
  return myObj[cle];
}

const user = {
  name: "La Plateforme_",
  address: "8 rue d'hozier",
  city: "Marseille",
  nb_staff: "11",
  creation: "2019",
};

console.log(user.name);

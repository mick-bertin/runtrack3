// Créez une balise <button> ayant comme id “button”.
// Créez une balise <p> ayant comme id “compteur” et contenant “0”.
// Ce contenu doit évoluer proportionnellement au nombre d'événements click reçu par le
// bouton
// ATTENTION : Vous ne devez pas utiliser “onclick()” dans votre html.
// La fonction permettant d’effectuer la modification doit s'appeler “addone()”.

function addone() {
  // On recupere  p  par son id
  let compteur = document.querySelector("#compteur");
  // On cree une nouvel variable
  let compteurs = compteur.innerText;
  // On ajoute 1
  compteurs++;
  // On affiche le compteur
  compteur.innerText = compteurs;
}

// On écoute le clic sur le bouton qui agi sur la fonction
document.querySelector("#button").addEventListener("click", addone);

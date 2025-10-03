// Créez une balise <button> ayant comme id “button”.
// Lorsque l’on clique dessus, un <article> contenant le texte suivant est ajouté au contenu
// de la page : “L'important n'est pas la chute, mais l'atterrissage.”
// Si on clique à nouveau sur ce bouton, l’article disparaît.
// L’apparition / Disparition doivent être gérées dans une fonction nommée “showhide()”.
// __________________________________________________________________________________________________

// cree la fonction showhide
function showhide() {
  // On recupere  la citation  par son id
  let mots = document.querySelector("#citation");
  if (mots) {
    // si il existe  on le supprime
    mots.remove();
  } else {
    // Sinon  on le crée
    let mot = document.createElement("article");
    // on donne un id pour le retrouver
    mot.id = "citation";
    mot.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
    document.body.appendChild(mot);
  }
}

// On écoute le clic sur le bouton qui agi sur la fonction
document.querySelector("#button").addEventListener("click", showhide);

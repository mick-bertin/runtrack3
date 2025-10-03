// Créez un <article> ayant comme id “citation” et contenant le texte suivant :
// "La vie a beaucoup plus d’imagination que nous”.
// Créez un <button> ayant comme id “button”. Lorsque l’on clique sur le bouton,
// récupérez le contenu de l’élément ayant comme id “citation” et affichez le contenu dans
// la console de développement.
// La fonction de récupération et d’affichage doit se nommer “citation()”.

// cree la fonction citation
function citation() {
  // On recupere  la citation  par son id
  let mots = document.querySelector("#citation").textContent;

  // On affiche  le contenu dansla console de développement.
  console.log(mots);
}

// On écoute le clic sur le bouton qui agi sur la fonction
document.querySelector("#button").addEventListener("click", citation);

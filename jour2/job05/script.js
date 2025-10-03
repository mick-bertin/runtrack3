// Créez un fichier style.css. Définissez la taille minimale de votre body à 4096px.
// Ajoutez un <footer> qui prend toute la largeur de votre page en position : fixed en bas
// de votre fenêtre.
// De la même façon qu’une barre de chargement, la couleur du footer doit évoluer en
// fonction du pourcentage de scrolling.

// recupere le footer
const footer = document.querySelector("footer");

// hauteur totale scrollable
const height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

// ecoute de scroll
window.addEventListener("scroll", () => {
  // position  du scroll
  const scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;

  //  scroll  de 0 a 100
  const taille = (scrollTop / height) * 100;

  //  couleur  atteint en pourcentage
  let couleur = "red"; // 0% - 20%
  if (taille >= 90) {
    couleur = "yellow"; // 21% - 40%
  } else if (taille >= 60) {
    couleur = "blue"; // 60% - 80%
  } else if (taille >= 30) {
    couleur = "green"; // 90% - 100%
  }

  //  la couleur au footer
  footer.style.backgroundColor = couleur;
});

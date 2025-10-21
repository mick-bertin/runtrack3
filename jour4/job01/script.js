//  recupere le bouton
const button = document.getElementById("button");

// ajoute un  evenement
button.addEventListener("click", () => {
  // met   Fetch
  fetch("expression.txt")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erreur lors du chargement du fichier");
      }
      return response.text();
    })
    .then((data) => {
      // cree un paragraphe
      const p = document.createElement("p");
      p.textContent = data;

      //mettre le p dans la page
      document.body.appendChild(p);
    })
    .catch((error) => {
      console.error("Erreur :", error);
    });
});

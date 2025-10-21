// Créez un formulaire permettant de trier ces données.
// Il doit contenir les champs suivants :
// ● id (input type text),
// ● nom (input type text),
// ● type (liste déroulante <select>)
// ● filtrer (input type button).

// Fonction pour afficher les résultats filtrés dans la page HTML
function afficherResultats(pokemons) {
  const resultDiv = document.getElementById("resultats");
  resultDiv.innerHTML = ""; // Réinitialisation

  if (pokemons.length === 0) {
    resultDiv.innerHTML =
      "<p>🔍 Aucun Pokémon trouvé correspondant aux critères.</p>";
    return;
  }

  pokemons.forEach((pokemon) => {
    const card = document.createElement("div");
    card.className = "pokemon";
    card.style.border = "1px solid #000"; // Ajout de bordures simples pour la séparation
    card.style.padding = "10px";
    card.style.margin = "5px 0";
    // On utilise le nom français pour l'affichage
    const nomAffiche =
      pokemon.name && pokemon.name.french ? pokemon.name.french : "Nom inconnu";

    // On joint les types (qui sont en anglais)
    const types = pokemon.type ? pokemon.type.join(", ") : "Non spécifié";

    card.innerHTML = `

     <strong>${pokemon.name.french}</strong> (ID : ${pokemon.id})<br>
      Nom Anglais : ${pokemon.name.english}<br>
      Type(s) : ${pokemon.type.join(" / ")}
      <br>      Attaque : ${pokemon.base.Attack},
       Défense : ${pokemon.base.Defense},
       Défense : ${pokemon.base.Defense},
       Speed: ${pokemon.base.Speed},
       HP: ${pokemon.base.HP}
    
        `;
    resultDiv.appendChild(card);
  });
}

// La fonction principale de filtrage, exécutée lors du clic sur le bouton
function filtrerPokemons() {
  // 1. Récupération des valeurs du formulaire
  const id = document.getElementById("id").value.trim().toLowerCase();
  const nom = document.getElementById("nom").value.trim().toLowerCase();
  const type = document.getElementById("type").value;

  // 2. Récupération du fichier JSON avec Fetch
  fetch("./pokemon.json")
    .then((response) => {
      // Vérification de la réponse HTTP
      if (!response.ok) {
        throw new Error(
          `Erreur HTTP: ${response.status} lors du chargement du fichier`
        );
      }
      return response.json();
    })
    .then((data) => {
      // 3. Application des filtres AVEC LA FONCTION ARRAY.FILTER()
      const filtres = data.filter((pokemon) => {
        // On récupère le nom français du Pokémon pour la comparaison (insensible à la casse)
        const pokemonFrenchName =
          pokemon.name && pokemon.name.french
            ? pokemon.name.french.toLowerCase()
            : "";

        // Critère 1: Filtre par ID
        const matchId = id === "" || pokemon.id.toString().includes(id);

        // Critère 2: Filtre par Nom Français (utiliser includes() pour la recherche partielle)
        const matchNom = nom === "" || pokemonFrenchName.includes(nom);

        // Critère 3: Filtre par Type (vérifie si le type sélectionné est inclus dans le tableau de types du Pokémon)
        const matchType =
          type === "" || (pokemon.type && pokemon.type.includes(type));

        // Le Pokémon est inclus dans le nouveau tableau 'filtres' s'il correspond à TOUS les critères
        return matchId && matchNom && matchType;
      });

      // 4. Affichage des résultats
      afficherResultats(filtres);
    })
    .catch((error) => {
      console.error("Erreur :", error);
      document.getElementById("resultats").innerHTML =
        "<p>❌ Erreur de chargement ou de traitement du fichier Pokémon.</p>";
    });
}

// 5. Attachement de l'événement au bouton "Filtrer"
document.getElementById("filtrer").addEventListener("click", filtrerPokemons);

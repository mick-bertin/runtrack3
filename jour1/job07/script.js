// // Créez une fonction “jourtravaille” qui prend en paramètre une date au format Date. Si la
// // date correspond à un jour férié de l’année 2020, la fonction affiche “Le $jour $mois
// // $année est un jour férié”. Si elle correspond à un samedi ou un dimanche, alors le
// // message affiché est “Non, $jour $mois $année est un week-end”, sinon afficher “Oui,
// // $jour $mois $année est un jour travaillé”.

function jourtravaille(date) {
  const joursFeries2020 = [
    new Date(2020, 0, 1), // 1 janvier
    new Date(2020, 3, 13), // Lundi de Pâques (13 avril 2022)
    new Date(2020, 4, 1), // 1 mai
    new Date(2020, 4, 8), // 8 mai
    new Date(2020, 4, 21), // Ascension (21 mai 2020)
    new Date(2020, 5, 1), // Lundi de Pentecôte (1 juin 2022)
    new Date(2020, 6, 14), // 14 juillet
    new Date(2020, 7, 15), // 15 août
    new Date(2020, 10, 1), // 1 novembre
    new Date(2020, 10, 11), // 11 novembre
    new Date(2020, 11, 25), // 25 décembre
  ];

  const jours = [
    "dimanche",
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi",
  ];
  const mois = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ];

  let jour = date.getDate();
  let moisNom = mois[date.getMonth()];
  let annee = date.getFullYear();
  let jourSemaine = jours[date.getDay()];

  let estFerie = false;

  // Vérification avec forEach
  joursFeries2020.forEach((Feries) => {
    if (
      Feries.getDate() === jour &&
      Feries.getMonth() === date.getMonth() &&
      Feries.getFullYear() === annee
    ) {
      console.log(`Le ${jour} ${moisNom} ${annee} est un jour férié`);
      estFerie = true;
    }
  });

  if (estFerie) return;

  // Vérification week-end
  if (jourSemaine === "samedi" || jourSemaine === "dimanche") {
    console.log(`Non, le ${jour} ${moisNom} ${annee} est un week-end`);
  } else {
    console.log(`Oui, le ${jour} ${moisNom} ${annee} est un jour travaillé`);
  }
}

// Exemples d’utilisation
jourtravaille(new Date(2020, 0, 1)); // Jour férié (1 janvier)
jourtravaille(new Date(2020, 5, 6)); // Week-end (6 juin 2020 est un samedi)
jourtravaille(new Date(2020, 2, 4)); // Jour travaillé (4 mars 2020 est un mercredi)

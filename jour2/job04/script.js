// Créez un <textarea> dont l’id est “keylogger”.
// Chaque fois que l’utilisateur tape une lettre sur son clavier (a-z), celle-ci est ajoutée
// dans le textarea (même si le focus en cours n’est pas le textarea).
// Si le focus en cours est dans le textarea, la lettre doit être ajoutée deux fois.

// // recupere le textarea
let textarea = document.getElementById("keylogger");

// ecoute  des touches
document.addEventListener("keydown", function (event) {
  const lettre = event.key;

  // mettre les lettres a-z
  if (!/^[a-z]$/i.test(lettre)) return;

  // Si le focus est dans le textarea
  if (document.activeElement === textarea) {
    // evite les doublon
    event.preventDefault();

    // Ajouter deux fois la lettre
    textarea.value += lettre + lettre;
  } else {
    //  on ajoute simplement une fois
    textarea.value += lettre;
  }
});

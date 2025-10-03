// Par défaut, votre index.php n’a pas de contenu.
// Lorsqu’un utilisateur effectue un code konami, la page devient stylisée, aux couleurs de
// La Plateforme_.

// je recupere la valeur body
let body = document.querySelector("body");
let text = "bien jouer";
let konami = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];
let reboot = 0;
document.addEventListener("keydown", function (e) {
  let key = e.key;
  if (key == konami[reboot]) {
    reboot++;
    if (reboot == 10) {
      body.style.backgroundColor = "blue";
      document.getElementById("demo").innerHTML = text;
    }
  } else {
    reboot = 0;

    alert("faux");
  }
});

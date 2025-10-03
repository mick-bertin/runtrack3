// Créez une balise <button> et sélectionnez-la dans votre code JavaScript.
// En cliquant sur le bouton, vous devrez faire apparaître le texte sur votre page HTML :
// “Les logiciels et les cathédrales, c'est un peu la même chose - d'abord on les construit,
// ensuite on prie.”
// Ensuite créez un bouton qui servira à cacher tout l’élément html.

$(".btn1").on("click", function () {
  $("#text").hide("slow", function () {});
});

$(".btn2").on("click", function () {
  $("#text").show("slow", function () {});
});

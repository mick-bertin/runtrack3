function fizzbuzz() {
  for (let i = 1; i <= 151; i++) {
    // Si le nombre est un multiple de 3, et pas un mutiple de 5 affichez “Fizz”.
    if (i % 3 == 0 && i % 5 != 0) {
      console.log("FIZZ");
    } else if (i % 5 == 0 && i % 3 != 0) {
      //  Si le nombre est un multiple de 5, et pas un mutiple de 3 affichez “Buzz”.
      console.log("BUZZ ");
    } else if (i % 3 == 0 || i % 5 == 0) {
      // Si le nombre est un multiple de 3 et de 5, affichez “FizzBuzz”.
      console.log("FizzBuzz ");
    } else {
      // alor tu maffiche tout les nombre de 1 a 151
      console.log("i");
    }
  }
}
fizzbuzz();

// function fizzbuzz() {
//   for (let i = 1; i <= 151; i++) {
//     if (i % 15 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// // Exécution
// fizzbuzz();

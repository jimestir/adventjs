console.log(wrapGifts(["📷", "⚽️"]));
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

wrapGifts(["🏈🎸", "🎮🧸"]);
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

wrapGifts(["📷"]);
/* Resultado:
[ '****',
  '*📷*',
  '****'
]*/

// function wrapGifts(gifts) {
//   // ¡No olvides compartir tu solución en redes!
//   const envelopeGifts = gifts[0].length;
//   let a = [];
//   a.push("*".repeat(envelopeGifts + 2));
//   for (let i = 0; i < gifts.length; i++) {
//     a.push(`*${gifts[i]}*`);
//   }
//   a.push("*".repeat(envelopeGifts + 2));
//   return a;
// }

// otra forma 2️⃣ de hacerlo es con un array.prototype.reduce(), dentro de un array y el mismo imprimiendo un array es decir "...gifts" para que no salga el array original, sucede igual con ...acc debido a que el mismo es un array, "[...acc,...[`*${gift}*`]]" para funcion principal luego, se ejecuta al final "["*".repeat(gifts[0].length + 2)]"
function wrapGifts(gifts) {
  return gifts.length === 0
    ? gifts
    : [
        ...gifts.reduce(
          (acc, gift) => [...acc, ...[`*${gift}*`]],
          ["*".repeat(gifts[0].length + 2)]
        ),
        "*".repeat(gifts[0].length + 2),
      ];
}

// ejemplo de simple de lo de arriba 🔝b
function envelopeGifts(gift) {
  return [...gift.reduce((acc, ucc) => [...acc, ...[ucc]], ["***"]), "*&*"];
}
console.log(envelopeGifts(["a", "b", "c", "d"]));
console.log(["a", "b", "c", "d"].reduce((acc, ucc) => [ucc, ...acc], ["hola"]));

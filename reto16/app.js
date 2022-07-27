console.log(decodeNumbers("...")); // 3
console.log(decodeNumbers(".,")); // 4 (5 - 1)
console.log(decodeNumbers(",.")); // 6 (5 + 1)
console.log(decodeNumbers(",...")); // 8 (5 + 3)
console.log(decodeNumbers(".........!")); // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
console.log(decodeNumbers(".;")); // 49 (50 - 1)
console.log(decodeNumbers("..,")); // 5 (-1 + 1 + 5)
console.log(decodeNumbers("..,!")); // 95 (1 - 1 - 5 + 100)
console.log(decodeNumbers(".;!")); // 49 (-1 -50 + 100)
console.log(decodeNumbers("!!!")); // 300
console.log(decodeNumbers(";!")); // 50
console.log(decodeNumbers(";.W")); // NaN

function decodeNumbers(symbols) {
  // ¡No olvides compartir tu solución en redes!
  const symbolsValue = [1, 5, 10, 50, 100];
  const symbolsRight = [".", ",", ":", ";", "!"];
  const re = /[^.,;:!]/g;
  let acc = 0;
  let idx;
  let afterIndx;
  if (re.test(symbols)) return NaN;
  for (let i = 0; i < symbols.length; i++) {
    idx = symbolsRight.indexOf(symbols[i]);
    afterIndx = symbolsRight.indexOf(symbols[i + 1]);
    if (afterIndx > idx) acc -= parseInt(symbolsValue[idx]);
    else acc += parseInt(symbolsValue[idx]);
  }
  return acc;
}
//otra forma 2️⃣ con objeto
// function decodeNumber(symbols) {
//     let translation = {'.': 1, ',': 5, ':': 10, ';': 50, '!': 100};
//     let result = 0;
//     for (let i = 0; i < symbols.length; i++) {
//         if (!translation[symbols[i]]) return NaN;
//         result += translation[symbols[i]] * (symbols[i + 1] && translation[symbols[i + 1]] > translation[symbols[i]] ? -1 : 1);
//     }
//     return result;

// otra forma 3️⃣ con objeto y reduce
// function decodeNumber(symbols) {
//   let translation = { ".": 1, ",": 5, ":": 10, ";": 50, "!": 100 };
//   return [...symbols].reduceRight(
//     (acc, symbol, index) =>
//       isNaN(acc) || !translation[symbol]
//         ? NaN
//         : acc +
//           translation[symbol] *
//             (symbols[index + 1] &&
//             translation[symbols[index + 1]] > translation[symbol]
//               ? -1
//               : 1),
//     0
//   );
// }

// coins[0] = 1 céntimo
// coins[1] = 2 céntimos
// coins[2] = 5 céntimos
// coins[3] = 10 céntimos
// coins[4] = 20 céntimos
// coins[5] = 50 céntimos

console.log(getCoins(51)); // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
console.log(getCoins(3)); // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
console.log(getCoins(5)); // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
console.log(getCoins(16)); // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
console.log(getCoins(100)); // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos

// function getCoins(change) {
//   // ¡No olvides compartir tu solución en redes!
//   let c = change;
//   let array = Array(6).fill(0);
//   do {
//     if (c - 50 >= 0) (c -= 50), array[5]++;
//     else if (c - 20 >= 0) (c -= 20), array[4]++;
//     else if (c - 10 >= 0) (c -= 10), array[3]++;
//     else if (c - 5 >= 0) (c -= 5), array[2]++;
//     else if (c - 2 >= 0) (c -= 2), array[1]++;
//     else (c -= 1), array[0]++;
//   } while (c > 0);
//   return array;
// }

// otra forma 2️⃣
// function getCoins(change) {
//   const coinsValues = [1, 2, 5, 10, 20, 50];
//   return coinsValues.reduceRight((coins, coinValue, index) => {
//     coins[index] = Math.floor(change / coinValue);
//     change = change % coinValue;
//     return coins;
//   }, Array(coinsValues.length).fill(0));
// }
// otra forma 3️⃣
function getCoins(change) {
  return [1, 2, 5, 10, 20, 50].reduceRight(
    (acc, coinValue) => [
      Math.floor(change / coinValue),
      ...acc,
      ...(void (change %= coinValue) || []),
    ],
    []
  );
}

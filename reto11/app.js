console.log(shouldBuyFidelity(3)); // false -> Mejor comprar tickets de un sólo uso
console.log(shouldBuyFidelity(100)); // true -> Mejor comprar tarjeta fidelidad

// function shouldBuyFidelity(times) {
//   // ¡No olvides compartir tu solución en redes!
//   const normal = 12 * times;
//   let cardFidelity = 250;
//   for (let i = 1; i < times + 1; i++) cardFidelity += 12 * 0.75 ** i;
//   return normal > cardFidelity ? true : false;
// }

// otra forma 2️⃣
function shouldBuyFidelity(time) {
  const calculateDiscount = (t) =>
    t === 0 ? 0 : Math.pow(0.75, t) * 12 + calculateDiscount(t - 1);
  return 12 * time > 250 + calculateDiscount(time) ? true : false;
}

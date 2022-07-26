console.log(checkSledJump([1, 2, 3, 2, 1])); // true: sube y baja de forma estricta
console.log(checkSledJump([0, 1, 0])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 3, 2, 1])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 1000, 1])); // -> true: sube y baja de forma estricta

console.log(checkSledJump([2, 4, 4, 6, 2])); // false: no sube de forma estricta
console.log(checkSledJump([1, 2, 3])); // false: sólo sube
console.log(checkSledJump([1, 2, 3, 2, 1, 2, 3])); // false: sube y baja y sube... ¡no vale!
console.log(checkSledJump([2, 1, 2, 3, 2]));

function checkSledJump(heights) {
  // ¡No olvides compartir tu solución en redes!
  const length = heights.length - 1;
  if (heights[0] > heights[1]) return false;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] === heights[i + 1]) return false;
  }
  if (heights[0] === heights[length] || heights[0] + 1 === heights[length]) {
    return true;
  }
  return false;
}

// otra forma 2️⃣
// function checkSledJump(heights) {
//   // ¡No olvides compartir tu solución en redes!
//   let up = true;
//   let lastValue = heights[0];
//   for (let i = 1; i < heights.length; i++) {
//     if (heights[i] === lastValue || (!up && heights[i] > lastValue))
//       return false;
//     if (up && lastValue > heights[i]) up = false;
//     lastValue = heights[i];
//   }
//   return !up;
// }

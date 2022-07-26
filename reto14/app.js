console.log(missingReindeer([0, 2, 3])); // -> 1
console.log(missingReindeer([5, 6, 1, 2, 3, 7, 0])); // -> 4
console.log(missingReindeer([0, 1])); // -> 2 (¡es el último el que falta!)
console.log(missingReindeer([3, 0, 1])); // -> 2
console.log(missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1])); // -> 8
console.log(missingReindeer([0])); // -> 1 (¡es el último el que falta!)

function missingReindeer(ids) {
  // ¡No olvides compartir tu solución en redes!
  for (let i = 0; i < ids.length + 1; i++) {
    if (!ids.includes(i)) {
      return i;
    }
  }
}
// otra forma 2️⃣
function missingReindeer(ids) {
  return (
    [
      ...ids
        .reduce((acc, id) => {
          acc.delete(id);
          return acc;
        }, new Set([...Array(ids.length).keys()]))
        .values(),
    ][0] ?? ids.length
  );
}

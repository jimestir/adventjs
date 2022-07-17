const height = 3;

//        - Error - (termina con salto de linea, no es la mejor forma de resolverlo)

// let increasingAsterisk = 1;
// if (height <= 100 && height >= 1) {
//   let arbol = `${"_".repeat(height - 1)}${"*".repeat(
//     increasingAsterisk
//   )}${"_".repeat(height - 1)} \n`;
//   for (let i = 1; i < height; i++) {
//     increasingAsterisk += 2;
//     arbol += `${"_".repeat(height - (i + 1))}${"*".repeat(
//       increasingAsterisk
//     )}${"_".repeat(height - (i + 1))} \n`;
//     console.log(i);
//   }
//   const baseArbol = `${"_".repeat(height - 1)}#${"_".repeat(height - 1)} \n`;
//   arbol += baseArbol.repeat(2);
//   console.log(arbol);
// }

//        - Mejor forma -

let arbol = "";
for (let i = 1; i <= height + 2; i++) {
  // (i*2) seran numeros pares y para llevarlos a numeros imaperes +1 o -1
  let numberAsterisk = i * 2 - 1;
  // andescore me servira para los * y los #"
  let anderscore = i <= height ? height - i : height - 1;
  // necesito iterarlo tres veces para poner los tres patrones "__""#""__" o "__""*""__"
  for (let j = 0; j < 3; j++) {
    arbol +=
      j != 1
        ? // Impresion de primer y ultimo patron
          "_".repeat(anderscore)
        : // Impresion del patron central
        i <= height
        ? "*".repeat(numberAsterisk)
        : "#";
  }

  arbol += i <= height + 1 ? "\n" : "";
}
console.log(arbol);

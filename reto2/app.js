// me genera un array sin espacios

// const carta =
//   "      bici coche balon _playstation       bici coche peluche       ";
// const arrCarta = carta.split(" ");

// const arrCartaTachado = arrCarta.filter(function (element) {
//   if (element !== "") {
//     return element.includes("_") === false;
//   }
// });

// //manera poco ortodoxo

// let objectCarta = {};
// for (let j = 0; j < arrCartaTachado.length; j++) {
//   let count = 0;
//   for (let i = 0; i < arrCartaTachado.length; i++) {
//     if (arrCartaTachado[j] === arrCartaTachado[i]) {
//       count++;
//     }
//   }
//   objectCarta[arrCartaTachado[j]] = count;
// }
// console.log(objectCarta);

//mejor manera

const carta =
  "      bici coche         balon _playstation       bici coche peluche       ";
// transformando cadena en un array de elementos
const arrCarta = carta.trim().replace(/\s+/g, ",").split(",");
const filterCarta = arrCarta.filter(function (curr, idx, src) {
  return !curr.includes("_");
});
let cartas = filterCarta.reduce(function (acc, curr, idx, src) {
  console.log(acc, curr);
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

console.log(cartas);

// --------------- ejemplo que use para hacer el array.prototype.reduce()
// // Primer ejercicio
// /*
//     Se realizó una encuesta a varias personas preguntando su color favorito,
//     indicar a cuantás personas le gusta cada color
// */
// const encuestaColorFavorito = [
//   {
//     nombre: "Oscar",
//     colorFavorito: "rojo",
//   },
//   {
//     nombre: "Juan",
//     colorFavorito: "verde",
//   },
//   {
//     nombre: "Jessica",
//     colorFavorito: "rosado",
//   },
//   {
//     nombre: "Julian",
//     colorFavorito: "verde",
//   },
//   {
//     nombre: "Luna",
//     colorFavorito: "rosado",
//   },
//   {
//     nombre: "Ana",
//     colorFavorito: "negro",
//   },
// ];
// // console.log(encuestaColorFavorito[0]["colorFavorito"]);
// // Lo que esperamos

// /*
// {
//     rojo: 1,
//     verde: 2,
//     rosado: 2,
//     negro: 1
// }
// */

// // Solución

// const totalColores = encuestaColorFavorito.reduce((prev, curr) => {
//   console.log("Elemento actual");
//   console.log(JSON.stringify(curr));

//   console.log("Valor de prev");
//   console.log(JSON.stringify(prev));

//   prev[curr["colorFavorito"]] = (prev[curr["colorFavorito"]] || 0) + 1;

//   console.log("prev modificado");
//   console.log(JSON.stringify(prev));

//   console.log("----------------------");
//   return prev;
// }, {});

// console.log({
//   totalColores,
// });

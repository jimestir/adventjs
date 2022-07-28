const carriers = [
  ["dapelu", 5, ["midu", "jelowing"]],
  ["midu", 2, []],
  ["jelowing", 2, []],
];

console.log(countPackages(carriers, "dapelu")); // 9
// 5 de dapelu, 2 de midu y 2 de jelowing = 9

const carriers2 = [
  ["lolivier", 8, ["camila", "jesuspoleo"]],
  ["camila", 5, ["sergiomartinez", "conchaasensio"]],
  ["jesuspoleo", 4, []],
  ["sergiomartinez", 4, []],
  ["conchaasensio", 3, ["facundocapua", "faviola"]],
  ["facundocapua", 2, []],
  ["faviola", 1, []],
];

console.log(countPackages(carriers2, "camila")); // 15
// 5 de camila, 4 de sergiomartinez, 3 de conchaasensio, 2 de facundocapua y 1 de faviola = 15

// function countPackages(carriers, carrierID) {
//   // ¡No olvides compartir tu solución en redes!
//   const set = new Set().add(carrierID);
//   let result = 0;
//   for (let carrier of carriers) {
//     if (set.delete(carrier[0])) {
//       carrier[2].forEach((subordinate) => set.add(subordinate));
//       result += carrier[1];
//     }
//   }
//   return result;
// }

// otra forma 2️⃣

function countPackages(carriers, carrierID) {
  let countArr = carriers.filter((x) => x[0] == carrierID);
  if (countArr.length > 0) {
    let tempcount = 0;
    countArr[0][2].forEach((_carrierID) => {
      tempcount += countPackages(carriers, _carrierID);
    });
    return countArr[0][1] + tempcount;
  }
}

const files = ["photo", "postcard", "photo", "photo", "video"];
console.log(fixFiles(files)); // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

const files2 = ["file", "file", "file", "game", "game"];
console.log(fixFiles(files2)); // ['file', 'file(1)', 'file(2)', 'game', 'game(1)']

// ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
const files3 = ["file", "file(1)", "icon", "icon(1)", "icon(1)"];
console.log(fixFiles(files3)); // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']
//me produjo error 💥
// function fixFiles(files) {
//   // ¡No olvides compartir tu solución en redes!
//   let arr = [];
//   let cant = 0;
//   for (let i = 0; i < files.length; i++) {
//     if (arr.includes(files[i])) {
//       cant = arr.filter((x) => x == files[i]).length + cant;
//       arr.push(files[i] + `(${cant})`);
//     } else {
//       arr.push(files[i]);
//       cant = 0;
//     }
//   }
//   return arr;
// }
// no me produjo erro ✅
function fixFiles(files) {
  enumerador = function (file) {
    if (this[file]) file += `(${this[file]++})`;
    else this[file] = 1;
    return file;
  };
  return files.map(enumerador, {});
}

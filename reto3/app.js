// letter true
// const letter = "bici coche (balon) bici coche  peluche";
// const letter = "(muñeca) consola bici";
// letter false
// const letter = "bici coche (balón bici coche";
// const letter = "peluche (bici [coche) bici coche balón";
// const letter = "(peluche {) bici";
const letter = "() bici";
// const letter = ")bici( casa play";
const re = /\(([a-zA-ZÀ-ÿ\u00f1\u00d1]+)\)/i;
if (
  re.test(letter) &&
  !letter.includes("[") &&
  !letter.includes("{") &&
  !letter.includes("()")
) {
  console.log(re.test(letter));
  return true;
} else {
  console.log(re.test(letter));
  return false;
}

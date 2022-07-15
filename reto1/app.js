//Por ejemplo, si tenemos las ovejas:
const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
];

// method with forEach()

let filterOvejas = [];
ovejas.forEach((object) => {
  const { name, color } = object;
  const re = /a/i;
  const re3 = /n/i;
  const re2 = /rojo/i;
  if (re.test(name) && re2.test(color) && re3.test(name)) {
    filterOvejas.push(object);
  }
});
console.log(filterOvejas, "method forEach()");

// method with filter()

const filterOvejas1 = ovejas.filter((oveja) => {
  const { name, color } = oveja;
  const re = /a/i;
  const re2 = /n/i;
  const re3 = /rojo/i;
  return re.test(name) && re2.test(name) && re3.test(color);
});

console.log(filterOvejas1, "method filter()");

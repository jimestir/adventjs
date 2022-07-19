const almacen = {
  estanteria1: {
    cajon1: {
      producto1: "coca-cola",
      producto2: "fanta",
      producto3: "sprite",
    },
  },
  estanteria2: {
    cajon1: "vacio",
    cajon2: {
      producto1: "pantalones",
      producto2: "camiseta", // <- ¡Está aquí!
    },
  },
};

console.log(contains(almacen, "camiseta")); // true

const otroAlmacen = {
  baul: {
    fondo: {
      objeto: "cd-rom",
      "otro-objeto": "disquette",
      "otra-cosa": "mando",
    },
  },
};
contains(otroAlmacen, "gameboy"); // false

function contains(store, product) {
  if (store === product) return true;
  if (
    !(store && typeof store == "object" && Object.values(store).length) ||
    Array.isArray(store)
  ) {
    return false;
  }
  const value = Object.values(store);
  for (let i = 0; i < value.length; i++) {
    if (contains(value[i], product)) return true;
  }
  return false;
}

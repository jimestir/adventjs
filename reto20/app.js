console.log(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho')); // true
console.log(
  pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!')
); // true

console.log(
  pangram(
    'Esto es una frase larga pero no tiene todas las letras del abecedario'
  )
); // false
console.log(pangram('De la a a la z, nos faltan letras')); // false

// function pangram(letter) {
//   // ¡No olvides compartir tu solución en redes!
//   const re = /[:punct:]/g;
//   if (re.test(letter)) return true;
//   return false;
// }
function pangram(letter) {
  return (
    new Set(
      letter
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u0302]|[\u0304-\u036F]/g, '')
        .replace(/[^\u0303\w]/g, '') //la ñ no la puede quitar, pertenece al abc y con \w para quitar signos
    ).size === 27
  );
}

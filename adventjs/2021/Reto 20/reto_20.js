function pangram(letter) {
  // Letras para sustituir. En primer lugar el valor correcto, en segundo, todas las opciones que se reemplazarán
  const changes = [
    ['a', ['á', 'à', 'ä']],
    ['e', ['é', 'è']],
    ['i', ['í', 'ì', 'ï']],
    ['o', ['ó', 'ò']],
    ['u', ['ú', 'ù', 'ü']],
  ];
  // Todas las opciones tras hacer los cambios
  const alphabet = 'abcdefghijklmnñopqrstuvwxy';

  // Convertir a minúsculas para cuadarr con "alphabet" y para reemplazar
  letter = letter.toLowerCase();

  for (const [valid, change] of changes) {
    change.forEach((c) => letter.replace(c, valid));
  }

  return Array.from(alphabet).every((l) => letter.includes(l));
}

pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho'); // true
// pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!') // true

// pangram('Esto es una frase larga pero no tiene todas las letras del abecedario') // false
// pangram('De la a a la z, nos faltan letras') // false

function createXmasTree(height) {
  let res = '';
  // Ancho del árbol
  const width = (height - 1) * 2 + 1;
  // Fórmula para calcular estrellas por línea
  const calcStars = (index) => index * 2 + 1;

  // COPA
  for (let i = 0; i < height; i++) {
    const num = calcStars(i);

    const underscore = '_'.repeat((width - num) / 2);
    const stars = '*'.repeat(num);

    res += `${underscore}${stars}${underscore}\n`;
  }

  // PIE
  const underscore = '_'.repeat((width - 1) / 2);
  const linea = `${underscore}#${underscore}`;

  res += `${linea}\n${linea}`;

  return res;
}

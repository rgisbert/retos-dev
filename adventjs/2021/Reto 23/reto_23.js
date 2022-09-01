function canReconfigure(from, to) {
  // Primera condición
  if (from.length !== to.length) return false;

  let result = true;
  // Guarda las sustituciones de letras
  const letters = new Map();
  // Función auxiliar para evaluar la condición
  const rightLetter = (a, b) => !(letters.has(a) && letters.get(a) !== b);

  for (let i = 0; i < from.length; i++) {
    const letFrom = from[i];
    const letTo = to[i];

    result = rightLetter(letFrom, letTo);
    if (!result) break;

    result = rightLetter(letTo, letFrom);
    if (!result) break;

    // Establecer valores para letras ya asignadas
    letters.set(letFrom, letTo);
    letters.set(letTo, letFrom);
  }

  return result;
}

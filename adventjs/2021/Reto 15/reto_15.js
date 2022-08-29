const ordenCorrecto = (arr = [], ascendente = true) => {
  // Si sólo está el valor máximo, no es válido
  if (arr.length <= 1) return false;

  // Para aprovechar la función para ambos casos
  if (!ascendente) arr.reverse();

  // Comprobar el actual con el siguiente para saber si es menor
  let result = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    result += arr[i] < arr[i + 1] ? 0 : 1;
  }

  // Si nunca incrementó, está bien
  return result === 0;
};

function checkSledJump(heights) {
  // Teórico punto alto de la parábola
  const higherPoint = Math.max(...heights);
  // Índice de ese punto alto
  const indexHigherPoint = heights.findIndex((h) => h === higherPoint);

  // Subida
  const up = heights.slice(0, indexHigherPoint + 1);
  const upResult = ordenCorrecto(up);

  // Bajada
  const down = heights.slice(indexHigherPoint, heights.length);
  const downResult = ordenCorrecto(down, false);

  return upResult && downResult;
}

// Función del ejercicio 22
function countDecorations(bigTree) {
  let sumDecorators = 0;

  // Recorrer cada posición del objeto
  for (const [key, value] of Object.entries(bigTree)) {
    // Si es value, se suma
    if (key === 'value') sumDecorators += value;
    // Si es alguna de las posiciones y tiene valor diferente a null, se vuelve a llamar
    if (['left', 'right'].includes(key) && !!value)
      sumDecorators += countDecorations(bigTree[key]);
  }

  return sumDecorators;
}

function checkIsSameTree(treeA, treeB) {
  const a = countDecorations(treeA);
  const b = countDecorations(treeB);

  return a === b;
}

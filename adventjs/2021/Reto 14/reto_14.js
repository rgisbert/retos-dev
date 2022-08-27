function missingReindeer(ids) {
  // Crear un array completo, ordenado, y con todos los valores que debería tener
  const completo = Array(ids.length + 1)
    .fill(0)
    .map((_, i) => i);
  // Ordenar para comparación
  ids.sort((a, b) => a - b);

  // Guardar sólo con el que falte
  const animalPerdido = completo.filter((a) => !ids.includes(a));

  return animalPerdido[0];
}

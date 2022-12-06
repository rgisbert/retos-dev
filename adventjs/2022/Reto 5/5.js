/**
 * ! Reto resuelto gracias a la Comunidad de midudev en discord.
 * * Sólo gracias a ellos ha sido posible resolver la problemática de combinatoria
 * * y empezar a trabajar a partir de ahí.
 * 
 * * ¡Gracias!
 */
function getMaxGifts(giftsCities, maxGifts, maxCities) {
  const combinaciones = [
    ...giftsCities.reduce(
      (x, y) => x.concat(x.map((x) => [y].concat(x))),
      [[]]
    ),
  ].filter((subArr) => subArr.length <= maxCities);

  const sumasValidas = combinaciones
    .map((combinacion) => combinacion.reduce((a, b) => a + b, 0))
    .filter((suma) => suma <= maxGifts)
    .sort((a, b) => b - a);

  return sumasValidas[0] || 0;
}

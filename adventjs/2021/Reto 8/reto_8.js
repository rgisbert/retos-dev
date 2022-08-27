function maxProfit(prices) {
  let maxBenefit = -1;
  const longitud = prices.length;

  for (let i = 0; i < longitud; i++) {
    // Obtener el número más alto (que es el único que interesa), de las posiciones que siguen a la actual
    const max = Math.max(...prices.slice(i + 1, longitud));
    const dif = max - prices[i];

    maxBenefit = maxBenefit < dif ? dif : maxBenefit;
  }

  return maxBenefit > 0 ? maxBenefit : -1;
}

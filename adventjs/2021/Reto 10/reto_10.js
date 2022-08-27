function getCoins(change) {
  const coinsCentimo = [1, 2, 5, 10, 20, 50];
  let i = coinsCentimo.length;
  let result = Array(i).fill(0);

  while (change > 0) {
    i--;

    while (change >= coinsCentimo[i]) {
      result[i]++;
      change -= coinsCentimo[i];
    }
  }

  return result;
}

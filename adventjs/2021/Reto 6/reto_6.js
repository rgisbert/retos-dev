function sumPairs(numbers, result) {
  let res = null;
  let i = 0;

  while (!res && i < numbers.length) {
    const test = numbers.slice(i, numbers.length);
    let j = 1;

    while (!res && j < test.length) {
      if (result === test[0] + test[j]) {
        res = [test[0], test[j]];
        break;
      }

      j++;
    }

    if (test.length > 2) {
      i++;
    } else {
      break;
    }
  }

  return res;
}

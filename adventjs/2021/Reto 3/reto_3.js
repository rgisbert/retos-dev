function isValid(letter) {
  const existeCaracterErroneo = (texto) => {
    let res = false;

    ['{', '}', '[', ']', '(', ')'].forEach((c) => {
      if (texto.includes(c)) {
        res = true;
      }
    });

    return res;
  };

  // Juntar paréntesis
  const arrayParentesis = [];
  const fraseArray = Array.from(letter);

  fraseArray.forEach((c, index) => {
    if (c === '(') {
      arrayParentesis.push([index + 1, undefined]);
    }

    if (c === ')') {
      let encontrado = false;
      let i = arrayParentesis.length - 1;

      while (!encontrado && i >= 0) {
        if (arrayParentesis[i][1] === undefined) {
          arrayParentesis[i][1] = index;
          encontrado = true;
        }

        i--;
      }

      if (!encontrado) return false;
    }
  });

  if (arrayParentesis.length > 0) {
    let res = true;

    arrayParentesis.forEach((posic, i) => {
      if (posic[1] === undefined || posic[0] === posic[1]) {
        res = false;
      }

      const test = letter.substring(posic[0], posic[1]);

      if (existeCaracterErroneo(test)) {
        res = false;
      }
    });
    return res;
  } else {
    return !existeCaracterErroneo(letter);
  }
}

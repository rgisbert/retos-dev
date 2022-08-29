const getValueOfSymbol = (symbol) => {
  const code = new Map([
    ['.', 1],
    [',', 5],
    [':', 10],
    [';', 50],
    ['!', 100],
  ]);

  // Sino lo encuentra, devolverá undefined
  return code.get(symbol);
};

function decodeNumber(symbols) {
  // Convertirlo en Array
  const arrSymbols = Array.from(symbols);

  // Asignar posición a valor numérico
  let arrValues = arrSymbols.map(getValueOfSymbol);

  // Comprobar que todos sean válidos
  if (!arrValues.every((val) => val !== undefined)) return NaN;

  // Comprobar posición siguiente
  arrValues = arrValues.map((value, index, arr) => {
    // Comprobar con el siguiente, si existe
    if (index < arr.length - 1) {
      return value < arr[index + 1] ? -value : value;
    }

    // El último lo devuelve igual, no tiene siguiente para comprobar
    return value;
  });

  // sumar
  const sum = arrValues.reduce((total, value) => total + value);

  return sum;
}

function groupBy(collection, it) {
  const res = {};
  // Sino existe la clave la crea, en cualquier caso, añade el valor
  const rellenar = (key, value) => {
    if (!res[key]) res[key] = [];
    res[key].push(value);
  };

  // Evita switch, el resto era igual para función o string
  const clave = (valor) => (typeof it === 'function' ? it(valor) : valor[it]);
  collection.map((c) => rellenar(clave(c), c));

  return res;
}

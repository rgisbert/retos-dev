function contarOvejas(ovejas) {
  const regExpA = new RegExp('a', 'i');
  const regExpN = new RegExp('n', 'i');

  ovejas = ovejas.filter((oveja) => {
    if (
      oveja.color === 'rojo' &&
      regExpA.test(oveja.name) &&
      regExpN.test(oveja.name)
    ) {
      return oveja;
    }
  });

  return ovejas;
}

function listGifts(letter) {
  const list = {};
  // Filter para eliminar los espacios en blanco y quedarme sólo con las palabras
  const cleanArr = letter.split(' ').filter((l) => l.length > 0);

  cleanArr.forEach((present) => {
    if (!present.startsWith('_')) {
      list[present] = (list[present] || 0) + 1;
    }
  });

  return list;
}

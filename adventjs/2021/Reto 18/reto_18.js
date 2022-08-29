function fixFiles(files) {
  const counter = {};

  for (let i in files) {
    const file = files[i];

    // Inicializzo con 1 porque con valor 0, la expresión !counter[file] === true
    counter[file] = !counter[file] ? 1 : (counter[file] += 1);
    files[i] = counter[file] === 1 ? file : `${file}(${counter[file] - 1})`;
  }
  return files;
}

function createCube(size) {
  const cube = new Array(size).fill('');

  cube.forEach((_, idx) => {
    cube[idx] += ' '.repeat(size - idx - 1);
    cube[idx] += '/\\'.repeat(idx + 1);
    cube[idx] += '_\\'.repeat(size);
  });

  const cubeMirror = [...cube]
    .reverse()
    .map((element) => element.replaceAll('/\\', '\\/').replaceAll('_\\', '_/'));

  return cube.concat(cubeMirror).join('\n');
}

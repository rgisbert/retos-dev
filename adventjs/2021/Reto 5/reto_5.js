function daysToXmas(date) {
  const navidad = new Date('Dec 25, 2021');
  const res = (navidad.getTime() - date.getTime()) / (1000 * 60 * 60 * 24);

  return Math.ceil(res);
}

function wrapGifts(gifts) {
  const res = ['*'.repeat(gifts[0].length + 2)];

  gifts.forEach((gift) => res.push(`*${gift}*`));

  res.push(res[0]);

  return res;
}

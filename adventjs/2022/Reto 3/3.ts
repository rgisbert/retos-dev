const calcWeight = (values: string[], multiply: number = 1): number => {
  try {
    const lng = values.reduce((total, current) => total + current.length, 0);

    return lng * multiply;
  } catch (e) {
    return 0;
  }
};

function distributeGifts(packOfGifts: string[], reindeers: string[]): number {
  const giftsWeight: number = calcWeight( packOfGifts );
  const reindeersWeight: number = calcWeight(reindeers, 2);

  return Math.floor( reindeersWeight / giftsWeight);
}

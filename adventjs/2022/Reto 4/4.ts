interface Box {
  l: number;
  w: number;
  h: number;
}

const sortedBoxes = (boxes: Box[]): Box[] => {
  return boxes.sort((a, b) => a.l - b.l || a.w - b.w || a.h - b.h);
};

const boxFitsInside = (smallBox: Box, largeBox: Box): boolean => {
  return (
    smallBox.l < largeBox.l &&
    smallBox.w < largeBox.w &&
    smallBox.h < largeBox.h
  );
};

function fitsInOneBox(boxes: Box[]): boolean {
  if (boxes.length < 2) return false;

  const boxesInOrder: Box[] = sortedBoxes(boxes);

  for (let i = 0; i < boxesInOrder.length - 1; i++) {
    const res = boxFitsInside(boxesInOrder[i], boxesInOrder[i + 1]);

    if (!res) return false;
  }

  return true;
}
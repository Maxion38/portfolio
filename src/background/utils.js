export function randomOutside(min, innerMin, innerMax, max) {
  const range1 = innerMin - min;
  const range2 = max - innerMax;
  const r = Math.random() * (range1 + range2);

  if (r < range1) {
    return min + r;
  } else {
    return innerMax + (r - range1);
  }
}

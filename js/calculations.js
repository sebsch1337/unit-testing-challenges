function cubicVolume(length, width, depth) {
  const calculatedVolume = length * width * depth;
  if (calculatedVolume < 0) return 0;
  return calculatedVolume;
}

export { cubicVolume };

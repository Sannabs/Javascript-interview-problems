function countPeaks(values) {
  if (!values || values.length < 3) return 0;
  let peakCount = 0;
  for (let i = 1; i < values.length - 1; i++) {
    if (
      (values[i] >= values[i - 1] + 5 && values[i] >= values[i + 1] + 5) ||
      (values[i] <= values[i - 1] - 5 && values[i] <= values[i + 1] - 5)
    ) {
      peakCount++;
    }
  }
  return peakCount;
}

console.log(countPeaks([1, 2, 10, 2, 1, 15, 2, 1]));
function countPeaks(values) {
  if (!values || values.length < 3) return 0;
  let peakCount = 0;

  for (let value of values) {
    if (
      (value[i] >= value[i - 1] + 5 && value[i] >= [i + 1]) ||
      (value[i] <= value[i - 1] && value[i] <= value[i + 1])
    ) {
      peakCount++;
    }
  }

  return peakCount;
}


countPeaks[1,2,3,4,5,6]


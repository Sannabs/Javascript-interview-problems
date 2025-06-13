function solve(values) {
  if (values.length === 0) return null;

  return values.reduce((sum, val) => sum + val, 0);
}

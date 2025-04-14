function chunkArray(arr, size) {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size);
    result.push(chunk);
  }

  return result;
}

console.log(chunkArray([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
console.log(chunkArray([1, 2, 3, 4, 5, 6], 3)); // [[1, 2, 3], [4, 5, 6]]
console.log(chunkArray([1, 2, 3], 1)); // [[1], [2], [3]]

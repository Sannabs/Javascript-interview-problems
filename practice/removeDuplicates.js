function removeDuplicates(arr) {
  let nodups = [];
  for (let num of arr) {
    if (!nodups.includes(num)) {
      nodups.push(num);
    }
  }

  return nodups;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 3, 5]));
// Output: [1, 2, 3, 4, 5]

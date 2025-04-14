function findMissingNumber(arr, n) {
  let allNums = [];

  for (let i = 1; i <= n; i++) {
    allNums.push(i);
  }

  for (let num of allNums) {
    if (!arr.includes(num)) return num;
  }
}


console.log(findMissingNumber([1, 2, 4, 5, 6], 6))
console.log(findMissingNumber([1, 3, 4, 6, 2], 6))
console.log(findMissingNumber([1, 2, 3], 4))

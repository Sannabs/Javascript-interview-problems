
function sumArray (arr) {
  if(arr.length === 0) return null
  return arr.reduce(((sum, num) => sum + num),0)
}

console.log(sumArray([1, 2, 3, 4, 5]));

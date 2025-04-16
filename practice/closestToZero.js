function closestToZero(arr) {
  let closest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i] < Math.abs(closest))) {
      closest = arr[i];
    } else if (Math.abs(arr[i]) === Math.abs(closest) && arr[i] > closest) {
      closest = arr[i];
    }
  }

  return closest
}
console.log(closestToZero([2, -1, -3, 1])); // Output: 1
console.log(closestToZero([-2, -2, -2]));   // Output: -2
console.log(closestToZero([5, -5, 5, 0]));  // Output: 0

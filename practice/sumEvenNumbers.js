function sumEvenNumbers(arr) {
    let result = [];
  
    for (let item of arr) {
      if (Array.isArray(item)) {
        result = result.concat(sumEvenNumbers(item)); // recursively flatten
      } else {
        result.push(item); // push number to result
      }
    }
  
    // sum only even numbers
    return result.reduce((sum, num) => sum + (num % 2 === 0 ? num : 0), 0);
  }
  
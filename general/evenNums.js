function isEven(arr) {
  return arr.filter(nums => nums % 2 === 0)
}

console.log(isEven([1, 2, 3, 4, 5, 6, 8])); // [2, 4, 6]



function method2even(arr2) {
  const evens = []
  for(let i = 1 ; i <arr2.length; i ++) {
    if(arr2[i] % 2 === 0) {
      evens.push(arr2[i])
    
    }
  }
  return evens

  
}
console.log(method2even([1, 2, 3, 4, 5, 6, 8])); // [2, 4, 6]
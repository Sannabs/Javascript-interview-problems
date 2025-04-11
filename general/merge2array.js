merge = (arr1, arr2) => {
 return [...arr1, ...arr2].sort((a, b) => a - b);
}

console.log(merge([1, 2, 3], [4, 5, 6])) // Output: [1, 2, 3, 4, 5, 6]



merger = (arr1, arr2) => {
    return [...arr1, ...arr2].sort((a, b) => b - a)
}

console.log(merger([1, 2, 3], [4, 5, 6])) // Output: [1, 2, 3, 4, 5, 6]
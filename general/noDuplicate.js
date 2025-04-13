function noDups (arr) {
    return [...new Set(arr)]
}

// Test cases
console.log(noDups([1, 2, 3, 3, 3, 4, 5])) // Set(5) { 1, 2, 3, 4, 5 }



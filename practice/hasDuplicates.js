function hasDuplicates(arr) {

    const seen = new Set()

    for(let item of arr) {
        if(seen.has(item)) {
            return true
        }
         seen.add(item)
    }
    return false
}

console.log(hasDuplicates([1, 2, 3, 4, 5]));

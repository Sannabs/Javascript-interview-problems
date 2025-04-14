function firstNonRepeatingChar(str) {

    let cleaned = str.toLowerCase()
    let charCount = {}
    for (let char of cleaned) {
        if(!charCount[char] ){
            charCount[char] = 1
        } else {
            charCount[char]++
        }
    }

    for(let char of cleaned) {
        if(charCount[char] === 1) return char
    }
    return null
}


console.log(firstNonRepeatingChar("aabbccddeefg"))
console.log(firstNonRepeatingChar("racecars"))
console.log(firstNonRepeatingChar("aabbcc"))
// function isPalindrome(str) {

//     let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
//     let reversed = ''

//     for (let i = cleanedStr.length - 1; i >= 0; i--){
//         reversed += cleanedStr[i]
//     }

//     return reversed === cleanedStr
// }

function isPalindrome(str){
    let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

    let reversed = cleanedStr.split('').reverse().join('')
    return reversed ===cleanedStr
}

console.log(isPalindrome("A man a plan a canal Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false

// function firstNonRepeatingChar(str) {
//   const charCount = {}; // Step 1: Count occurrences

//   for (let char of str) {
//     // charCount[char] === undefined ?  (charCount[char]) = 1 : charCount[char]++;
//     charCount[char] ||= 0;
//     charCount[char]++;
//   }

//   for (let char of str) {
//     // Step 2: Find first character with count 1
//     if (charCount[char] === 1) {
//       return char;
//     }
//   }

//   return null; // If no unique character found
// }

// console.log(firstNonRepeatingChar("aabbcddf")); // Output: "c"
// console.log(firstNonRepeatingChar("swiss")); // Output: "w"
// console.log(firstNonRepeatingChar("aabbcc")); // Output: null (No non-repeating character)

// function firstNonRepeatingChar(str) {
//   const characters = {};

//   for (let char of str) {
//     characters[char] ||= 0;
//     characters[char]++;
//   }

//   for (let char of str) {
//     if (characters[char] === 1) {
//       return char;
//     }
//   }
//   return null;
// }

function firstNonRepeatingChar(str) {
  const charCount = {};

  for (let char of str) {
    charCount[char] ||= 0;
    charCount[char]++;
  }

  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }
  return null;

}
console.log(firstNonRepeatingChar("google")); // 'l'
console.log(firstNonRepeatingChar("aabbcc")); // null
console.log(firstNonRepeatingChar("aabbc")); // 'c'

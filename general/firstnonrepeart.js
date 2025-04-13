
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



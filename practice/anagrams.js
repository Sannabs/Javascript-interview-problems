function areAnagrams(str1, str2) {
   const cleanStr1 = str1.toLowerCase().replace(/\s/g, '').split('').sort().join('')
   const cleanStr2 = str2.toLowerCase().replace(/\s/g, '').split('').sort().join('')


   return cleanStr1 === cleanStr2
}


console.log(areAnagrams("Listen", "Silent"));       // true
console.log(areAnagrams("hello", "bellow"));        // false
console.log(areAnagrams("Dormitory", "dirty room"));// true

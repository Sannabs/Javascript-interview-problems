function charFrequency(str) {

   let cleaned = str.replace(/\s/g, '').toLowerCase()
    let freq = {};
    for (let char of cleaned) {
        if (!freq[char]) {
            freq[char] = 1;
        } else {
            freq[char]++;
        }
    }    return freq;

}

console.log(charFrequency("Hello World"))
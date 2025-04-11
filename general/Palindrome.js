function isPalindrome(pal) {
    return pal === pal.split('').reverse().join('');
}
console.log(isPalindrome('racecar'))
console.log(isPalindrome('hello'))




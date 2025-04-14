function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
console.log(capitalizeWords("sanna b.s jammeh is coding"));
// → "Sanna B.S Jammeh Is Coding"

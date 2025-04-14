function capitalizeWords(str) {
    return str
      .split(' ') // break into words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // capitalize first letter
      .join(' '); // put the words back together
  }
  
  console.log(capitalizeWords("sanna b.s jammeh is coding"));
// → "Sanna B.S Jammeh Is Coding"

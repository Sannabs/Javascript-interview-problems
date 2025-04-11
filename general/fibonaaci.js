function fibonnaci(n) {
  let a = 0,
    b = 1,
    temp;

  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }

  return n === 0 ? a : b;
}


console.log(fibonnaci(1)); 

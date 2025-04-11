reverseme = (str) => {
  return str.split("").reverse().join("");
};


console.log(reverseme("sanna")); // Output: "olleh"



function reverseWithoutMethod(str) {
  let reversed = "";
  for(let i = str.length-1; i >= 0; i --) {
    reversed += str[i];
  }
  return reversed
}


console.log(reverseWithoutMethod("fator")); // Output: "olleh"
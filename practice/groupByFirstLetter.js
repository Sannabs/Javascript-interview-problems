function groupByFirstLetter(arr) {
    const grouped = {}; // create an empty object to store grouped words
  
    for (let item of arr) { // loop through each word in the array
      const firstLetter = item[0].toLowerCase(); // get the first letter in lowercase
  
      if (!grouped[firstLetter]) { // if the letter group doesn't exist yet
        grouped[firstLetter] = []; // create a new array for that letter
      }
  
      grouped[firstLetter].push(item); // add the word to the correct letter group
    }
  
    return grouped; // return the final grouped object
  }
  


console.log(groupByFirstLetter(["apple", "banana", "avocado", "blueberry", "cherry"]));
/* Output:
{
  a: ["apple", "avocado"],
  b: ["banana", "blueberry"],
  c: ["cherry"]
}
*/
function hasDuplicates(arr) {
    const seen = new Set();
  
    for (let item of arr) {
      if (seen.has(item)) {
        return true; // duplicate found
      }
      seen.add(item);
    }
  
    return false; // no duplicates
  }
  
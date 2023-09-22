function CountingDuplicates(word) {
  let counter = {};
  for (let i = 0; i < word.length; i++) {
    if (counter[word[i]] == undefined) {
      counter[word[i]] = 0;
      for (let t = 0; t < word.length; t++) {
        if (word[i] === word[t]) counter[word[i]] += 1;
      }
    }
  }

  let result = " 0 Duplicates";
  for (const letter in counter) {
    if (counter[letter] >= 2)
      result += letter + " has " + counter[letter] + " times ";
  }
  return result;
}

console.log("abcde", CountingDuplicates("abcde"));
console.log("aabbcde", CountingDuplicates("aabbcde"));
console.log("aabBcde", CountingDuplicates("aabBcde"));
console.log("indivisibility", CountingDuplicates("indivisibility"));
console.log("Indivisibilities", CountingDuplicates("Indivisibilities"));
console.log("aA11", CountingDuplicates("aA11"));
console.log("ABBA", CountingDuplicates("ABBA"));

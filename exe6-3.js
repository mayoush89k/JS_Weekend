function OrganizeStrings(word1, word2) {
  let result = "";
  for (let w = 'a'; w < 'z'; w++) {
    if (word1.includes(w) || word2.includes(w)) {
      result += w;
    }
  }
  console.log(`a: ${word1} , b: ${word2} -> ${result}`);
}
OrganizeStrings("xyaabbbccccdefww", "xxxxyyyyabklmopq")
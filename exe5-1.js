function trimming(word) {
  let newWord = "";
  if (word.length <= 2) {
    console.log("word has no enough letters");
  } else {
    for (let i = 1; i < word.length - 1; i++) {
      newWord += word.charAt(i);
    }
  }
  return newWord;
}

console.log("Trimming String -> " , trimming("Trimming String"));
console.log("Exercise 5-1 -> " , trimming("Exercise 5-1"));
console.log("Weekend Assignment -> " , trimming("Weekend Assignment"));

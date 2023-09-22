function Abbreviate(word) {
  let counter = 0;
  let newWord = word.charAt(0).toUpperCase();
  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) == " ") {
      newWord += "." + word.charAt(i + 1).toUpperCase();
    }
  }
  return newWord;
}

console.log("First Character of Sam Harris", Abbreviate("Sam Harris"));
console.log("First Character of Patrick Feeney", Abbreviate("Patrick Feeney"));

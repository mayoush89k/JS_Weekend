function MinLettersCounter(text) {
  let counter = 0;
  let min = text.length;
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " ") {
      min = counter < min ? counter : min;
      counter = 0;
    } else {
      counter++;
    }
  }
  return min;
}

console.log(
  "Simple, given a string of words, return the length of the shortest word(s). String will never be empty and you do not need to account for different data types.",
  MinLettersCounter(
    "Simple, given a string of words, return the length of the shortest word(s). String will never be empty and you do not need to account for different data types."
  )
);
console.log(
  "return length-shortest word(s). String will never be-empty and-you do-not need to-account for-different data types.",
  MinLettersCounter(
    "return length-shortest word(s). String will never be-empty and-you do-not need to-account for-different data types."
  )
);

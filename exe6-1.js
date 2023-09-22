function accum(word) {
  let newWord = "";
  for (let x = 0; x < word.length; x++) {
    for (y = 0; y <= x; y++) {
      newWord += y==0 ? word.charAt(x).toUpperCase() : word.charAt(x).toLowerCase();
    }
    newWord += x == word.length - 1 ? "" : "-";
  }
  console.log(word , " -> " , newWord);
}

accum("abcd");
accum("RqaEzty");
accum("cwAt");

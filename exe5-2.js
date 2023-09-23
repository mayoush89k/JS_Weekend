function repeatStr(count, word) {
  let repeatedString = "";
  for (let r = 0; r < count; r++) {
    repeatedString += word;
  }
  console.log(`Wrod ${word} in ${count} -> ${repeatedString}`);
}


repeatStr(6, "I")
repeatStr(5, "Hello") 
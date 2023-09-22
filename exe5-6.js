function maskify(SecretWord) {
  let maskedWord = "";
  if (SecretWord.length > 4) {
    for (let i = 0; i < SecretWord.length - 4; i++) {
      maskedWord += "#";
    }
    maskedWord += SecretWord.slice(SecretWord.length - 4);
  } else maskedWord = SecretWord;
  return maskedWord;
}

console.log(maskify("4556364607935616"));
console.log(maskify("64607935616"));
console.log(maskify("1"));
console.log(maskify(""));
console.log(maskify("Skippy"));
console.log(maskify("Nanananananananananananananan Batman!"));

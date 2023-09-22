function CamelCase(word) {
  let newWord = "";
  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) == "-" || word.charAt(i) == "_") {
      newWord += word.charAt(i + 1).toUpperCase();
      i++;
    } else {
      newWord += word.charAt(i);
    }
  }
  return newWord;
}


console.log(CamelCase('Camel_Case'));
console.log(CamelCase('Exercise_5-3'));
console.log(CamelCase('the-stealth-warrior'));
console.log(CamelCase('weekend_assignment'));
console.log(CamelCase('Bootcamp_jerusalem'));
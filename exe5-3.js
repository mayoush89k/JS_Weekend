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


console.log('Camel_Case -> ' , CamelCase('Camel_Case'));
console.log('Exercise_5-3 -> ' , CamelCase('Exercise_5-3'));
console.log('the-stealth-warrior -> ' , CamelCase('the-stealth-warrior'));
console.log('weekend_assignment -> ' , CamelCase('weekend_assignment'));
console.log('Bootcamp_jerusalem -> ' , CamelCase('Bootcamp_jerusalem'));
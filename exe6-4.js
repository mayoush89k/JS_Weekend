function isOgram(word) {
    word = word.toLowerCase();
    let counter = {};
    for (let i = 0; i < word.length; i++) {
      if (counter[word[i]] == undefined) {
        counter[word[i]] = 0;
        for (let t = 0; t < word.length; t++) {
          if (word[i] === word[t]) counter[word[i]] += 1;
        }
      }
    }
  
    let result = true;
    for (const letter in counter) {
      if (counter[letter] >= 2)
        result = false;
    }
    return result;
  }

console.log("Dermatoglyphics: " + isOgram("Dermatoglyphics"));
console.log("aba: " + isOgram("aba"));
console.log("moOse: " + isOgram("moOse"));
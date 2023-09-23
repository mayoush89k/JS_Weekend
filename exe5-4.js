function toWeirdCase(word) {
  let newWord = "";
  for (let r = 0; r < word.length; r++) {
    newWord +=
      r % 2 == 0 ? word.charAt(r).toUpperCase() : word.charAt(r).toLowerCase();
  }

  console.log(word ," -> " , newWord);
}
toWeirdCase( "String" )
toWeirdCase( "Weird string case" )
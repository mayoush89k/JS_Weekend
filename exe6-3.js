function OrganizeStrings(word1, word2) {
  let merging = word1 + word2;
  merging = merging.split("").sort().join("");

  result = merging[0];

  for(let w = 1 ; w < merging.length ; w++){
      if (merging[w] != merging[w-1]){
        result += merging[w];
      } 
    }
  

  console.log(`a: ${word1} , b: ${word2} -> ${result}`);
}
OrganizeStrings("xyaabbbccccdefww", "xxxxyyyyabklmopq");
OrganizeStrings("abcdefghijklmnopqrstuvwxyz")
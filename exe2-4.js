function findUniq(arr) {
  let unique = arr[0];
    for(let i = 0 ; i < arr.length ; i++){
        if (unique !== arr [i]){
            unique = arr[i];
            i = arr.length;
        }
    }
  return unique;
}

console.log("Minimum digit from [1, 1, 1, 2, 1, 1] -> " , findUniq([1, 1, 1, 2, 1, 1]));
console.log("Minimum digit from [0, 0, 0.55, 0, 0] -> " , findUniq([0, 0, 0.55, 0, 0]));

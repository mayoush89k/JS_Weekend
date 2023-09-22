function findNextSquare(squareNumber) {
  let checking = Math.sqrt(squareNumber).toFixed();
  return Math.pow(Number(checking) , 2 ) == squareNumber
    ? Math.pow(Number(checking) + 1 , 2)
    : -1;
}

console.log("next square of 121 -> " ,findNextSquare(121));
console.log("next square of 625 -> " ,findNextSquare(625));
console.log("next square of 114 -> " ,findNextSquare(114));
function findNextSquare(squareNumber) {
  let checking = Math.sqrt(squareNumber).toFixed();
  return Math.pow(Number(checking) , 2 ) == squareNumber
    ? Math.pow(Number(checking) + 1 , 2)
    : -1;
}

console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(114));
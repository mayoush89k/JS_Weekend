function binaryToNumber(BinaryArr) {
  let result = 0;

  if (BinaryArr[0] == 1) result += 8;
  if (BinaryArr[1] == 1) result += 4;
  if (BinaryArr[2] == 1) result += 2;
  if (BinaryArr[3] == 1) result += 1;
  console.log(BinaryArr, " -> ", result);
}

binaryToNumber([0, 0, 0, 1]);
binaryToNumber([0, 0, 1, 0]);
binaryToNumber([0, 1, 0, 1]);
binaryToNumber([1, 0, 0, 1]);
binaryToNumber([0, 0, 1, 0]);
binaryToNumber([0, 1, 1, 0]);
binaryToNumber([1, 1, 1, 1]);
binaryToNumber([1, 0, 1, 1]);

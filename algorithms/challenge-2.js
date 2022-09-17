function sumOfTwoSmallestNums(arr) {
  let first = Math.min(...arr);
  arr.splice(arr.indexOf(first), 1);
  let second = Math.min(...arr);
  return first + second;
}
console.log(sumOfTwoSmallestNums([12, 34, 23, 12, 67]));

module.exports = sumOfTwoSmallestNums;

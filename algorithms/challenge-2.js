function sumOfTwoSmallestNums(arr) {
    var longestArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] < longestArr[0] || longestArr[0] == null) {
        if (longestArr[0] < longestArr[1] || longestArr[1] == null) {
          longestArr[1] = longestArr[0];
        }
        longestArr[0] = arr[i];
      } else if (arr[i] < longestArr[1] || longestArr[1] == null) {
        longestArr[1] = arr[i];
      }
    }
    return longestArr[0] + longestArr[1];
  }
  console.log(sumOfTwoSmallestNums([19, 5, 42, 2, 77]));
console.log(sumOfTwoSmallestNums([10, 343445353, 3453445, 3453545353453]));
console.log(sumOfTwoSmallestNums([80, 33, 44,55,1,2,14]))
module.exports = sumOfTwoSmallestNums

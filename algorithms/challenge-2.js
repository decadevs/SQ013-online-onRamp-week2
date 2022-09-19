function sumOfTwoSmallestNums(arr){
    let sorted = arr.sort(function(a,b){
      return a-b
    })
    return sorted[0]+sorted[1]
  }
  console.log((sumOfTwoSmallestNums([999,234,567,78,2])))
  console.log(sumOfTwoSmallestNums([19, 5, 42, 2, 77]));
  console.log(sumOfTwoSmallestNums([10, 343445353, 3453445, 3453545353453]));
  console.log(sumOfTwoSmallestNums([80, 33, 44,55,1,2,14]))
module.exports = sumOfTwoSmallestNums

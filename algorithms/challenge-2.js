function sumOfTwoSmallestNums(arr){
  let result = arr.sort((a, b) => a - b)
  .slice(0, 2);
  
  var sum = 0;
  for(i = 0; i < result.length; i++){
  sum += result[i];
  }
  return sum;
  }

// module.exports = sumOfTwoSmallestNums
console.log(sumOfTwoSmallestNums([19, 5, 42, 2, 77]));
console.log(sumOfTwoSmallestNums[10, 343445353, 3453445, 3453545353453]);
console.log(sumOfTwoSmallestNums([80, 33, 44,55,1,2,14])) //to return 3
console.log(sumOfTwoSmallestNums([12,34,23,12,67])) //to return 24 
console.log(sumOfTwoSmallestNums([999,234,567,78,2])) //to return 80 

// module.exports = sumOfTwoSmallestNums
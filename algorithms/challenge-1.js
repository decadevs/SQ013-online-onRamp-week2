function sumOfMultiples(arr) {
   let multipleSum = 0;
   for (let i = 0; i < arr.length; i++){
    if(arr[i] % 3 == 0 || arr[i] % 5 == 0){
      multipleSum += arr[i]
    }
   }
   return multipleSum
}

// module.exports = sumOfMultiples
console.log(sumOfMultiples([6, 3, 0, 30, 7]));
console.log(sumOfMultiples([9, 3, 21, 30, 7,8,4,2]));
console.log(sumOfMultiples([10, 20, 11, 17, 7]));

// sumOfMultiples([6, 3, 0, 30, 7])  to return 39
// sumOfMultiples([9, 3, 21, 30, 7,8,4,2]) to return 63
// sumOfMultiples([10, 20, 11, 17, 7])  to return 30.

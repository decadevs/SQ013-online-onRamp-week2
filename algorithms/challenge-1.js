function sumOfMultiples(arr) {
  let sum =0;
   for(let i=0; i<arr.length; i++){
     if(arr[i] % 3 === 0 || arr[i] % 5 === 0 ){
       sum = sum + arr[i]
     }
   }
  return sum;
}
console.log(sumOfMultiples([10, 20, 11, 17, 7]))
module.exports = sumOfMultiples

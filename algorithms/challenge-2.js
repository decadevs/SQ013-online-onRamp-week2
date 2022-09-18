function sumOfTwoSmallestNums(arr){
    let result = []
    for(let i=0; i<arr.length; i++){
      if(arr[i]<result[0]||result[0]==null){
        if(result[0]<result[1] ||result[1]==null){
          result[0]=result[1]
        } 
          result[0]=arr[i]
        } else if(arr[i]<result[1]||result[1]==null){
          result[1]=arr[i]
      }
    }
    return result[0]+result[1]
  }
  console.log(sumOfTwoSmallestNums([19, 5, 42, 2, 77]))
  console.log(sumOfTwoSmallestNums([80, 33, 44,55,1,2,14]))

module.exports = sumOfTwoSmallestNums

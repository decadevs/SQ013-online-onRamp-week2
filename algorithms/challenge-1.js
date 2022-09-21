function sumOfMultiples(arr){
    let result =[]
    for(let num of arr){
      if(num%3===0 || num%5===0){
        result.push(num)
      }
    }
    return result.reduce((num,sum) => num+sum)
  }
  console.log(sumOfMultiples([6, 3, 0, 30, 7]))
  console.log(sumOfMultiples([9, 3, 21, 30, 7,8,4,2]))
  console.log(sumOfMultiples([10, 20, 11, 17, 7]))
module.exports = sumOfMultiples

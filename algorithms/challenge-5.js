function accum(str) {
  let arrStr = str.split("")
  let result = ""
  for (let i = 0; i < arrStr.length; i++){
     res = arrStr[0].toUpperCase()
     let num = arrStr.indexOf(arrStr[i]) + 1
     res = arrStr[i].repeat(num)
     result = result + res
     } return result
   console.log(result)
  }
  console.log(accum("abcd"))
   console.log(accum("RqaEzty"))
   console.log(accum("cwAt"))

  // module.exports =accum

  // function accum(str) {
  //   let acc = '';
  //    for (let i = 0; i < str.length; i++) {
  //      acc += str[i].toUpperCase() 
  //      for (let j = 0; j < i; j++) {
  //        acc += str[i].toLowerCase()
  //      }
  //    }
  //    console.log(acc)
  //  }
   
  //  accum("abcd")
  //  accum("RqaEzty")
  //  accum("cwAt")
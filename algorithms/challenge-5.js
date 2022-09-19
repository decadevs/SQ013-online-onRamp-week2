function accum(str) {
    let result = ""
    for(let i = 0; i < str.length; i++) {
      let strNew = str[i]
      let counter = i+1
      let word = strNew.repeat(counter)
      let output = word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()
      result += output + "-"
      }
      return result.slice(0, result.length-1)
    }
  console.log(accum("abcd"))
  console.log(accum("RqaEzty"))

  module.exports =accum
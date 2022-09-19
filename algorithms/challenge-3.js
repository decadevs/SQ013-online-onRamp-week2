let alphabets = "abcdefghijklmnopqrstuvwxyz"
function alphabetPosition(text){
  let result = ""
  for(let i=0; i<text.length; i++){
    let output = alphabets.indexOf(text[i]) + 1
    result.push(output)
  }
  return result
}
console.log(alphabetPosition("decadev"))
console.log(alphabetPosition('success'))
console.log(alphabetPosition('developer'))

  module.exports = alphabetPosition
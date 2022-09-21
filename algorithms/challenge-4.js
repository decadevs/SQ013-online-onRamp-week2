function squareDigit(str){
    let splitStr = str.split('');
    let powerStr = splitStr.map((elem) => Math.pow(elem,2))
    let join = powerStr.join('')
    return join
  }
   console.log(squareDigit('9119'))
   console.log(squareDigit('289'))
   console.log(squareDigit('345'))
   console.log(squareDigit('7772'))
  module.exports =squareDigit

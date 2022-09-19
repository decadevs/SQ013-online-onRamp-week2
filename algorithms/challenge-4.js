function squareDigit(str){
    return str.split('').map((elem) => Math.pow(elem, 2)).join('')
   }
   console.log(squareDigit('9119'))
   console.log(squareDigit('289'))
   console.log(squareDigit('345'))
   console.log(squareDigit('7772'))
  module.exports =squareDigit

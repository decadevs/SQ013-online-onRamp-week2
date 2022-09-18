function squareDigit(str) {
    let returnStr = '';
    for (let i = 0; i < str.length; i++) {
     let num = Number(str[i])
     returnStr += num * num;
    }
     console.log(returnStr)
  }
  squareDigit('9119')
  squareDigit('289') 
  //46481
  squareDigit('345') 
  //91625
  squareDigit('7772')
 
  // module.exports =squareDigit

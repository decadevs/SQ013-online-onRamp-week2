function squareDigit(str) {
  x = Number( str.split('').map((i) => { 
    return i * i;
  }).join('')
  );
 return x
 }

console.log(squareDigit('9119'))
  module.exports =squareDigit

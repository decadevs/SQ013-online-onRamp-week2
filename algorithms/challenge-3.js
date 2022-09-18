function alphabetPosition(text) {
  const obj = {
      a:'1', b:'2', c:'3', d:'4', e:'5', f:'6', g:'7', h:'8',
      i:'9', j:'10', k:'11', l:'12', m:'13', n:'14', o:'15', p:'16',
      q:'17', r:'18', s:'19', t:'20', u:'21', v:'22', w:'23', 
      x:'24', y:'25', z:'26'
    }
      let returnPosition = [];
  for(let i = 0; i < text.length; i++) {
    returnPosition.push(obj[text[i]])
         }
         console.log(returnPosition.join(","))
      }
      
      alphabetPosition('developer')
      alphabetPosition('decadev')
      alphabetPosition('success')


// const letters = "abcdefghijklmnopqrstuvwxyz";
// function alphabetPosition(text) {
//     let result = [];
//     for (let i = 0; i < text.length; i++) {
//       let letter = text[i].toLowerCase();
//       if (letters.includes(letter)) {
//         result.push(letters.indexOf(letter) + 1);
//       }
//     }
//     return result.join(" ");
//  }

  // module.exports = alphabetPosition
  // console.log(alphabetPosition('sucess'));
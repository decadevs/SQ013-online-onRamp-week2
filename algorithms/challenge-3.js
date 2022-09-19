function alphabetPosition(text) {
  if (text.match(/[a-z]/gi)) {
    let justAlphabet = text.match(/[a-z]/gi).join("").toLowerCase();
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let a = [];
    for (let i = 0; i < justAlphabet.length; i++) {
      a.push(alphabet.indexOf(justAlphabet[i]) + 1);
    }
    return a.join(" ");
  } else {
    return "";                                               
  }
}
console.log(alphabetPosition("decadev"))
console.log(alphabetPosition('success'))
console.log(alphabetPosition('developer'))

  module.exports = alphabetPosition
function accum(str) {
  const result = [];
  const lowerst = str.toLowerCase();
  for (let i = 0; i < lowerst.length; i++) {
    let string = lowerst[i].toUpperCase();
    for (let j = 0; j < i; j++) {
      string += lowerst[i];
    }
    result.push(string);
  }
  return result.join("-");
}
console.log(accum("RqaEzty"));

module.exports = accum;

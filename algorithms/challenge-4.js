function squareDigit(str) {
  x = Number(
    str
      .split("")
      .map((i) => {
        return i * i;
      })
      .join("")
  );
  return x;
}

console.log(squareDigit("345"));
module.exports = squareDigit;

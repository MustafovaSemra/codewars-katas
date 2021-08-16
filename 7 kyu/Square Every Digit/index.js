function squareDigits(num) {
  let square = num
    .toString()
    .split("")
    .map((elem) => elem * elem)
    .join("");

  return parseInt(square);
}

const squareDigits = (num) =>
  parseInt(
    num
      .toString()
      .split("")
      .map((elem) => elem * elem)
      .join("")
  );

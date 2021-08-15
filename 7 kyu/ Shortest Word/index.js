function findShort(s) {
  let arr = s
    .split(" ")
    .map((elem) => elem.length)
    .sort((a, b) => a - b);

  return arr[0];
}

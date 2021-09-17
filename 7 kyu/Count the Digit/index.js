function nbDig(n, d) {
  let arr = [];

  for (let i = 0; i <= n; i++) {
    arr.push(i);
  }

  return arr
    .map((elem) => elem * elem)
    .join("")
    .split("")
    .filter((elem) => elem.includes(d)).length;
}

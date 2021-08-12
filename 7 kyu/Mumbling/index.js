function accum(s) {
  // your code
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}

function accum(s) {
  // your code
  let newArr = s.toLowerCase().split("");

  for (let i = 0; i < newArr.length; i++) {
    newArr[i] = newArr[i].toUpperCase() + newArr[i].repeat(i);
  }
  return newArr.join("-");
}

function sumMix(x) {
  let newArr = [];
  for (let i = 0; i < x.length; i++) {
    newArr.push(parseInt(x[i]));
  }

  return newArr.reduce((a, b) => a + b);
}

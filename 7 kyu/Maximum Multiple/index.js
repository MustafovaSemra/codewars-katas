function maxMultiple(divisor, bound) {
  let arr = [];

  for (let i = 0; i <= bound; i++) {
    if (i % divisor === 0) {
      arr.push(i);
    }
  }
  return Number(arr.slice(-1));
}

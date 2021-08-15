function countBy(x, n) {
  var z = [];
  const limit = x * n;

  for (let i = 1; i <= limit; i++) {
    if (i % x === 0) z.push(i);
  }
  return z;
}

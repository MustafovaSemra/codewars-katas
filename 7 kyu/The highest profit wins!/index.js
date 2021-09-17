function minMax(arr) {
  return arr
    .sort((a, b) => a - b)
    .slice(0, 1)
    .concat(arr.sort((a, b) => b - a).slice(0, 1));
}

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

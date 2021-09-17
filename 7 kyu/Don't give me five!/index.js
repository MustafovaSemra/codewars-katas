function dontGiveMeFive(start, end) {
  let count = 0;

  for (let i = start; i < end + 1; i++) {
    count = String(i).includes("5") ? count : count + 1;
  }

  return count;
}

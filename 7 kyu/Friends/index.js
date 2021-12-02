function friends(n) {
  return n > 1 ? Math.ceil(Math.log2(n)) - 1 : 0;
}

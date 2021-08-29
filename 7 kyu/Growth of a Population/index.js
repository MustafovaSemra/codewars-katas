function nbYear(p0, percent, aug, p) {
  const percentage = percent / 100;
  let years = 0;

  while (p0 < p) {
    p0 += p0 * percentage + aug;
    years++;
  }

  return years;
}

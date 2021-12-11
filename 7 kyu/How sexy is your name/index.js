function sexyName(name) {
  let score = 0;
  for (ch of name.toUpperCase()) {
    if (SCORES[ch] >= 0) score += SCORES[ch];
  }
  if (score <= 60) return "NOT TOO SEXY";
  else if (score == 61 || score <= 300) return "PRETTY SEXY";
  else if (score == 301 || score <= 599) return "VERY SEXY";
  else return "THE ULTIMATE SEXIEST";
}

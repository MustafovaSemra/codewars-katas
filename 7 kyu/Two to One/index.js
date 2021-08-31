function longest(s1, s2) {
  return (s1 + s2)
    .split("")
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort()
    .join("");
}

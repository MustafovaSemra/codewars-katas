function disemvowel(str) {
  const vowels = "aeiou";
  return str
    .split("")
    .filter((letter) => !vowels.includes(letter.toLowerCase()))
    .join("");
}

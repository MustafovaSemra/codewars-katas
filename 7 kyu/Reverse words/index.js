function reverseWords(str) {
  return str
    .split(" ")
    .map((each) => each.split("").reverse().join(""))
    .join(" ");
}

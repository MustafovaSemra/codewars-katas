function songDecoder(str) {
  let arr = str
    .split("WUB")
    .filter((e) => e !== "")
    .join(" ")
    .trim();
  return arr;
}

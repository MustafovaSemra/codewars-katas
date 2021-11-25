function sortVowels(s) {
  return typeof s === "string"
    ? s
        .split("")
        .map((el) => (/[aeuio]/gi.test(el) ? `|${el}` : `${el}|`))
        .join("\n")
    : "";
}

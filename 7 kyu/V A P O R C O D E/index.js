function vaporcode(string) {
  let newStr = "";
  let str = string.toUpperCase().split(" ").join("");

  for (let i = 0; i < str.length; i++) {
    newStr += str[i] + "  ";
  }

  return newStr.trim();
}

function vaporcode(string) {
  return string.toUpperCase().split(" ").join("").split("").join("  ");
}

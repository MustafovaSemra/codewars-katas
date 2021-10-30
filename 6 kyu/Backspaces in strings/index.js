function cleanString(s) {
  let result = [];
  s.split("").map((elem) => {
    elem === "#" ? result.pop() : result.push(e);
  });
  return result.join("");
}

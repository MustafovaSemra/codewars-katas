function duplicateEncode(word) {
  // ...
  let newString = "";
  let newWord = word.toLowerCase();
  for (let i = 0; i < newWord.length; i++) {
    if (newWord.indexOf(newWord[i]) === newWord.lastIndexOf(newWord[i])) {
      newString += "(";
    } else {
      newString += ")";
    }
  }
  return newString;
}

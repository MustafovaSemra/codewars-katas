// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the name of this kata).

// Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.

function spinWords(string) {
  return string
    .split(" ")
    .map((a) => (a.length >= 5 ? a.split("").reverse().join("") : a))
    .join(" ");
}

function spinWords(str) {
  let newArr = str.split(" ");
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].length >= 5)
      newArr[i] = newArr[i].split("").reverse().join("");
  }
  return newArr.join(" ");
}

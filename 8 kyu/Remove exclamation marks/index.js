//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  let arr = s.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "!") {
      arr.splice([i], 1);
    }
  }
}

function removeExclamationMarks(s) {
  let arr = s.split("");

  return arr.map((elem) => (elem === "!" ? arr.splice(elem) : arr)).join("");
}

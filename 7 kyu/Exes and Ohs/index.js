function XO(str) {
  let arr = str.toLowerCase().split("");
  let xArr = [];
  let oArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "x") {
      xArr.push(arr[i]);
    } else if (arr[i] === "o") {
      oArr.push(arr[i]);
    }
  }
  return xArr.length === oArr.length;
}

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers) {
  let arr = numbers.split(" ");

  let nums = arr.map((eachNum) => Number(eachNum));

  let max = Math.max(...nums);
  let min = Math.min(...nums);

  return max.toString() + " " + min.toString();
}

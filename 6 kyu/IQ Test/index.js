function iqTest(numbers) {
  // ...
  let numArray = numbers.split(" ");
  let testEven = numArray.filter((num) => num % 2);
  let testOdd = numArray.filter((num) => !(num % 2));
  if (testEven.length < testOdd.length) {
    return numArray.indexOf(testEven[0]) + 1;
  } else {
    return numArray.indexOf(testOdd[0]) + 1;
  }
}

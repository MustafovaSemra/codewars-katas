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

function iqTest(numbers) {
  numbers = numbers.split(" ");

  let evens = [];
  let odds = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] & 1) {
      odds.push(i + 1);
    } else {
      evens.push(i + 1);
    }
  }

  return evens.length === 1 ? evens[0] : odds[0];
}

function iqTest(numbers) {
  // ...
  return (
    1 +
    numbers
      .split(" ")
      .findIndex(
        (x, idx, arr) => arr.filter((y) => y % 2 === x % 2).length === 1
      )
  );
}

//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

var moveZeros = function (arr) {
  let filterredArr = arr.filter((elem) => elem === 0);
  let numArr = arr.filter((elem) => elem !== 0);

  return numArr.concat(filterredArr);
};

var moveZeros = (arr) =>
  arr.filter((elem) => elem !== 0).concat(arr.filter((elem) => elem === 0));

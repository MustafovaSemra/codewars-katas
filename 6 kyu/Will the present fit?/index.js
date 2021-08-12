// Santa's elves are boxing presents, and they need your help! Write a function that takes two sequences of dimensions of the present and the box, respectively, and returns a Boolean based on whether or not the present will fit in the box provided. The box's walls are one unit thick, so be sure to take that in to account.

function willFit(present, box) {
  let boxSum = box.reduce((a, b) => a + b);
  let presentSum = present.reduce((a, b) => a + b);

  if (presentSum === boxSum || presentSum === boxSum + 2) {
    return false;
  } else if (presentSum > boxSum) {
    return false;
  } else {
    return true;
  }
}

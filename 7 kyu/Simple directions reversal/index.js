function solve(arr) {
  //..
  const map = { Begin: "Begin", Left: "Right", Right: "Left" };
  let parts = arr.map((step) => step.split(" on "));
  let steps = [];

  for (let i = 0; i < arr.length; i++)
    steps.unshift(map[parts[(i + 1) % arr.length][0]] + " on " + parts[i][1]);

  return steps;
}

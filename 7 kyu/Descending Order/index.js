function descendingOrder(n) {
  return parseInt(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}
const descendingOrder = (n) =>
  parseInt(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );

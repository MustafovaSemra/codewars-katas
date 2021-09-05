function printerError(s) {
  let error = "nopqrstuvwxyz";

  return (
    s
      .split("")
      .filter((elem) => error.includes(elem))
      .join("").length +
    "/" +
    s.length
  );
}

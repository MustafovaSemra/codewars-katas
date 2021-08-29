function maskify(cc) {
  let lastFour = cc.slice(-4);

  let masked = "";

  for (let i = 0; i < cc.length - 4; i++) {
    masked += "#";
  }
  return masked + lastFour;
}

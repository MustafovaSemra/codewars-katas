function DNAStrand(dna) {
  //your code here
  let arr = [];
  let dnaArr = dna.split("");

  for (let i = 0; i < dnaArr.length; i++) {
    if (dna[i] === "A") {
      arr.push("T");
    } else if (dna[i] === "T") {
      arr.push("A");
    } else if (dna[i] === "C") {
      arr.push("G");
    } else {
      arr.push("C");
    }
  }
  return arr.join("");
}

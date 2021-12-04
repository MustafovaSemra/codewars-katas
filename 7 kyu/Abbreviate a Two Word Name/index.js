const abbrevName = (name) =>
  name.split` `.map((part) => part[0].toUpperCase()).join(".");

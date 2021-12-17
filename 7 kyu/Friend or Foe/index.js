function friend(friends) {
  let filteredNames = friends.filter((element) => {
    return element.length === 4;
  });

  return filteredNames;
}

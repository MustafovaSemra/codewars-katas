function solution(str, ending) {
  return str.endsWith(ending);
}

function solution(str, ending) {
  if (str.substring(str.length - ending.length) === ending) {
    return true;
  } else {
    return false;
  }
}

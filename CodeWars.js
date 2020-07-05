function arrayDiff(a, b) {
  for (var i = 0; i < a.length; i++) {
    if (a[i] === b[0]) {
      a.splice(i, 1);
      i--;
    }
  }
  return a;
}
console.log(arrayDiff([1, 2], [1])); //[2]
console.log(arrayDiff([1, 2, 2, 2, 3], [2]));

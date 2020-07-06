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
//
function highAndLow(num) {
  let number = num.split(' ').sort((a, b) => {a - b})
  return `${number[number.length -1]} ${number[0]}`
}
console.log(highAndLow("1 2 3 4 5")) // return "5 1"

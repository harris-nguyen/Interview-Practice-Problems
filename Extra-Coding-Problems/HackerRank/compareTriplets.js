function compareTriplets(a, b) {
  let score = [0, 0];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      score[0]++;
    } else if (a[i] < b[i]) {
      score[1]++;
    }
  }
  console.log(score);
}

compareTriplets([17, 28, 30], [99, 16, 8]);

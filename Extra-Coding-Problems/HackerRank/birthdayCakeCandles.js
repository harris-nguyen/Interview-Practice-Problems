function birthdayCakeCandles(candles) {
  let max = Math.max(...candles);
  let count = 0;

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === max) {
      count++;
    }
  }
  console.log(count);
}

birthdayCakeCandles([3, 2, 1, 3]);
// The maximum height 3 candles are  units high. There are  of them, so return 2.

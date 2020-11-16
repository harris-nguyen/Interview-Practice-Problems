function singleNonDuplicate(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }
  let keys = Object.keys(obj);
  let result = 0;
  for (let i = 0; i < keys.length; i++) {
    if (obj[keys[i]] <= 1) {
      result = obj[arr[i]];
    }
  }
  console.log(result);
}

// Input: [1, 1, 2, 3, 3, 4, 4, 8, 8];
// Output: 2;

singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]);

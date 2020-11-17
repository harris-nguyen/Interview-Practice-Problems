function frequencySort(string) {
  let str = string.split("");
  let mapTable = {};

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (!mapTable[letter]) {
      mapTable[letter] = 1;
    } else {
      mapTable[letter]++;
    }
  }
  let keys = Object.keys(mapTable);
  let newArr = [];
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    newArr.push({
      value: key,
      count: mapTable[key],
    });
  }
  newArr.sort((a, b) => {
    return b.count - a.count;
  });

  let result = [];
  for (let i = 0; i < newArr.length; i++) {
    let numObj = newArr[i];
    for (let j = 0; j < numObj.count; j++) {
      result.push(numObj.value);
    }
  }
  console.log(result);
}

frequencySort("tree");
// Input:
// "tree"

// Output:
// "eert"

// Explanation:
// 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

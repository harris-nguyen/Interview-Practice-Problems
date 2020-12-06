function groupAnagrams(arr) {

  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].split("").sort().join("");

    if (!obj[sorted]) {
      obj[sorted] = [arr[i]];
    } else {
      obj[sorted].push(arr[i]);
    }
  }
  let result = Object.values(obj);
  console.log(result);
}
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);

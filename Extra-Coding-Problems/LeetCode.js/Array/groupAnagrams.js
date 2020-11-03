var groupAnagrams = function (strs) {
  let group = {};
  for (let i = 0; i < strs.length; i++) {
    let test = strs[i].split("").sort().join("");
    if (!group[test]) {
      group[test] = [strs[i]];
    } else {
      group[test].push(strs[i]);
    }
  }
  let result = [];
  for (let key in group) {
    result.push(group[key]);
  }
  console.log(result);
};

let input = ["eta", "eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(input));
//   Output:
// [
//   ["ate", "eat", "tea"],
//   ["nat", "tan"],
//   ["bat"]
// ]

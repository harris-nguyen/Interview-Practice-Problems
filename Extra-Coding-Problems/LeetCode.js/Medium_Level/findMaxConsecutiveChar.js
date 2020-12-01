//  Write a function that find the maximum consecutive character in the string.
//  Example:
//  str = "aaabbaabbbaaaacdefgaaa"
//  char = "a"
function findMaxConsecutiveChar(str, char) {
  let splitIt = str.split("");
  let counter = 0;
  let maxCount = 0;

  for (let i = 0; i < splitIt.length; i++) {
    if (str[i] === char) {
      counter += 1;
      if (maxCount < counter) {
        maxCount = counter;
        console.log("set count: ", counter, " -> maxCount", maxCount);
      }
    } else {
      counter = 0;
    }
  }
  console.log(maxCount);
}
let str = "aaabbaabbbaaaacdefgaaa";
let char = "a";
findMaxConsecutiveChar(str, char);
//  => Output: 4

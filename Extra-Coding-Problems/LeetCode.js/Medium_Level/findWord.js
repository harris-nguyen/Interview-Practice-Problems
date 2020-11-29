


// not done!
function findWord(words, string) {
  let obj = {};

  for (let i = 0; i < words.length; i++) {
    let arrWord = words[i];
    for (let j = 0; j < arrWord.length; j++) {
      let perWord = arrWord[j];
      for (let x = 0; x < string.length; x++) {
        if (string[x] === perWord) {
          if (!obj[string[x]]) {
            obj[string[x]] = 1;
          }
        }
      }
    }
  }
  let keys = Object.keys(obj);
  let str = "";
  let result = "";

  for (let i = 0; i < keys.length; i++) {
    let matchingLetters = keys[i];

    if (str != words[i]) {
      str += matchingLetters;
    }

    for (let i = 0; i < words.length; i++) {
      let eachWord = words[i];
      if (str === eachWord) {
        result = str;
      }
    }
  }
  console.log(result);
}


const words = ["cat", "baby", "dog", "bird", "car", "ax"];
const string1 = "tcabnihjs";
const string2 = "tbcanihjs";
const string3 = "baykkjl";
const string4 = "bbabylkkj";
const string5 = "ccc";
const string6 = "nbird";

findWord(words, string1);

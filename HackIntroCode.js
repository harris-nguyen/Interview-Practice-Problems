function filterEvenElements(arr) {
  let leto = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      leto.push(arr[i]);
    }
  }
  return leto;
}

var output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]
//

function squareElements(arr) {
  let array = []
  for(var i = 0; i < arr.length; i++){
    array.push(arr[i] * arr[i])
  }
  return array
}

var output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
//

function getSmallestElementAtProperty(obj, key) {
  //return smallest element
  for(let key in obj){
    let compare = obj[key][0]
    for(let i = 0; i < obj[key].length; i++){
      if(compare > obj[key][i]){
        compare = obj[key][i]
      }
    }
  }
  return compare
}
var obj = {
  key: [2, 1, 5]
};
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
//

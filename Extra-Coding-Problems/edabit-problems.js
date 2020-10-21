function clone(arr) {
  arr.push([...arr]);
  return arr;
}

console.log(clone([1, 2, 3])); // ➞[1, 2, 3, [1, 2, 3]]

function toArray(obj) {
  let arr = []
  for(var key in obj){
    arr.push([key, obj[key]])
  }
  return arr
}

console.log(toArray({ a: 1, b: 2 })) // ➞[["a", 1], ["b", 2]]

function getBudgets(arr) {
  let total = 0

  for(var i = 0; i < arr.length; i++){
    total += arr[i].budget
  }
return total
}
console.log(getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve", age: 32, budget: 40000 },
  { name: "Martin", age: 16, budget: 2700 }
])) // 65700

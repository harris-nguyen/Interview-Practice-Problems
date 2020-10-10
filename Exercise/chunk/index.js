// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
// string.slice(start, end)

function chunk(array, size) {
  let arr = [];

  for (let i = 0; i < array.length; i += size) {
    // string.slice(start, end)
    console.log(i);
    console.log(size + i);
    let chunk = array.slice(i, size + i); // size is increased by two from second loop
    arr.push(chunk);
  }
  console.log(arr);
}

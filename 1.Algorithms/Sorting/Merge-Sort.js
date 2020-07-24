const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
 // O(n log(n)) fast

// divide and conquer

  // first n is bc we have to compare each one
    // rememver: (log n) is kind of like the height of the tree

 // best sorting type after quick sorting. If quick sort is at it's worse O(n^2),
    // then pick Merg sort

// likely won't be asked to code in an interview but good to know the idea

 // https://stackoverflow.com/questions/1517793/what-is-stability-in-sorting-algorithms-and-why-is-it-important

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  // Split Array in into right and left
  const length = array.length;
  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  // console.log('left:', left);
  // console.log('right:', right);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  // console.log(left, right)
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const answer = mergeSort(numbers);
console.log(answer);

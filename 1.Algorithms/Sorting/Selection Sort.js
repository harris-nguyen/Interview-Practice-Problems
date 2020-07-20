const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    // set current index as minimum

    let min = i; // index
    let temp = array[i]; // [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        // if 44 < 99
        //update minimum if current is lower that what we had previously
        min = j; // index 1
      }
    }

    // array[i] // 99
    array[i] = array[min]; // 44, 99
    array[min] = temp; // 99
  }
  return array;
}

selectionSort(numbers);
console.log(numbers);

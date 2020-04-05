

var tB = [2, 5, 1, 9, 10, 3, 4,12,541,23,13,1,51,131,56,34,12,67,45,8,12,34,7,234,0];

var a = [1,2,3,4,5];


const mergeSort = function(arr, n) {
  for(let i = 0; i < n - 1; i++) {
    console.group();
    console.log('first level', i);
    for(let j = (n - 1); j >= i; j--) {
      console.group();
      console.log('second level', j);
      if(arr[j] < arr[j-1]) {
        let temp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = temp;
      }
      console.groupEnd();
    }
    console.groupEnd();
  }

  return arr;
}

// bubbleSort(a, a.length);
module.exports = {mergeSort};
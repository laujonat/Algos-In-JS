// Selection sort could be modified to repeatedly select the maximum 
// element instead of the minimum, and putting the maximum element into its final place. 
// Which of the following would then be a correct 
// description of the ith iteration? (Assume input array = A[1..n]) 


const arr = [2, 5, 1, 9, 10, 3, 4];
var tB = [2, 5, 1, 9, 10, 3, 4,12,541,23,13,1,51,131,56,34,12,67,45,8,12,34,7,234,0];


/*
  2 
   5
    1
1 5 2

*/

const selectionSort = function(arr, n) {
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    console.group();
    console.log('first level', i, 'min', min);
    for (let j = i + 1; j < n; j++) {
      if (arr[min] > arr[j]) {
        console.log('second level', 'i', i, 'j', j, 'min', min);
        console.group();
        let temp = arr[j];
        arr[j] = arr[min];
        arr[min] = temp;
      }
      console.groupEnd();
    }
    console.groupEnd();
    // console.info('X', arr, 'MIN', min);
  }
  // console.log(arr)
  return arr;
}
// console.log('A', selectionSort(tB, tB.length));

module.exports = {selectionSort};
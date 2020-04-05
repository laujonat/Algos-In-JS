// Selection sort could be modified to repeatedly select the maximum 
// element instead of the minimum, and putting the maximum element into its final place. 

const selectionSort = function(arr: Array<number>, n: number): Array<number> {
  for (let i = 0; i < n - 1; i++) {
    let min = i; // minimum

    for (let j = i + 1; j < n; j++) {
      if (arr[min] > arr[j]) {
        let temp = arr[j];
        arr[j] = arr[min];
        arr[min] = temp;
      }
    }
  }
  return arr;
}

module.exports = {selectionSort};
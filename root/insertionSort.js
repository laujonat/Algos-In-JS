// Decrease and conquer strategy
// if we know we can go from n - 1 to n
// then we have two options:
// A) Recursion (top-down): n -> (n-1)
// B) Iterative (bottom-up): (n-1) -> n

var tB = [2, 5, 1, 9, 10, 3, 4,12,541,23,13,1,51,131,56,34,12,67,45,8,12,34,7,234,0];

// Top-down 
const insertionSortV1 = function(arr, n) {
  // solve the solution for n 
  if(n <= 1){
    return insertionSort(arr, n-1);
  }
// [ 12, 2, 2, 3, 3, 4, 4, 45, 9, 9 ]
  // solve the (n - 1) solution
  let i = n - 1;
  while(i >= 1 && arr[i] > arr[i-1]){
    let temp = arr[i];
    arr[i-1] = arr[i];
    arr[i] = temp;
  }
  console.log(arr);
  return arr;
}


const insertionSortV2 = function(arr, n) {
  // solve the solution for n 
  if(n <= 1){
    return insertionSort(arr, n-1);
  }

  // solve the (n - 1) solution
  let rightMost = arr[n-1];
  let i = n - 1;
  while(i >= 1 && arr[i] > arr[i-1]){
    let temp = arr[i];
    arr[i-1] = arr[i];
    arr[i] = temp;
  }

  return arr;
}
module.exports = {insertionSortV1, insertionSortV2};



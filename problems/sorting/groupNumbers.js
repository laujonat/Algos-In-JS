/*
Group the numbers
You are given an integer array arr of size n. Group and rearrange them (in-place) into evens and odds in such a way that group of all even integers appears on the left side and group of all odd integers appears on the right side. 
Output: [4, 2, 1, 3]
Order does not matter. Other valid solutions are: 
[2, 4, 1, 3]
[2, 4, 3, 1]
[4, 2, 3, 1]
*/
function groupEvenOddNumbers(arr) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    if (arr[low] % 2 !== 0) {
      $temp = arr[low];
      arr[low] = arr[high];
      arr[high] = $temp;
      high--;
    } else {
      low++;
    }
  }

  return arr;
}
module.exports = groupEvenOddNumbers;
// let a = [1, 3, 2, 4];
// let c = [1, 2, 3, 4];
// let b = [1, 1, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];
// solve(a);
// solve(b);
// solve(c);
// console.log(a);
// console.log(b);
// console.log(c);

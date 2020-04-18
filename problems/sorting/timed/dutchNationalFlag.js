/*
Dutch National Flag

Given some balls of three colors arranged in a line, rearrange them such that all the red balls go first, then green and then blue ones.

Do rearrange the balls in place. A solution that simply counts colors and overwrites the array is not the one we are looking for.

This is an important problem in search algorithms theory proposed by Dutch computer scientist Edsger Dijkstra. Dutch national flag has three colors (albeit different from ones used in this problem).

Example
Input: [G, B, G, G, R, B, R, G]
Output: [R, R, G, G, G, G, B, B]

There are a total of 2 red, 4 green and 2 blue balls. In this order they appear in the correct output.

*/

// O(n)
function helper(arr, start, end) {
  if (start >= end) {
    return arr;
  }
  let mid = start;
  let left = start;
  while (mid <= end) {
    if (arr[mid] === "R") {
      let temp = arr[mid];
      arr[mid] = arr[left];
      arr[left] = temp;
      left++;
      mid++;
    } else if (arr[mid] === "G") {
      mid++;
    } else {
      let temp = arr[end];
      arr[end] = arr[mid];
      arr[mid] = temp;
      end--;
    }
  }

  return arr;
}

function dutchNationalFlag(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let res = helper(arr, 0, arr.length - 1);
  return res;
}

let a = ["G", "B", "G", "G", "R", "B", "R", "G"];
console.log(dutchNationalFlag(a));

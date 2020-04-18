/*
Top K

You are given an array of integers, arr, of size n, which is analogous to a continuous stream of integers input. Your task is to find K largest elements from a given stream of numbers. 

By definition, we don't know the size of the input stream. Hence, produce K largest elements seen so far, at any given time. For repeated numbers, return them only once.

If there are less than K distinct elements in arr, return all of them.

Don't rely on size of input array arr.
Feel free to use built-in functions if you need a specific data-structure.
Example One

Input: arr = [1, 5, 4, 4, 2]; K = 2
Output: [4, 5]

Example Two
Input: arr = [1, 5, 1, 5, 1]; K = 3

Output: [5, 1]
Notes

Output: Return an integer array res, containing K largest elements. If there are less than K unique elements, return all of them. Order of elements in res does not matter.
Constraints:

1 <= n <= 10^5
1 <= K <= 10^5
arr may contain duplicate numbers.
arr may or may not be sorted

*/

/*
 * Complete the function below.
 */
/*
 
 n*log(n) -> obtain top K elements
 balanced BST
 */

const topK = function(arr, k) {
  let heap = [];
  let distinct = {};
  for (let i = 0; i < arr.length; i++) {
    if (distinct[arr[i]]) {
      continue;
    }
    if (heap.length <= k) {
      heap.push(arr[i]);
      heapifyUp();
    }
    distinct[arr[i]] = 1;
  }
  if (Object.keys(distinct).length < k) {
    return Array.from(Object.keys(distinct));
  }

  function heapifyUp() {
    let i = heap.length - 1;
    // parent
    let p = Math.floor((i - 1) / 2);
    while (heap[p] && heap[p] < heap[i]) {
      let temp = heap[p];
      heap[p] = heap[i];
      heap[i] = temp;
      i = Math.floor((i - 1) / 2);
      p = Math.floor((i - 1) / 2);
    }
  }
  // pop
  function heapifyDown() {
    let i = 0;
    let l = 2 * i + 1;
    let r = 2 * i + 2;
    while (heap[2 * i + 1]) {
      l = 2 * i + 1;
      r = 2 * i + 2;
      let largest = l;
      if (heap[r] && heap[l] < heap[r]) {
        largest = r;
      }

      if (heap[i] > heap[largest]) {
        break;
      } else {
        let temp = heap[i];
        heap[i] = heap[largest];
        heap[largest] = temp;
      }
      i = l;
    }
  }

  function pop() {
    if (heap.length === 0) {
      return;
    }
    let last = heap[heap.length - 1];
    let max = heap[0]; // max
    heap.pop();
    heap[0] = last;
    heapifyDown();
    return max;
  }

  let res = [];
  for (let i = 0; i < k; i++) {
    res.push(pop());
  }
  return res;
};

console.log(topK([1, 5, 4, 4, 2], 3));
console.log(topK([1, 5, 1, 5, 1], 2));
console.log(
  topK([4, 2, 1, 6, 2, 10, 4, 3, 10, 6, 5, 6, 7, 2, 10, 10, 4, 6, 5, 8], 7)
);

module.exports = topK;

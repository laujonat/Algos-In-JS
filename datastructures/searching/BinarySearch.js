/*
  Use the information that the array is sorted/ Time complexity to O(Log n).
*/
const BinarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  const helper = (arr, start, end, target) => {
    // It is also probably worth mentioning that in case negative indices are allowed, or perhaps it's not
    // even an array that's being searched (for example, searching for a value in some integer range satisfying some condition)
    let mid = Math.floor(
      start < 0 && end > 0 ? (start + end) / 2 : start + (end - start) / 2
    );
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      return helper(arr, start, mid - 1, target);
    } else if (arr[mid] < target) {
      return helper(arr, mid + 1, end, target);
    } else {
      return -1;
    }
  };
  return helper(arr, start, end, target);
};

module.exports = BinarySearch;

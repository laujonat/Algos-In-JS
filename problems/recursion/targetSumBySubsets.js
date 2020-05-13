/*
  Possible To Achieve Target Sum
  Given a set of integers and a target value k, find a non-empty subset that sums up to k.
  Example One
  Input: [2 4 8], k = 6
  - Function has two arguments: an array of integers (their order doesn’t matter) and the target value  k.
  
  Output: True
  Because 2+4=6.
  Example Two
  Input: [2 4 6], k = 5
  Output: False
  - Because no subset of numbers from the input sums up to 5.
  - Function must return a boolean value.
  */

const compare = (a, b) => {
  return a - b;
};

const choicePattern = (arr, ind, k, elementCount) => {
  if (k === 0 && elementCount > 0) {
    return true;
  }
  if (ind === arr.length) {
    return false;
  }
  // inclusion
  res = choicePattern(arr, ind + 1, k - arr[ind], elementCount + 1);
  if (res === true) {
    console.log(arr[ind], arr[k], elementCount);
    return true;
  }

  // exclusion
  res = choicePattern(arr, ind + 1, k, elementCount);
  return res;
};

const twoSumBySubsets = function(arr, target) {
  const sortedArr = arr.sort(compare);
  return choicePattern(arr, 0, target, 0);
};
// let a = twoSumBySubsets([6, 3, 5, 3, 6], 6);
// let ab = twoSumBySubsets([-11, 8], 8);

/*
    Given two integers n and k, return all possible combinations of k numbers out of 1...n
    input n = 4, k = 2
    output: [2,4] [3,4] [2,3] [1,2] [1,3] [1,4]
*/

const helper = (
  arr: Array<?number>,
  k: number,
  subset: Array<?number>,
  result: Array<Array<?number>> = []
): Array<Array<?number>> => {
  console.log("arr level", arr);
  if (arr.length === 0) {
    if (k === subset.length) {
      result.push(subset);
    }
  } else {
    // exclude
    console.log("exclude", subset);
    helper(arr.slice(1), k, subset, result);
    // include
    console.log("include", subset);
    helper(arr.slice(1), k, subset.concat(arr[0]), result);
  }
  return result;
};

const solve = function(arr, k) {
  if (k < 2) {
    return arr.reduce((acc, curr) => {
      acc.push([curr]);
      return acc;
    }, []);
  }
  let res = helper(arr, k, []);
  return res;
};

let a = [1, 2, 3, 4];
let x = solve(a, 3);
console.log(x);

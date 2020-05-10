// @flow
/*
    From permutations to combinations 
    Order is not important, no repetition allowed

    Given a set S of n distinct numbers, print (enumerate) all its subsets.
    Input: S = {1,2,3}
    Output: {}, {1}, {2}, {3}, {1, 2}, {2, 3}, {3, 1}, {1,2,3}


    2^n = C(n, 0) + C(n, 1) + C(n, 2) + .... + (n, n) 
*/
const generateSubsets = (
  arr: Array<?number>,
  subset: Array<?number>,
  result: Array<Array<?number>> = []
): Array<Array<?number>> => {
  if (arr.length === 0) {
    result.push(subset);
  } else {
    // exclude
    generateSubsets(arr.slice(1), subset, result);
    // include
    generateSubsets(arr.slice(1), subset.concat(arr[0]), result);
  }
  return result;
};

const printAllSubsets = function(arr: Array<?number>): void {
  const ret = generateSubsets(arr, []);
  console.log(ret);
};
let a = [1, 2, 3, 4, 5];
// printAllSubsets([1, 2, 3]);
module.exports = printAllSubsets;

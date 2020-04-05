// @flow
/*
    From permutations to combinations 
    Order is not important, no repetition allowed

    Given a set S of n distinct numbers, print (enumerate) all its subsets.
    Input: S = {1,2,3}
    Output: {}, {1}, {2}, {3}, {1, 2}, {2, 3}, {3, 1}, {1,2,3}


    2^n = C(n, 0) + C(n, 1) + C(n, 2) + .... + (n, n) 
*/

const printAllSubsetsHelper = function(
  arr: Array<?number>,
  result: Array<T> = []
): Array<Array<?number>> {
  function generateSubsets(arr, subset: Array<?number> = []) {
    if (arr.length === 0) {
      result.push(subset);
    } else {
      // exclude
      generateSubsets(arr.slice(1), subset);
      console.log("subset", subset, "arr[0]", arr[0]);
      // include
      generateSubsets(arr.slice(1), subset.concat(arr[0]));
    }
  }
  generateSubsets(arr);
  return result;
};

const printAllSubsets = function(arr: Array<?number>): void {
  const result = printAllSubsetsHelper(arr, []);
};

printAllSubsets([1, 2, 3]);

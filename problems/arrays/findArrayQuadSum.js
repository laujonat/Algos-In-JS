/*
Array Quadruplet
Given an unsorted array of integers arr and a number s, write a function findArrayQuadruplet that finds four numbers (quadruplet) in arr that sum up to s. Your function should return an array of these numbers in an ascending order. If such a quadruplet doesn’t exist, return an empty array.

Note that there may be more than one quadruplet in arr whose sum is s. You’re asked to return the first one you encounter (considering the results are sorted).

Explain and code the most efficient solution possible, and analyze its time and space complexities.

Example:

input:  arr = [2, 7, 4, 0, 9, 5, 1, 3], s = 20

output: [0, 4, 7, 9] # The ordered quadruplet of (7, 4, 0, 9)
                     # whose sum is 20. Notice that there
                     # are two other quadruplets whose sum is 20:
                     # (7, 9, 1, 3) and (2, 4, 9, 5), but again you’re
                     # asked to return the just one quadruplet (in an
                     # ascending order)
Constraints:
[time limit] 5000ms
[input] array.integer arr
1 ≤ arr.length ≤ 100
[input] integer s
[output] array.integer
*/

// O(n^3)
function findArrayQuadruplet(arr, s) {
  if (arr.length < 4) {
    return [];
  }
  const sorted = arr.sort();

  let start = 0;
  let end = arr.length - 1;
  for (let i = 0; i <= end - 3; i++) {
    for (let j = i + 1; j <= end - 2; j++) {
      let low = j + 1;
      let high = end;
      let target = s - (sorted[i] + sorted[j]);
      while (low < high) {
        if (sorted[low] + sorted[high] < target) {
          low++;
        } else if (sorted[low] + sorted[high] > target) {
          high--;
        } else {
          return [sorted[i], sorted[j], sorted[low], sorted[high]].sort(
            (a, b) => a - b
          );
        }
      }
    }
  }
  return [];
}

module.exports = findArrayQuadruplet;

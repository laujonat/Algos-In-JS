/*
Merge Overlapping Intervals

Given an array of time intervals (in any order) inputArray, of size n, merge all overlapping intervals into one and return the resulting array outputArray, such that no two intervals in outputArray are overlapping. In other words, the result array should contain only mutually exclusive intervals. Hence, in outputArray, no pair of intervals i and j exists, such that 
outputArray[i][0] <= outputArray[j][0] <= outputArray[i][1].

Consider all the intervals as closed intervals. i.e. endpoints of the intervals are inclusive.

Example One
Input:
4
2
1 3
5 7
2 4
6 8

Output:
1 4
5 8

The intervals {1,3} and {2,4} overlap with each other, so they should be merged and become {1,4}.
Similarly {5,7} and {6,8} should be merged and become {5,8}.

Example Two
Input:
7
2
100 154
13 47
1 5
2 9
7 11
51 51
47 50

Output:
1 11
13 50
51 51
100 154

The intervals {1,5} and {2,9} overlap with each other, so they should be merged and become {1,9}.
Also, {1,9} and {7,11} overlap with each other, so they should be merged and become {1,11}
Similarly, The intervals {13,47} and {47,50} should be merged and become {13,50}.
Intervals {51,51} and {100,154} are kept as it is as they are not overlapping with any other intervals.

Notes
Input Parameters: There is only one argument: inputArray, denoting input array of time intervals, where inputArray is two-dimensional array of size n*2, denoting inputArray[i][0] as start point of ith interval, and inputArray[i][1] as end point of ith interval.

Output: Return an array of time intervals outputArray, denoting the required array of merged time intervals, where outputArray is a two-dimensional array of size len*2, denoting outputArray[i][0] as start point of ith interval, and outputArray[i][1] as end point of ith interval.
(Order of intervals in outputArray doesn't matter.)

Constraints:

1 <= n <= 10^5
-10^9 <= inputArray[i][0] <= inputArray[i][1] <= 10^9,   i=0, 1, ..., (n-1)
*/

function getMergedIntervals(inputArray) {
  const sorted = inputArray.sort((a, b) => a[0] - b[0]);
  let currentStart = sorted[0][0];
  let currentEnd = sorted[0][1];
  const intervalObj = { [currentStart]: currentEnd };
  for (let i = 1; i < sorted.length; i++) {
    let [start, end] = sorted[i];
    if (currentEnd >= start) {
      // Overlapping interval
      intervalObj[currentStart] = Math.max(currentEnd, end);
    } else {
      // New interval
      currentStart = start;
      intervalObj[currentStart] = end;
    }
    currentEnd = intervalObj[currentStart];
  }

  return Object.entries(intervalObj);
}
// let intervs = [
//   [100, 154],
//   [13, 47],
//   [1, 5],
//   [2, 9],
//   [7, 11],
//   [51, 51],
//   [47, 50],
// ];
// let intervs2 = [[3, 4]];
module.exports = getMergedIntervals;

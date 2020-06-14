/*
Maximum In Sliding Window

Given an array of integers arr (of size n) and an integer w, find maximum number in all subarrays of arr of length w.

Imagine that n is very large and a sliding window of a smaller size w is moving through arr from left to right. We need to find the maximum in every position of the sliding window.

Example

Input:

arr = [1, 3, -1, -3, 5, 3, 6, 7]

w = 3
Output:

[3, 3, 5, 5, 6, 7]

Size of arr is 8 and so the size of the output array is n-w+1 = 8-3+1 = 6.

Here are all the 6 positions of the sliding window and the corresponding maximum values:

1) [1 3 -1] -3 5 3 6 7. Maximum is 3.

2) 1 [3 -1 -3] 5 3 6 7. Maximum is 3.

3) 1 3 [-1 -3 5] 3 6 7. Maximum is 5.

4) 1 3 -1 [-3 5 3] 6 7. Maximum is 5.

5) 1 3 -1 -3 [5 3 6] 7. Maximum is 6.

6) 1 3 -1 -3 5 [3 6 7]. Maximum is 7.

Notes
Input Parameters: Function has two arguments: arr and w.

Output: Function must return an array of integers of length n-w+1. i-th value in the returned array must be the maximum among arr[i], arr[i+1], ..., arr[i+w-1].

Constraints:

1 <= n <= 10^5
-2 * 10^9 <= arr[i] <= 2 * 10^9
1 <= w <= n
*/

function maxInSlidingWindow(arr, w) {}

module.exports = maxInSlidingWindow;

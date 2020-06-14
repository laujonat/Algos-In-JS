/*
Implement A Min Stack

You have to build a min stack. Min stack should support push, pop methods (as usual stack) as well as one method that returns the minimum element in the entire stack. 

You are given an integer array named operations of size n, containing values >= -1. 

operations[i] = -1 means you have to perform a pop operation. The pop operation does not return the removed/popped element.
operations[i] = 0 means you need to find the minimum element in the entire stack and add it at the end of the array to be returned.
operations[i] >= 1 means you need to push operations[i] on the stack.


Example

Input: [10, 5, 0, -1, 0, -1, 0]
Output: [5, 10, -1]

Initially stack = [], ans = [].

operations[0] = 10 -> push -> stack = [10], ans = [] 
operations[1] = 5 -> push -> stack = [10, 5], ans = []
operations[2] = 0 -> get minimum element -> stack = [10, 5], ans = [5]
operations[3] = -1 -> pop -> stack = [10], ans = [5]
operations[4] = 0 -> get minimum element ->stack = [10], ans = [5, 10]
operations[5] = -1 -> pop -> stack = [], ans = [5, 10]
operations[6] = 0 -> get minimum element -> stack = [], ans = [5, 10, -1] (as stack is empty we have to consider -1 as the minimum element.)

Notes

Input Parameters: There is only one argument in input, denoting integer array named operations. 
Output: Return an integer array res, containing answer for each operations[i] = 0. 

Constraints:
  1 <= n <= 100000
  -1 <= operations[i] <= 2 * 10^9, (i=0,1,...,n-1)

If stack is empty, then do nothing for pop operation. 
If stack is empty, then consider -1 as the minimum element.
*/

function minStack(operations) {}

module.exports = minStack;

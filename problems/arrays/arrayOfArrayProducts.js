/*
Array of Array Products
Given an array of integers arr, you’re asked to calculate for each index i the product of all integers except the integer at that index (i.e. except arr[i]). Implement a function arrayOfArrayProducts that takes an array of integers and returns an array of the products.

Solve without using division and analyze your solution’s time and space complexities.

Examples:

input:  arr = [8, 10, 2]
output: [20, 16, 80] # by calculating: [10*2, 8*2, 8*10]

input:  arr = [2, 7, 3, 4]
output: [84, 24, 56, 42] # by calculating: [7*3*4, 2*3*4, 2*7*4, 2*7*3]
Constraints:

[time limit] 5000ms

[input] array.integer arr

0 ≤ arr.length ≤ 20
[output] array.integer
*/
function arrayOfArrayProducts(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return [];
  }
  let product = 1;
  const productArr = arr.reduce((acc, el, i) => {
    acc[i] = product;
    product *= el;
    return acc;
  }, []);
  product = 1;
  return arr.reduce((acc, el, i) => {
    let idx = arr.length - i - 1;
    acc[idx] = productArr[idx] * product;
    product *= arr[idx];
    return acc;
  }, []);
}
// let arr = [1, 2, 3, 4, 5];
// let r = arrayOfArrayProducts(arr);
// console.log(r);
module.exports = arrayOfArrayProducts;

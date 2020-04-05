// @flow

var tB = [
  2,
  5,
  1,
  9,
  10,
  3,
  4,
  12,
  541,
  23,
  13,
  1,
  51,
  131,
  56,
  34,
  12,
  67,
  45,
  8,
  12,
  34,
  7,
  234,
  0
];

type R = Array<number>;

const bubbleSort = function(arr: R, n: number): R {
  for (let i = 0; i < n - 1; i++) {
    for (let j = n - 1; j >= i; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }

  return arr;
};

module.exports = { bubbleSort };

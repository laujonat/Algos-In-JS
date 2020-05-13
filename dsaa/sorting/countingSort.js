/*
  Counting Sort
  O(k) Space to create auxilary array
  O(k) Time to build auxilary array
  O(n) Time to go through and set keys in auxilary array
  T(n) = O(n + k)
*/

const CountingSort = (arr: Array<number>): Array<number> => {
  const aux = {};
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    aux[arr[i]] = aux[arr[i]] ? aux[arr[i]].count++ : { count: 0, val: arr[i] };
  }

  for (dict of Object.values(aux)) {
    while (dict.count >= 0) {
      res.push(dict.val);
      dict.count--;
    }
  }
  return res;
};

module.exports = CountingSort;

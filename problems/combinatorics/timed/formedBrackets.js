// @flow

function backtrack(
  res: Array<?string>,
  slate: string,
  numOpen: number,
  numClosed: number,
  n: number
): ?Array<?string> {
  if (numClosed === n) {
    res.push(slate);
    return;
  }
  // exclude
  if (numOpen < n) {
    backtrack(res, slate.concat("("), numOpen + 1, numClosed, n);
  }
  // include
  if (numClosed < numOpen) {
    backtrack(res, slate.concat(")"), numOpen, numClosed + 1, n);
  }
  return res;
}

module.exports = function(n: number): Array<?string> | ?string {
  if (n < 1) {
    return "";
  }
  let res = [];
  backtrack(res, "", 0, 0, n);
  return res;
};

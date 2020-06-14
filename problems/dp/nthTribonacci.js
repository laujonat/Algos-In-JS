const memo = {};

function nthTribonacci(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  if (n === 2) {
    return 1;
  }
  if (!memo[n]) {
    memo[n] =
      nthTribonacci(n - 1) + nthTribonacci(n - 2) + nthTribonacci(n - 3);
  }
  return memo[n];
}
module.exports = nthTribonacci;

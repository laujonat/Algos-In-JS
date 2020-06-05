var mem = {};
var fibWithDp = function(n) {
  if (mem[n]) {
    return mem[n];
  }
  if (n <= 2) {
    mem[n] = 1;
  } else {
    mem[n] = fibWithDp(n - 1) + fibWithDp(n - 2);
  }
  return mem[n];
};

module.exports = fibWithDp;

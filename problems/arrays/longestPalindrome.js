function longestPalindrome() {
  let max = "";

  const expandMiddle = (l, r) => {
    let i = 0;

    while (s[l - i] && s[l - i] === s[r + i]) {
      i++;
    }

    i--;

    return s.slice(l - i, r + i + 1);
  };
  if (!s.length) return "";

  for (let i = 0; i < s.length; i++) {
    const oddPalindrome = expandMiddle(i, i);
    const evenPalindrome = expandMiddle(i - 1, i);
    let len = Math.max(oddPalindrome.length, evenPalindrome.length);
    if (len > max.length) {
      max = len === oddPalindrome.length ? oddPalindrome : evenPalindrome;
    }
  }
  return max;
}

module.exports = longestPalindrome;

/*
Decode Variations
A letter can be encoded to a number in the following way:

'A' -> '1', 'B' -> '2', 'C' -> '3', ..., 'Z' -> '26'
A message is a string of uppercase letters, and it is encoded first using this scheme. For example, 'AZB' -> '1262'

Given a string of digits S from 0-9 representing an encoded message, return the number of ways to decode it.
input:  S = '1262'
output: 3

1262
1 A 
12 L
2 B
26 Z
6 F
2 B

A L B Z F B
1 26 2
1 2 6 2
12 6 2
explanation: There are 3 messages that encode to '1262': 'AZB', 'ABFB', and 'LFB'.
*/
const decodeVariations = (string) => {
  const length = string.length;
  if (parseInt(string) < 1 || length === 0 || string[0] === "0") return 0;
  if (length === 1) return 1;
  const memo = {};

  const findVariations = (start, end) => {
    if (memo[start][end]) return memo[start][end];
    const num = parseInt(string.slice(start, end));
    if (num < 1 || num > 26 || end > length || string[start] === "0") return 0;
    if (end === length) return 1;

    memo[end][end + 1] = findVariations(end, end + 1);
    memo[end][end + 2] = findVariations(end, end + 2);
    return memo[end][end + 1] + memo[end][end + 1];
  };

  return findVariations(0, 1) + findVariations(0, 2);
};
// console.log("res", decodeVariations("1262"));
module.exports = decodeVariations;

/*
Shortest Word Edit Path
Given two words source and target, and a list of words words, find the length of the shortest series of edits that transforms source to target.

Each edit must change exactly one letter at a time, and each intermediate word (and the final target word) must exist in words.

If the task is impossible, return -1.

Examples:

source = "bit", target = "dog"
words = ["but", "put", "big", "pot", "pog", "dog", "lot"]

output: 5
explanation: bit -> but -> put -> pot -> pog -> dog has 5 transitions.
source = "no", target = "go"
words = ["to"]

output: -1
Constraints:

[time limit] 5000ms
[input] string source
1 ≤ source.length ≤ 20
[input] string target
1 ≤ target.length ≤ 20
[input] array.string words
1 ≤ words.length ≤ 20
[output] array.integer

*/

const shortestWordEditPath = (source, target, words) => {
  const isOneEdit = (word1, word2) => {
    let count = 0;
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] !== word2[i]) count++;
    }
    return count <= 1;
  };

  const queue = [[source, 0]];
  const haventSeen = new Set(words);

  while (queue.length > 0) {
    let [word, distance] = queue.shift();
    if (word === target) return distance;
    haventSeen.delete(word);

    haventSeen.forEach((thing) => {
      if (isOneEdit(word, thing)) {
        queue.push([thing, distance + 1]);
      }
    });
  }

  return -1;
};

let source = "bit";
let target = "dog";
let words = ["but", "put", "big", "pot", "pog", "dog", "lot"];

module.exports = shortestWordEditPath;

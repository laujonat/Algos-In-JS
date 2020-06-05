/*
String Transformation Using Given Dictionary Of Words

You are given a dictionary of words and two strings, start and stop. All given strings have equal length.

Transform string start to string stop one character per step using words from the dictionary. For example, "abc" -> "abd" is a valid transformation step because only one character is changed (c->d) while "abc" -> "axy" is not a valid step transformation because two characters are changed (c->x and c->y).

You need to find the shortest possible sequence of strings (two or more) such that:

First string is start.
Last string is stop.
Every string (except the first one) differs from the previous one by exactly one character.
Every string (except, possibly, first and last ones) are in the dictionary of words.
i.e. output = [start, <strings from the given dictionary>, stop] and len(output) >= 2.

If two or more such sequences exist, any one of them is a correct answer.

If no such sequence is there to be found, [“-1”] (a sequence of one string, “-1”) is the correct answer.



Example One

Input:
words = ["cat", "hat", "bad", "had"]
start = "bat"
stop = "had"

Output:
["bat", "bad", "had"]
or 
["bat", "hat", "had"]

From "bat" change character 't' to 'd', so new string will be "bad".

From "bad" change character 'b' to 'h', so new string will be "had".

or

From "bat" change character 'b' to 'h', so new string will be "hat".

From "hat" change character 't' to 'd', so new string will be "had".

Notes 

Input Parameters:

There are three arguments:

Array of strings words,
String start,
String stop.
 

Output: Function must return an array of strings of length >= 2, where the first string is start and the last string is stop, if the transformation is possible. Else return an array of strings containing only one string "-1", i.e. return ["-1"].

Constraints:

All input strings consist of lowercase Latin characters only.
0 <=  total number of characters in all dictionary words combined <= 10^5.
Dictionary words are not in any particular order, there may be duplicates, too.

*/
const stringTransformation = (words, start, stop) => {
  const isSingleLetterChange = (word1, word2) => {
    let changed = false;
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] !== word2[i]) {
        if (changed === true) return false;
        changed = true;
      }
    }
    return changed;
  };

  const queue = [[start, [start]]];
  const haventSeen = new Set(words);

  while (queue.length > 0) {
    const [currentWord, path] = queue.shift();

    if (isSingleLetterChange(currentWord, stop)) {
      return path.concat(stop);
    }

    haventSeen.forEach((word) => {
      if (isSingleLetterChange(currentWord, word)) {
        haventSeen.delete(word);
        queue.push([word, path.concat(word)]);
      }
    });
  }

  return ["-1"];
};
// let source = "gggggg";
// let target = "nnnnnn";
// let words = ["but", "put", "big", "pot", "pog", "dog", "lot"];
// let words2 = ["ggggnn", "gggnnn", "gggggn", "ggnnnn", "gnnnnn"];
// let res = stringTransformation(words2, source, target);
module.exports = stringTransformation;

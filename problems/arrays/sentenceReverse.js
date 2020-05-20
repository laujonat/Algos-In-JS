/*
Sentence Reverse
You are given an array of characters arr that consists of sequences of characters separated by space characters. Each space-delimited sequence of characters defines a word.

Implement a function reverseWords that reverses the order of the words in the array in the most efficient manner.

Explain your solution and analyze its time and space complexities.
*/

function sentenceReverse(arr) {
  const reverse = arr.reduce((acc, el, i) => {
    acc[arr.length - 1 - i] = el;
    return acc;
  }, []);
  let end = reverse.length;
  let low = 0;
  let seg = 0;
  let res = [];
  let sub = [];
  while (end > 0) {
    if (reverse[seg] !== " ") {
      // console.log(low, seg);
      low++;
      [reverse[low], reverse[seg]] = [reverse[seg], reverse[low]];
      seg++;
    } else {
      low = seg;
    }
    end--;
  }

  return reverse;
}

let arr = ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"];

// let res = sentenceReverse(arr);
// console.log(res);

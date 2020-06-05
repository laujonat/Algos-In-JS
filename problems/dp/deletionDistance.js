/*
Deletion Distance
The deletion distance of two strings is the minimum number of characters you need to delete in the two strings in order to get the same string. For instance, the deletion distance between "heat" and "hit" is 3:

By deleting 'e' and 'a' in "heat", and 'i' in "hit", we get the string "ht" in both cases.
We cannot get the same string from both strings by deleting 2 letters or fewer.
Given the strings str1 and str2, write an efficient function deletionDistance that returns the deletion distance between them. Explain how your function works, and analyze its time and space complexities.

Examples:

input:  str1 = "dog", str2 = "frog"
output: 3

input:  str1 = "some", str2 = "some"
output: 0

input:  str1 = "some", str2 = "thing"
output: 9

input:  str1 = "", str2 = ""
output: 0
Constraints:

[input] string str1
[input] string str2
[output] integer
*/
function deletionDistance(str1, str2) {
  const dp = {};
  const deletionHelper = (str1, str2) => {
    let char1 = str1[0];
    let char2 = str2[0];

    if (str1.length === 0 || str2.length === 0) {
      return str1.length + str2.length;
    }
    if (dp.hasOwnProperty([str1.length, str2.length])) {
      return dp[[str1.length, str2.length]];
    }

    if (char1 !== char2) {
      dp[[str1.length, str2.length]] =
        1 +
        Math.min(
          deletionHelper(str1.slice(1), str2),
          deletionHelper(str1, str2.slice(1))
        );
    }
    if (char1 === char2) {
      dp[[str1.length, str2.length]] = deletionHelper(
        str1.slice(1),
        str2.slice(1)
      );
    }

    return dp[[str1.length, str2.length]];
  };

  return deletionHelper(str1, str2);
}
module.exports = deletionDistance;

/*
 You have a stck of n boxes, with widths w, heights h, and depths d. The boxes CAN
 be rotated and can only be stacked on top of one another if each box in the stack is strictly larger than the box above it in width, height, and dept.
 Implement a method to compute the height of the tallest possible stack. The height of
 the stack is the sum of the heights of each box;
 Input
  const boxes = [
    {height: 1, width: 1, depth: 1}, 1 
    {height: 2, width: 2, depth: 2}, 2 j: 1 j: 2
    {height: 3, width: 5, depth: 5}, 3
    {height: 4, width: 3, depth: 4}, 
    ok 3
    no ok
    {height: 5, width: 2, depth: 2},
  ]

   {height: 1, width: 1, depth: 1},
   {height: 2, width: 2, depth: 2},
  4 2 1


*/
type T = Array<{ height: number, width: number, depth: number }>;
function stackOfBoxes(boxes: T): number {
  const memo: Array<number> = [];
  const isValid = (boxes, i, j): boolean => {
    if (
      boxes[j].height < boxes[i].height &&
      boxes[j].width < boxes[i].width &&
      boxes[j].depth < boxes[i].depth
    ) {
      return true;
    }
    return false;
  };
  // return max height of bottom idx
  const helper = (boxes, bottomIdx): number => {
    if (memo[bottomIdx]) {
      console.log(bottomIdx);
      return memo[bottomIdx];
    }
    const stack = [];
    let maxHeight = 0;
    for (let i = bottomIdx + 1; i < boxes.length; i++) {
      if (isValid(boxes, bottomIdx, i)) {
        // max height of bottom
        const h = helper(boxes, i);
        maxHeight = Math.max(maxHeight, h);
      }
    }
    memo[bottomIdx] = maxHeight + boxes[bottomIdx].height;
    return memo[bottomIdx];
  };
  boxes.sort((a, b) => b.height - a.height);
  let maxHeight = 0;
  for (let i = 0; i < boxes.length; i++) {
    maxHeight = Math.max(helper(boxes, i), maxHeight);
  }
  return maxHeight;
}
// const boxes = [
//   { height: 1, width: 1, depth: 1 },
//   { height: 2, width: 2, depth: 2 },
//   { height: 3, width: 5, depth: 5 },
//   { height: 4, width: 3, depth: 4 },
//   { height: 5, width: 2, depth: 2 },
// ];
// console.log(stackOfBoxes(boxes));

module.exports = stackOfBoxes;

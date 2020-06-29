/*
@flow
Award Budget Cuts
The awards committee of your alma mater (i.e. your college/university) asked for your assistance with a budget allocation problem they’re facing. Originally, the committee planned to give N research grants this year. However, due to spending cutbacks, the budget was reduced to newBudget dollars and now they need to reallocate the grants. The committee made a decision that they’d like to impact as few grant recipients as possible by applying a maximum cap on all grants. Every grant initially planned to be higher than cap will now be exactly cap dollars. Grants less or equal to cap, obviously, won’t be impacted.

Given an array grantsArray of the original grants and the reduced budget newBudget, write a function findGrantsCap that finds in the most efficient manner a cap such that the least number of recipients is impacted and that the new budget constraint is met (i.e. sum of the N reallocated grants equals to newBudget).

Analyze the time and space complexities of your solution.

Example:

input:  grantsArray = [2, 100, 50, 120, 1000], newBudget = 190

output: 47 # and given this cap the new grants array would be
           # [2, 47, 47, 47, 47]. Notice that the sum of the
           # new grants is indeed 190
Constraints:

[time limit] 5000ms

[input] array.double grantsArray

0 ≤ grantsArray.length ≤ 20
0 ≤ grantsArray[i]
[input] double newBudget

[output] double
surplus1 = surplus0 - 1*(grantsArray[0]-grantsArray[1]).
surplus2 = surplus1 - 2*(grantsArray[1]-grantsArray[2]).
surplus3 = surplus2 - 3*(grantsArray[2]-grantsArray[3]).
*/

type T = Array<number>;
function awardBudgetCuts(grants: T, newBudget: number): number {
  grants.sort((a, b) => b - a);
  let rsum = grants.reduce((acc, el, i) => {
    acc += el;
    return acc;
  }, 0);
  let surplus = rsum - newBudget;
  if (surplus <= 0) {
    return grants[0];
  }
  grants.push(0);
  let ii = 0;
  for (let i = 0; i < grants.length; i++) {
    ii = i;
    surplus -= (i + 1) * (grants[i] - grants[i + 1]);
    console.log(surplus);
    if (surplus <= 0) {
      return grants[i + 1] + -surplus / (i + 1);
    }
  }
  return newBudget;
}

let grantsArray = [2, 100, 50, 120, 1000],
  newBudget = 190;
console.log(awardBudgetCuts(grantsArray, newBudget));

module.exports = awardBudgetCuts;

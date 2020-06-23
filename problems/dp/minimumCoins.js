/*
Minimum Coins
Given a variety of coin types defining a currency system, find the minimum number of coins required to express a given amount of money. Assume infinite supply of coins of every type. 
Example

Input: Coin types: [1, 3, 5]. Amount to express: 9.

Output: 3
Here are all the unique ways to express 9 as a sum of coins 1, 3 and 5:
1, 1, 1, 1, 1, 1, 1, 1, 1
1, 1, 1, 1, 1, 1, 3
1, 1, 1, 1, 5
1, 1, 1, 3, 3
1, 3, 5
3, 3, 3

Last two ways use the minimal number of coins, 3.
*/

function minimumCoins(coins, target) {
  const minCoins = Array(coins.length + 1);
  minCoins[0] = 0;
  for (let i = 1; i <= target; i++) {
    let numCoins = Number.POSITIVE_INFINITY;
    for (let j = 0; j < coins.length; j++) {
      if (i < coins[j]) {
        continue;
      }
      numCoins = Math.min(numCoins, 1 + minCoins[i - coins[j]]);
    }
    minCoins[i] = numCoins;
  }
  return minCoins[target];
}

// var denominations = [1, 3, 5];
// var amount = 9;
// console.log(minimumCoins(denominations, amount));
// const coins = [1, 3, 5];
// console.log(minimumCoins(coins, 9));
module.exports = minimumCoins;

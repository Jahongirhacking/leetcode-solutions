# Complexity
- Time complexity: O(NlogN)

# Code
``` javascript []
/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices, money) {
    prices.sort((a, b) => a - b);
    const twoChoco = prices[0] + prices[1];
    if (twoChoco > money) return money;
    return money - twoChoco;
};
```
``` typescript []
function buyChoco(prices: number[], money: number): number {
    prices.sort((a, b) => a - b);
    const twoChoco = prices[0] + prices[1];
    if (twoChoco > money) return money;
    return money - twoChoco;
};
```

https://leetcode.com/problems/buy-two-chocolates/solutions/4429612/easy-solution-in-javascript-typescript/

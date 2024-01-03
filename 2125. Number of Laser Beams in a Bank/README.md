# ✅ O(N) Easy Solution using Math in JavaScript

# Problem Description Link:
https://leetcode.com/problems/number-of-laser-beams-in-a-bank

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

# Code
``` javascript []
/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
    let res = 0;
    let temp = [];
    for(let floor of bank) {
        let cnt = 0;
        for(let sign of floor) cnt += Number(sign);
        cnt && temp.push(cnt);
    }

    for (let i = 0; i < temp.length - 1; i++) {
        res += temp[i] * temp[i + 1];
    }

    return res;
};
```

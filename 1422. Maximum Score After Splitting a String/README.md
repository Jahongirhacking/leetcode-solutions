# Problem Description Link
https://leetcode.com/problems/maximum-score-after-splitting-a-string/description/

# Approach
- Find the number of ones and assign it to score
- Iterate through numbers
- If the number is 1, decrease the score by 1, else increase the score by 1

# Complexity
- Time complexity: O(N)

# Code
``` javascript []
/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
    let score = s.split('').filter(el => el === '1').length;
    let max = 0;
    for (let i = 0; i < s.length - 1; i++) {
        const el = s[i];
        el === '1' ? score-- : score++;
        max = Math.max(max, score);
    }
    return max;
};
```
``` typescript []
function maxScore(s: string): number {
    let score = s.split('').filter(el => el === '1').length;
    let max = 0;
    for (let i = 0; i < s.length - 1; i++) {
        const el = s[i];
        el === '1' ? score-- : score++;
        max = Math.max(max, score);
    }
    return max;
};
```

https://leetcode.com/problems/maximum-score-after-splitting-a-string/solutions/4442813/beat-98-using-filter-in-javascript

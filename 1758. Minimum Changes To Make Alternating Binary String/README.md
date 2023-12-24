# Problem Description Link
https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/

# Approach
<!-- Describe your approach to solving the problem. -->
- Correct form should be in these forms: `1010...10` or `0101...01`
- It depends on numbers whether it's position is odd or even index
- I return the minimum number between the number of 1s in odd indices and the number of 0s in even indices

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
    let n = s.length;
    let cnt1 = 0, cnt2 = 0;

    for (let i = 0; i < n; ++i) {
        if (i % 2 === 0) {
            s[i] === '0' ? cnt1++ : cnt2++;
        } else {
            s[i] === '1' ? cnt1++ : cnt2++;
        }
    }

    return Math.min(cnt1, cnt2);
};

```

https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/solutions/4452886/easy-solution-in-javascript/ 

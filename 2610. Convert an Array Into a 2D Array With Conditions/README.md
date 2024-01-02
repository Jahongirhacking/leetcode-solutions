# ✅ Easy Solution using Set in JavaScript

# Problem Description Link:
https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions

# Approach
<!-- Describe your approach to solving the problem. -->
- Iterate through the array, get all unique integers in an another array
- If there are remaining integers then repeat the process

# Complexity
- Time complexity: O(N) the best case, O(N^2) the worst case 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

# Code
``` javascript []
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    const res = [];
    while(nums.length) {
        const temp = [];
        const set = new Set();
        for(let num of nums) {
            if(set.has(num)) {
                temp.push(num);
            } else {
                set.add(num);
            }
        }
        res.push([...set]);
        nums = [...temp];
    }
    return res;
};
```

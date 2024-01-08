# Problem Description Link:
https://leetcode.com/problems/range-sum-of-bst/

# Complexity
- Time complexity: O(N+V)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

# Code
``` javascript []
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
    const queue = [root];
    let sum = 0;
    while (queue.length) {
        const {val, left, right} = queue.shift();
        sum += val >= low && val <= high ? val : 0;
        if(left) queue.push(left);
        if(right) queue.push(right);
    }
    return sum;
};
```

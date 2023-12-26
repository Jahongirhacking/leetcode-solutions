# Problem Description Link:
https://leetcode.com/problems/second-minimum-node-in-a-binary-tree

# Complexity
- Time complexity: O(N+V)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

# Code
```
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
 * @return {number}
 */
var findSecondMinimumValue = function (root) {
    const set = new Set();
    const queue = [root];
    while (queue.length) {
        const temp = queue.shift();
        set.add(temp.val);
        if (temp.left) queue.push(temp.left);
        if (temp.right) queue.push(temp.right);
    }
    const secondMin = [...set].sort((a, b) => a - b)[1];
    return secondMin || -1;
};
```

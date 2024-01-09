# Problem Description Link:
https://leetcode.com/problems/leaf-similar-trees

# Approach
<!-- Describe your approach to solving the problem. -->
- A function that use DFS traveling to save all leaves in an Array
- A function to check two arrays' equality 

# Complexity
- Time complexity: O(N)
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */

var leafSimilar = function (root1, root2) {
    const checkArrayIsEqual = (arr1, arr2) => {
        const n = arr1.length;
        if (n !== arr2.length) return false;
        for (let i = 0; i < n; i++) if (arr1[i] !== arr2[i]) return false;
        return true;
    }
    const getLeaves = (root) => {
        const leaves = [];
        const stack = [root];
        while (stack.length) {
            const { val, left, right } = stack.shift();
            if (!left && !right) leaves.unshift(val);
            else {
                if (left) stack.unshift(left);
                if (right) stack.unshift(right);
            }
        }
        return [...leaves];
    }
    const leaves1 = getLeaves(root1);
    const leaves2 = getLeaves(root2);
    console.log(leaves1, leaves2);
    return checkArrayIsEqual(leaves1, leaves2)
};
```

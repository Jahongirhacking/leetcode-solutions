/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
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
    return checkArrayIsEqual(leaves1, leaves2);
};

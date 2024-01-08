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

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
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

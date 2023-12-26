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

function findSecondMinimumValue(root: TreeNode | null): number {
    const set = new Set<number>();
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

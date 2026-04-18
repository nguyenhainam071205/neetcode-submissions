/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 * this.val = (val===undefined ? 0 : val)
 * this.left = (left===undefined ? null : left)
 * this.right = (right===undefined ? null : right)
 * }
 */

class Solution {
    /**
     * @param {TreeNode} current
     * @param {number} currentMax
     * @param {object} countObj
     * @return {void}
     */
    dfs(current, minBound, maxBound) {
        if(!current) return true;

        if(current.val <= minBound || current.val >= maxBound) {
            return false;
        }

        return this.dfs(current.left, minBound, current.val) && 
                this.dfs(current.right, current.val, maxBound)
    }

    isValidBST(root) {
        return this.dfs(root, -Infinity, Infinity);
    }
}
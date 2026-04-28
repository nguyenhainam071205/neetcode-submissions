/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    inorder(root, obj, k) {
        if(!root) return;

        this.inorder(root.left, obj, k);
        obj.cnt++;
        if(obj.cnt === k) {
            obj.result = root.val;
            return;
        }
        this.inorder(root.right, obj, k);
    }


    kthSmallest(root, k) {
        let obj = {
            cnt: 0,
            result: -1
        }
        this.inorder(root, obj, k);
        return obj.result;
    }
}

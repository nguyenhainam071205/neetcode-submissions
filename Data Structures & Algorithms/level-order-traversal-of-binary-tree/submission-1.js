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
     * @return {number[][]}
     */
    levelOrder(root) 
    {
        if(!root) return [];
        
        let ans = [];
        let queue = [root];

        while(queue.length > 0) {
            let currentLevelLength = queue.length;
            let tmp = [];
            for(let i = 0; i < currentLevelLength; i++) {
                let current = queue.shift();
                tmp.push(current.val);
                if(current.left) queue.push(current.left);
                if(current.right) queue.push(current.right);
            }
            ans.push(tmp);
        }

        return ans;
    }
}

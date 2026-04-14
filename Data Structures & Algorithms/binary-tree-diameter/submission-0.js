/**
 * Definition for a binary tree node.
 * class TreeNode {
 * constructor(val = 0, left = null, right = null) {
 * this.val = val;
 * this.left = left;
 * this.right = right;
 * }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let maxDiameter = 0;

        // Định nghĩa hàm đệ quy ngay bên trong để truy cập biến maxDiameter
        function dfs(node) {
            if (!node) return 0;

            const leftDepth = dfs(node.left);
            const rightDepth = dfs(node.right);

            // Cập nhật biến maxDiameter ở phạm vi bên ngoài
            maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);

            return 1 + Math.max(leftDepth, rightDepth);
        }

        dfs(root);
        
        return maxDiameter;
    }
}
class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    maxHeight(root) {
        if (!root) return 0;

        // Added 'this.' to properly reference the class method
        const leftDepth = this.maxHeight(root.left);
        if (leftDepth === -1) return -1;

        // Added 'this.' to properly reference the class method
        const rightDepth = this.maxHeight(root.right);
        if (rightDepth === -1) return -1;

        if (Math.abs(leftDepth - rightDepth) > 1) return -1;

        return 1 + Math.max(leftDepth, rightDepth);
    }

    isBalanced(root) {
        const ans = this.maxHeight(root);
        return ans !== -1;
    }
}
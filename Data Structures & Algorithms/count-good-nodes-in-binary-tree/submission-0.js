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
    dfs(current, currentMax, countObj) {
        if (!current) return;

        // Nếu giá trị node hiện tại >= giá trị lớn nhất trên đường đi
        if (current.val >= currentMax) {
            countObj.goodNodeCount += 1;
        }

        // Cập nhật giá trị lớn nhất mới cho các node con
        let nextMax = Math.max(currentMax, current.val);

        // Gọi đệ quy cho nhánh trái và phải (nhớ dùng this.)
        this.dfs(current.left, nextMax, countObj);
        this.dfs(current.right, nextMax, countObj);
    }

    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        if (!root) return 0;

        let countObj = {
            goodNodeCount: 0,
        };

        // Bắt đầu DFS từ root, currentMax ban đầu chính là giá trị của root
        this.dfs(root, root.val, countObj);
        
        return countObj.goodNodeCount;
    }
}
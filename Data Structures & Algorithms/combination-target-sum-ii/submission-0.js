class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @param {number[][]} res
     * @param {number[]} temp
     * @param {number} start
     */
    // Sửa lỗi: Khai báo hàm trong class không dùng từ khóa const/let 
    // và cần thêm tham số target (hoặc dùng this.target nếu là biến toàn cục)
    findAllCombination(candidates, target, res, temp, start) {
        if (target === 0) {
            res.push([...temp]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            // Tối ưu: Nếu số hiện tại lớn hơn target thì các số sau (đã sort) cũng vậy
            if (candidates[i] > target) break;

            // Xử lý trùng lặp (Duplicate Handling)
            if (i > start && candidates[i] === candidates[i - 1]) continue;

            temp.push(candidates[i]);
            
            // Gọi đệ quy thông qua 'this'
            this.findAllCombination(candidates, target - candidates[i], res, temp, i + 1);
            
            // Backtrack
            temp.pop();
        }
    }

    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const res = [];
        // Sắp xếp mảng tăng dần
        candidates.sort((a, b) => a - b);
        
        this.findAllCombination(candidates, target, res, [], 0);
        return res;
    }
}
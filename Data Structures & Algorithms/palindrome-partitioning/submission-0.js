class Solution {
  /**
   * @param {string} s
   * @return {string[][]}
   */
  partition(s) {
    if (s.length === 1) return [[s]];
    
    let res = [];
    // Gọi phương thức trong class phải dùng this.
    this.backtracking(0, s, [], res);
    
    return res;
  }

  backtracking(start, s, currentPartition, res) {
    // Điều kiện dừng: Khi đã duyệt hết chuỗi
    if (start === s.length) {
      res.push([...currentPartition]);
      return;
    }

    for (let end = start; end < s.length; end++) {
      // Kiểm tra palindrome bằng this.isPalindrome
      if (this.isPalindrome(s, start, end)) {
        // 1. Chọn
        currentPartition.push(s.substring(start, end + 1));
        
        // 2. Đệ quy tiếp tục với phần còn lại
        this.backtracking(end + 1, s, currentPartition, res);
        
        // 3. Quay lui (Backtrack)
        currentPartition.pop();
      }
    }
  }

  isPalindrome(s, left, right) {
    while (left <= right) {
      if (s.charAt(left) !== s.charAt(right)) return false;
      left += 1;
      right -= 1;
    }
    return true;
  }
}
class Solution {
  /**
   * @param {number} n
   * @return {string[]}
   */
  generateParenthesis(n) {
    const res = [];
    
    // Hàm backtrack hỗ trợ (helper function)
    const findAllCombinations = (temp, openCount, closeCount) => {
      // Điều kiện dừng: khi chuỗi đã đủ độ dài 2n
      if (temp.length === 2 * n) {
        res.push(temp);
        return;
      }

      // Quy tắc 1: Có thể thêm dấu '(' nếu chưa dùng hết n dấu
      if (openCount < n) {
        findAllCombinations(temp + "(", openCount + 1, closeCount);
      }

      // Quy tắc 2: Có thể thêm dấu ')' nếu số lượng '(' đang nhiều hơn ')'
      if (closeCount < openCount) {
        findAllCombinations(temp + ")", openCount, closeCount + 1);
      }
    };

    findAllCombinations("", 0, 0);
    return res;
  }
}
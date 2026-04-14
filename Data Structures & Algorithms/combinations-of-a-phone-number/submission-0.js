class Solution {
  /**
   * Phương thức đệ quy (Helper method)
   */
  findAllLetterCombination(index, digits, temp, map, res) {
    // Điều kiện dừng
    if (temp.length === digits.length) {
      res.push(temp);
      return;
    }

    const currentDigit = digits.charAt(index);
    const letters = map[currentDigit];

    // Nếu tồn tại các chữ cái tương ứng với số này
    if (letters) {
      for (const char of letters) {
        // Lưu ý: Phải dùng `this.` để gọi một phương thức khác trong cùng một class
        this.findAllLetterCombination(index + 1, digits, temp + char, map, res);
      }
    }
  }

  /**
   * Phương thức chính
   */
  letterCombinations(digits) {
    // Bắt lỗi rỗng: Thường các bài trên LeetCode sẽ yêu cầu trả về [] nếu chuỗi rỗng
    if (!digits || digits.length === 0) return [];

    const map = {
      "2": "abc",
      "3": "def",
      "4": "ghi",
      "5": "jkl",
      "6": "mno",
      "7": "pqrs",
      "8": "tuv",
      "9": "wxyz"
    };
    
    const res = [];
    
    // Gọi phương thức đệ quy bằng `this.`
    this.findAllLetterCombination(0, digits, "", map, res);
    
    return res;
  }
}
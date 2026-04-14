class Solution {
  /**
   * @param {number} n
   * @return {string[][]}
   */
  solveNQueens(n) {
    const res = [];
    const board = Array.from({ length: n }, () => Array(n).fill('.'));
    
    const cols = new Set();
    const postDiag = new Set();
    const reverseDiag = new Set();

    // Gọi phương thức backtracking của class thông qua 'this'
    this.backtracking(0, n, cols, postDiag, reverseDiag, board, res);
    
    return res;
  }

  /**
   * Phương thức helper xử lý đệ quy
   */
  backtracking(row, n, cols, postDiag, reverseDiag, board, res) {
    // Điều kiện dừng: đã xếp đủ n quân hậu
    if (row === n) {
      res.push(board.map(r => r.join('')));
      return;
    }

    for (let col = 0; col < n; col++) {
      // Kiểm tra xem vị trí có bị tấn công không
      if (cols.has(col) || postDiag.has(row - col + n - 1) || reverseDiag.has(row + col)) {
        continue;
      }

      // Đặt quân hậu
      board[row][col] = 'Q';
      cols.add(col);
      postDiag.add(row - col + n - 1);
      reverseDiag.add(row + col);

      // Đệ quy sang hàng tiếp theo
      this.backtracking(row + 1, n, cols, postDiag, reverseDiag, board, res);

      // Backtrack: Rút lại quân hậu để thử trường hợp khác
      board[row][col] = '.';
      cols.delete(col);
      postDiag.delete(row - col + n - 1);
      reverseDiag.delete(row + col);
    }
  }
}
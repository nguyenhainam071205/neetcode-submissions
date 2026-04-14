class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        if (!board || board.length === 0) return false;

        const m = board.length;
        const n = board[0].length;
        
        // Mảng hướng để di chuyển: Lên, Phải, Xuống, Trái
        const directionX = [-1, 0, 1, 0];
        const directionY = [0, 1, 0, -1];

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                // Nếu ký tự đầu tiên khớp, bắt đầu tìm kiếm DFS
                if (board[i][j] === word.charAt(0)) {
                    if (this.#dfs(board, word, i, j, 0, directionX, directionY)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    /**
     * Phương thức Private DFS (Sử dụng dấu #)
     */
    #dfs(board, word, r, c, index, directionX, directionY) {
        // Điều kiện dừng: Nếu đã tìm khớp hết toàn bộ các ký tự của word
        if (index === word.length) {
            return true;
        }

        // Kiểm tra điều kiện biên và ký tự có khớp không
        if (
            r < 0 || c < 0 || 
            r >= board.length || 
            c >= board[0].length || 
            board[r][c] !== word.charAt(index)
        ) {
            return false;
        }

        // Bước Backtracking: Đánh dấu ô hiện tại đã sử dụng
        const char = board[r][c];
        board[r][c] = '#';

        // Duyệt 4 hướng
        for (let i = 0; i < 4; i++) {
            let newR = r + directionX[i];
            let newC = c + directionY[i];
            
            // Gọi đệ quy cho ký tự tiếp theo
            if (this.#dfs(board, word, newR, newC, index + 1, directionX, directionY)) {
                return true;
            }
        }

        // Khôi phục lại trạng thái ban đầu (Backtrack)
        board[r][c] = char;
        return false;
    }
}
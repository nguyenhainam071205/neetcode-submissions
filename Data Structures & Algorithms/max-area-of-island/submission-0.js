class Solution {
  dX = [-1, 0, 1, 0];
  dY = [0, 1, 0, -1];

  dfs(r, c, matrix, n, m) {
    if (r < 0 || r === n || c < 0 || c === m || matrix[r][c] === 0) {
      return 0;
    }

    let area = 1;
    matrix[r][c] = 0; // Đánh dấu đã thăm

    for (let k = 0; k < 4; k++) {
      area += this.dfs(r + this.dX[k], c + this.dY[k], matrix, n, m);
    }

    return area;
  }

  maxAreaOfIsland(matrix) {
    if (!matrix || matrix.length === 0) return 0;

    let maxArea = 0;

    const n = matrix.length;
    const m = matrix[0].length;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (matrix[i][j] === 1) {
          const currentArea = this.dfs(i, j, matrix, n, m);
          maxArea = Math.max(maxArea, currentArea);
        }
      }
    }
    return maxArea;
  }
}
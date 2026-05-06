class Solution {
  dX = [-1, 0, 1, 0];
  dY = [0, 1, 0, -1];

  bfs(r, c, matrix, n, m) {
    let area = 1;
    let queue = [[r, c]];
    matrix[r][c] = 0;

    while (queue.length > 0) {
      const current = queue.shift();
      if (!current) continue;
      const [curR, curC] = current;

      for (let k = 0; k < 4; k++) {
        const nextR = curR + this.dX[k];
        const nextC = curC + this.dY[k];

        if (
          nextR >= 0 && nextR < n &&
          nextC >= 0 && nextC < m &&
          matrix[nextR][nextC] === 1
        ) {
          area += 1;
          matrix[nextR][nextC] = 0;
          queue.push([nextR, nextC]);
        }
      }
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
          const currentArea = this.bfs(i, j, matrix, n, m);
          maxArea = Math.max(maxArea, currentArea);
        }
      }
    }
    return maxArea;
  }
}
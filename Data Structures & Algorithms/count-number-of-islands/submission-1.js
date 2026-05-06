

class DSU {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.size = Array.from({ length: n }, () => 1);
    this.count = 0;
  }

  addCount() {
    this.count++;
  }

  getCount() {
    return this.count;
  }

  find(u) {
    if (u === this.parent[u]) {
      return u;
    }
    return this.parent[u] = this.find(this.parent[u]); // Path compression
  }

  union(u, v) {
    const rootU = this.find(u);
    const rootV = this.find(v);
    
    if (rootU !== rootV) {
      if (this.size[rootU] < this.size[rootV]) {
        this.parent[rootU] = rootV;
        this.size[rootV] += this.size[rootU];
      } else {
        this.parent[rootV] = rootU;
        this.size[rootU] += this.size[rootV];
      }
      // FIXED: Đưa count-- vào bên trong khối if
      this.count--;
    }
  }
}

class Solution {
  constructor() {
    this.dX = [-1, 0, 1, 0];
    this.dY = [0, 1, 0, -1];
  }

  dfs(r, c, matrix, n, m) {
    if (r < 0 || r === n || c < 0 || c === m || matrix[r][c] === "0") {
      return;
    }

    matrix[r][c] = "0"; // Đánh dấu đã thăm

    for (let k = 0; k < 4; k++) {
      this.dfs(r + this.dX[k], c + this.dY[k], matrix, n, m);
    }
  }

  bfs(r, c, matrix, n, m) {
    let queue = [[r, c]];
    matrix[r][c] = "0";

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
          matrix[nextR][nextC] === "1"
        ) {
          matrix[nextR][nextC] = "0";
          queue.push([nextR, nextC]);
        }
      }
    }
  }

  count(matrix) {
    if (!matrix || matrix.length === 0) return 0;

    let count = 0;
    const n = matrix.length;
    const m = matrix[0].length;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (matrix[i][j] === "1") {
          count++;
          // Bạn có thể linh hoạt chọn this.dfs hoặc this.bfs ở đây
          this.bfs(i, j, matrix, n, m);
        }
      }
    }
    return count;
  }

  numIslands(matrix) {
    if (!matrix || matrix.length === 0) return 0;
    
    const n = matrix.length;
    const m = matrix[0].length;
    const dsu = new DSU(n * m);

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (matrix[i][j] === '1') {
          dsu.addCount();

          const index = i * m + j;
          const direction = [[0, -1], [-1, 0]]; // Left - Up
          
          for (let k = 0; k < direction.length; k++) {
            const previousI = i + direction[k][0];
            const previousJ = j + direction[k][1];

            if (previousI >= 0 && previousJ >= 0 && matrix[previousI][previousJ] === '1') {
              const previousIndex = previousI * m + previousJ;
              dsu.union(index, previousIndex);
            }
          }
        }
      }
    }

    return dsu.getCount();
  }
}
class DSU {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.size = Array.from({ length: n }, () => 1);
  }

  find(u) {
    if (u === this.parent[u]) {
      return u;
    }
    return this.parent[u] = this.find(this.parent[u]);
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
    }
  }

  // Dùng vòng lặp thay vì Math.max(...this.size) để an toàn với ma trận lớn
  getMaxSize() {
    let max = 0;
    for (let i = 0; i < this.size.length; i++) {
      if (this.size[i] > max) {
        max = this.size[i];
      }
    }
    return max;
  }
}

class Solution {
  maxAreaOfIsland(matrix) {
    if (!matrix || matrix.length === 0) return 0;
    
    const n = matrix.length;
    const m = matrix[0].length;
    const dsu = new DSU(n * m);
    let hasIsland = false; 

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (matrix[i][j] === 1) {
          hasIsland = true;
          const index = i * m + j;

          // Chỉ cần check Trái và Trên là đủ để quét toàn bộ kết nối
          const direction = [[0, -1], [-1, 0]]; 
          
          for (let k = 0; k < direction.length; k++) {
            const previousI = i + direction[k][0];
            const previousJ = j + direction[k][1];

            // Nếu ô trước đó hợp lệ và cũng là đất (1) thì gộp lại
            if (previousI >= 0 && previousJ >= 0 && matrix[previousI][previousJ] === 1) {
              const previousIndex = previousI * m + previousJ;
              dsu.union(index, previousIndex);
            }
          }
        }
      }
    }

    // Trả về diện tích lớn nhất thay vì số lượng thao tác union
    return hasIsland ? dsu.getMaxSize() : 0;
  }
}
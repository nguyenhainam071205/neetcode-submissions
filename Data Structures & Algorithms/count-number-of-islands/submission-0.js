/**
 * @param {character[][]} grid
 * @return {number}
 */
class Solution {
    // We can define directions as a property or just use them inside the method
    dX = [-1, 0, 1, 0];
    dY = [0, 1, 0, -1];

    dfs(r, c, grid, n, m) {
        // Boundary and water check
        if (r < 0 || r >= n || c < 0 || c >= m || grid[r][c] === "0") {
            return;
        }

        // Sink the island
        grid[r][c] = "0";

        // Explore neighbors
        for (let k = 0; k < 4; k++) {
            this.dfs(r + this.dX[k], c + this.dY[k], grid, n, m);
        }
    }

    numIslands(grid) {
        if (!grid || grid.length === 0) return 0;

        let count = 0;
        const n = grid.length;
        const m = grid[0].length;

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (grid[i][j] === "1") {
                    count++;
                    // Must use 'this' to call the sibling method
                    this.dfs(i, j, grid, n, m);
                }
            }
        }

        return count;
    }
}
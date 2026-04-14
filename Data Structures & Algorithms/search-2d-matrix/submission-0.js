class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rows = matrix.length, cols = matrix[0].length
        let top = 0, bottom = rows - 1;

        while(top <= bottom) {
            let midRow = Math.floor((top + bottom) / 2);
            if(matrix[midRow][cols - 1] === target) return true;
            else if(matrix[midRow][0] > target) bottom = midRow - 1;
            else if(matrix[midRow][cols - 1] < target) top = midRow + 1;
            else {
                let l = 0, r = cols - 1;
                while(l <= r) {
                    let midCol = Math.floor((l + r) / 2);
                    if(matrix[midRow][midCol] === target) return true;
                    else if(matrix[midRow][midCol] < target) l = midCol + 1;
                    else r = midCol - 1;
                }
                return false;
            }
        }

        return false;
    }
}

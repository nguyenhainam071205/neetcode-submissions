class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for(let i = 0; i < 9; i++) {
            let rowSet = new Set();
            for(let j = 0; j < 9; j++) {
                if(board[i][j] === '.') continue;
                if(rowSet.has(board[i][j])) return false;
                rowSet.add(board[i][j]);
            }
        }

        for(let j = 0; j < 9; j++) {
            let colSet = new Set();
            for(let i = 0; i < 9; i++) {
                if (board[i][j] === '.') continue;
                if(colSet.has(board[i][j])) return false;
                colSet.add(board[i][j]);
            }
        }

        for(let square = 0; square < 9; square++) {
            let squareSet = new Set();
            for(let i = 0; i < 3; i++) {
                for(let j = 0; j < 3; j++) {
                    let row = Math.floor(square / 3) * 3 + i;
                    let col = (square % 3) * 3 + j;
                    if (board[row][col] === '.') continue;
                    if(squareSet.has(board[row][col])) return false;
                    squareSet.add(board[row][col]);
                }
            }
        }

        return true;
    }
}

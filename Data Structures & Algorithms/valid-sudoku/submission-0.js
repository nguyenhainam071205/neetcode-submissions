class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rowSet = [], colSet = [], squareSet = [];

        for(let i = 0; i < 9; i++) {
            rowSet[i] = new Set();
            colSet[i] = new Set();
            squareSet[i] = new Set();
        }

        for(let i = 0; i < 9; i++) {
            for(let j = 0; j < 9; j++) {
                if(board[i][j] === '.') continue;

                let squareNum = Math.floor(i / 3) * 3 + (Math.floor(j / 3));
                let val =  board[i][j];
                if(rowSet[i].has(board[i][j]) || colSet[j].has(board[i][j]) || squareSet[squareNum].has(board[i][j])) {
                    return false;
                }

                rowSet[i].add(board[i][j]);
                colSet[j].add(board[i][j]);
                squareSet[squareNum].add(board[i][j]);
            }
        }

        return true;
    }
}

/**
 * Problem URL: https://leetcode.com/problems/word-search/description/
 * 
 * Used Algorithms: DFS
 * 
 * Description: Check URL
 * 
 * Objective: Return true if the word exists in the board.
 **/

const solution = (board, word) => {
    const rowLimit = board.length;
    const colLimit = board[0].length;

    const dfs = (rowIndex, colIndex, index) => {
        if (index === word.length) return true;
        if (rowIndex < 0 || colIndex < 0 || rowIndex >= rowLimit || colIndex >= colLimit || board[rowIndex][colIndex] !== word[index]) return false;

        const temp = board[rowIndex][colIndex];
        board[rowIndex][colIndex] = '#';
        const result = dfs(rowIndex + 1, colIndex, index + 1) || dfs(rowIndex - 1, colIndex, index + 1) || dfs(rowIndex, colIndex + 1, index + 1) || dfs(rowIndex, colIndex - 1, index + 1);
        board[rowIndex][colIndex] = temp;
        return result;
    }

    for (let row = 0; row < rowLimit; row++) {
        for (let col = 0; col < colLimit; col++) {
            if (dfs(row, col, 0)) return true;
        }
    }
    return false;
};

// Test cases
console.log(solution([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED")); // Expected: true
console.log(solution([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "SEE")); // Expected: true
console.log(solution([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCB")); // Expected: false 
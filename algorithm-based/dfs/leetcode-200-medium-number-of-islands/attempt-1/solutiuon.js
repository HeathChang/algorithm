/**
 * Problem URL: https://leetcode.com/problems/number-of-islands/description/
 *
 * Used Algorithms: DFS
 *
 * Description: Check URL
 *
 * Objective: Count the number of islands in the grid.
 **/

const solution = (grid) => {
    const rows = grid.length;
    const cols = grid[0].length;

    const visited = new Set();
    let count = 0;

    const dfs = (rowIndex, colIndex) => {
        if (rowIndex < 0 || colIndex < 0 || rowIndex >= rows || colIndex >= cols || grid[rowIndex][colIndex] === '0' || visited.has(`${rowIndex},${colIndex}`)) return;

        visited.add(`${rowIndex},${colIndex}`)
        dfs(rowIndex + 1, colIndex) || dfs(rowIndex - 1, colIndex) || dfs(rowIndex, colIndex + 1) || dfs(rowIndex, colIndex - 1)
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === '1' && !visited.has(`${row},${col}`)) {
                dfs(row, col);
                count += 1;
            }
        }
    }
    return count;
};

// Test cases
console.log(solution([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
])); // Expected: 1
console.log(solution([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
])); // Expected: 3

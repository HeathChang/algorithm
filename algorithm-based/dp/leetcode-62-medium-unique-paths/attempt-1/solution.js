/**
 * Problem URL: https://leetcode.com/problems/unique-paths/description/
 *
 * Used Algorithms: DP
 *
 * Description: Check URL
 *
 * Objective:
 **/

const solution = (m, n) => {
    const dp = Array.from({ length: m }, () => Array(n).fill(0));
    dp[0][0] = 1;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i > 0) dp[i][j] += dp[i - 1][j];
            if (j > 0) dp[i][j] += dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
};

// Test cases
console.log(solution(3, 7)); // Expected: 28
console.log(solution(3, 2)); // Expected: 3
/**
 * Problem URL: https://leetcode.com/problems/climbing-stairs/description/
 *
 * Used Algorithms: DP
 *
 * Description: Check URL
 *
 * Objective: how many distinct ways can you climb to the top (min 1, max 2)
 **/

const solution = (n) => {
    if (n <= 3) return n;
    const dp = Array.from({ length: n })
    dp[0] = 1;
    dp[1] = 2;
    for (let i = 2; i < n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n - 1]
};

// Test cases
console.log(solution(4)); // Expected: 5
console.log(solution(5)); // Expected: 8

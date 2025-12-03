/**
 * OBJECTIVE: Best Time to Buy and Sell Stock
 * ALGORITHM: Two Pointers
 **/

const solution = (n, v) => {
    // ATTEMPT 1: Two Pointers
    // let left = 0;
    // let right = 1;
    // let maxProfit = Number.MIN_SAFE_INTEGER;
    // while (right < n) {
    //     const profit = v[left] - v[right];
    //     maxProfit = Math.max(maxProfit, profit);
    //     if (v[right] > v[left]) left = right;
    //     right++;
    // }

    // return maxProfit;

    // ATTEMPT 2: Optimized Greedy Algorithm
    let maxSell = v[0];
    let maxProfit = Number.MIN_SAFE_INTEGER;

    for (let j = 1; j < n; j++) {
        maxProfit = Math.max(maxProfit, maxSell - v[j]);
        if (v[j] > maxSell) maxSell = v[j];
    }

    return maxProfit;
};

// Test cases
console.log(solution(10, [3, 1, 4, 1, 5, 9, 2, 6, 5, 3])); // Expected: 7
console.log(solution(10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Expected: -1
console.log(solution(6, [4, 1, 7, 6, 5, 2])); // Expected: 5
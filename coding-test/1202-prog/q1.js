/**
 * OBJECTIVE: estimates 배열에서 K일동안 추정 접속자수의 합이 최대가 되는 값을 반환
 * ALGORITHM: Sliding Window
 **/

const solution = (estimates, k) => {
    let maxSum = 0;
    let currentSum = 0;
    for (let i = 0; i < k; i++) currentSum += estimates[i];
    maxSum = currentSum;

    for (let i = k; i < estimates.length; i++) {
        const diff = estimates[i] - estimates[i - k];
        currentSum += diff;
        if (diff > 0) {
            maxSum = Math.max(maxSum, currentSum);
        }
    }
    return maxSum;
};

// Test cases
console.log(solution([5, 1, 9, 8, 10, 5], 3)); // Expected:  27
console.log(solution([10, 1, 10, 1, 1, 4, 3, 10], 6)); // Expected: 29
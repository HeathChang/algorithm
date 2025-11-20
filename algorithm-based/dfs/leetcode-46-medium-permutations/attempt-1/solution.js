/**
 * Problem URL: https://leetcode.com/problems/permutations/description/
 *
 * Used Algorithms: DFS
 *
 * Description: Check URL
 *
 * Objective:  return all the possible permutations.
 **/

const solution = (nums) => {
    if (nums.length === 1) return [nums];
    const result = [];

    const dfs = (index, path) => {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (path.includes(nums[i])) continue;
            path.push(nums[i]);
            dfs(index + 1, path);
            path.pop();
        }
    }
    dfs(0, []);
    return result;
};

// Test cases
console.log(solution([1, 2, 3])); // Expected: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(solution([1])) // Expected: [[1]]
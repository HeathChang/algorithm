/**
 * Problem URL: https://leetcode.com/problems/combination-sum/description/
 * 
 * Used Algorithms: DFS
 * 
 * Description: Check URL
 * 
 * Objective: Return all the combinations that sum up to the target.
 **/

const solution = (candidates, target) => {
    const resultArr = [];

    const dfs = (path, index) => {
        const sum = path.reduce((acc, curr) => acc + curr, 0);
        if (sum === target) {
            resultArr.push([...path])
            return;
        }
        for (let i = index; i < candidates.length; i++) {
            if (sum > target) continue;
            path.push(candidates[i])
            dfs(path, i)
            path.pop();
        }
    }
    dfs([], 0)
    return resultArr
};

// Test cases
console.log(solution([2, 3, 6, 7], 7)); // Expected: [[2, 2, 3], [7]]
/**
 * Problem URL: https://leetcode.com/problems/combinations/description/
 * 
 * Used Algorithms: DFS
 * 
 * Description: Check URL
 * 
 * Objective: Return all the combinations of the given array.
 **/

const solution = (n, k) => {
    const resultArr = [];

    const dfs = (path, index) => {
        if (path.length === k) {
            resultArr.push([...path])
            return;
        }

        for (let i = index; i < n; i++) {
            path.push(i + 1);
            dfs(path, i + 1)
            path.pop()
        }
    }

    dfs([], 0);
    return resultArr;
};

// Test cases
console.log(solution(4, 2)); // Expected: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]

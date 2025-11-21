/**
 * Problem URL: https://leetcode.com/problems/subsets/description/
 * 
 * Used Algorithms: DFS
 * 
 * Description: Check URL
 * 
 * Objective: Return all the subsets of the given array.
 **/

const solution = (nums) => {

    const resultArr = [];

    const dfs = (path, index) => {
        resultArr.push([...path]);

        for (let i = index; i < nums.length; i++) {
            path.push(nums[i]);
            dfs(path, i + 1)
            path.pop();
        }
    }

    dfs([], 0);
    return resultArr;

};

// Test cases
console.log(solution([1, 2, 3])); // Expected: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

/**
 * Problem URL: https://leetcode.com/problems/subsets-ii/description/
 * 
 * Used Algorithms: DFS
 * 
 * Description: Check URL
 * 
 * Objective: Return all possible subsets of a given array of integers that may contain duplicates.
 
 **/

const solution = (input) => {
    const result = [];
    input.sort((a, b) => a - b);

    const dfs = (index, path) => {
        result.push([...path]);

        for (let i = index; i < input.length; i++) {
            if (i > index && input[i] === input[i - 1]) continue;

            path.push(input[i]);
            dfs(i + 1, path);
            path.pop();
        }
    };

    dfs(0, []);
    return result;
};

// Test cases
console.log(solution([1, 2, 2])); // Expected: [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]]
/**
 * Problem URL: https://leetcode.com/problems/pascals-triangle/description/
 *
 * Used Algorithms: DP
 *
 * Description: Check URL
 *
 * Objective:  return the first numRows of Pascal's triangle.
 **/

const solution = (numRows) => {
    // Solution 1
    const result = [[1]];
    if (numRows === 1) return result;

    for (let i = 1; i < numRows; i++) {
        const prevRow = result[i - 1];
        const newRow = [1];

        for (let j = 1; j < i; j++) {
            newRow.push(prevRow[j - 1] + prevRow[j]);
        }

        newRow.push(1);
        result.push(newRow);
    }

    return result;

    // Solution 2
    // const returnArr = [[1]];
    // if (numRows === 1) return returnArr;
    //
    // const getArray = (arr, index) => {
    //     const tempArr = [1]
    //     for (let i = 1; i < index; i++) {
    //         if (i === index - 1) tempArr.push(1);
    //         else tempArr.push(arr[i] + arr[i - 1]);
    //     }
    //     return tempArr;
    // }
    //
    // for (let i = 1; i < numRows; i++) {
    //     returnArr[i] = getArray(returnArr[i - 1], i + 1)
    // }
    // return returnArr;
};

// Test cases
console.log(solution(5)); // Expected: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(solution(2)); // Expected: [[1],[1,1]]
console.log(solution(1)); // Expected: [[1]]
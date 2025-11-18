/**
 * Problem URL: https://leetcode.com/problems/3sum/description/
 *
 * Used Algorithms: two-pointer
 *
 * Description: Check URL
 *
 * Objective: Given an integer array nums, return all the triplets
 **/

const solution = (nums) => {
    const returnArr = [];
    const hasSet = new Set();
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {

        if(nums[i] > 0) break;
        let left = i + 1;
        let right = nums.length - 1;
        while(left < right){
            const sum = nums[i] + nums[left] + nums[right]
            if(sum === 0){
                const condition = `${ nums[i] }${ nums[left] }${ nums[right] }`;
                if(!hasSet.has(condition)){
                    hasSet.add(condition);
                    returnArr.push([nums[i], nums[left], nums[right]])
                }
                left++;
                right--;
            } else if(sum < 0){
                left++;
            } else {
                right--;
            }

        }
    }
    console.log(returnArr)
};

// Test cases
console.log(solution([-1, 0, 1, 2, -1, -4])); // Expected: [[-1,-1,2],[-1,0,1]]
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Example 1:

// Input: nums = [3,0,1]

// Output: 2

// Explanation:

// n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// Example 2:

// Input: nums = [0,1]

// Output: 2

// Explanation:

// n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  // approach 1 --> sort and check (arr[i]+1)
  // approach 2 calculate the sum and difference

  let n = nums.length;
  let totalsum = (n * (n + 1)) / 2;
  let partialsum = 0;
  for (let i = 0; i < n; i++) {
    partialsum += nums[i];
  }
  return totalsum - partialsum;
};

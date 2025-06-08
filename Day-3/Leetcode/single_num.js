// Given a non-empty numsay of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:

// Input: nums = [2,2,1]

// Output: 1

// Example 2:

// Input: nums = [4,1,2,1,2]

// Output: 4

// Example 3:

// Input: nums = [1]

// Output: 1
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  //   let repeated = 1;
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = 0; j < nums.length; j++) {
  //       if (nums[i] == nums[j]) {
  //         break;
  //       } else {
  //         repeated = nums[i];
  //       }
  //     }
  //   }
  //   return repeated;

  // approach 2 XOR use karo

  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }
  return xor;
};

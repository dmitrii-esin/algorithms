// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

// Example 1:
// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

// Example 2:
// Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

function longestOnes(nums: number[], k: number): number {
  let left = 0;
  let max = 0;
  let zeroes = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeroes++;

    while (zeroes > k) {
      if (nums[left] === 0) zeroes--;
      left++;
    }

    max = Math.max(max, right - left + 1);
  }

  return max;
}

console.log(
  "!!longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3)",
  longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)
); // Should be 10;

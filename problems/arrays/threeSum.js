/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]

*/

function threeSum(n);
    const result = [];
    const s = {}
    const nums = n.sort((a, b) => a- b);
    for(let i = 0; i < nums.length; i++) {
            let lo = i+1
            let hi = nums.length -  1;
            while(lo < hi) {
                let sum = nums[i] + nums[lo] + nums[hi];
                if(sum === 0) {
                    
                }
                if(sum < 0) {
                  lo++;  
                } else if(sum > 0) {
                  hi--;
                } else {
                    if(!s[[nums[i], nums[lo], nums[hi]].join(',')]) {
                        result.push([nums[i], nums[lo], nums[hi]]);
                        s[[nums[i], nums[lo], nums[hi]].join(',')] = true;
                    } 
                    while(lo < hi && nums[lo] === nums[lo+1]) {
                        lo++;
                    }
                    while(lo < hi && nums[hi] === nums[hi-1]) {
                        hi--;
                    }
                    lo++;
                    hi--;
                }
                
            
        }   
    }    
   
    return result;
};

module.exports = threeSum;
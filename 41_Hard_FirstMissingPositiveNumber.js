/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    
    for(let i=0; i< nums.length; i++){
        if(nums[i] < nums.length && nums[i] >0 && nums[i] != i+1){
            recurSwapToIndex(nums, i)
        }
    }
   // console.log(nums)
 
    for(let i=0; i< nums.length; i++){
        if(nums[i] != i+1)
            return i+1;
    }
    return nums.length + 1;
    
};

function recurSwapToIndex(nums, ind){
   // console.log(ind, nums[ind])
    if(ind <0 || nums[ind] > nums.length || nums[ind] == ind+1 || nums[ind] < 1 || (nums[nums[ind]-1] == nums[ind])){
        return
    }
    let temp = nums[ind];
    nums[ind] = nums[nums[ind]-1];
    nums[temp-1] = temp;
    // console.log(nums)
    recurSwapToIndex(nums, ind);
}
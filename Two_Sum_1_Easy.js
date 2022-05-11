/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let i = 0, j = nums.length-1;
    let map = new Map();
    for(let i in nums){
        if(map.has(nums[i])){
            map.set(nums[i], map.get(nums[i]).concat(i));
        }
        else
            map.set(nums[i], [i]);
    }
    
    nums.sort((a,b)=>a-b);
    
    while(i<j){
        let sum = nums[i] + nums[j];
        console.log(sum)
        if(sum == target)
            {
                if(nums[i] == nums[j])
                    return [map.get(nums[i])[0],map.get(nums[i])[1] ]
                else
                    return [map.get(nums[i])[0],map.get(nums[j])[0] ]
                
            }
            
        else if(sum < target)
            i++;
        else
            j--;
    }
};
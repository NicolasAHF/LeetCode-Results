/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let complement;
    let map = {};
    for(let i = 0; i < nums.length; i++){
        complement = target - nums[i];
        let j = map[nums[i]];
        if(j != undefined){
            return [i, j]
        }
        map[complement] = i;
    }
};
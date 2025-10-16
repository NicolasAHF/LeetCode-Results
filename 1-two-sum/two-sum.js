/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let complement;
    const map = new Map();
    for(let num of nums){
        complement = target - num;
        if(map.get(num) != undefined){
            return [nums.indexOf(complement), nums.indexOf(num, nums.indexOf(complement) + 1)];
        }
        map.set(complement, num);
    }
};
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let result = s.split(" ").filter(word => word != "");
    return result[result.length - 1].length
};
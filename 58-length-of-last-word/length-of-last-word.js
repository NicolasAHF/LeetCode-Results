/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let result = s.split(" ");
    result = result.filter(word => word != "");
    return result[result.length - 1].length
};
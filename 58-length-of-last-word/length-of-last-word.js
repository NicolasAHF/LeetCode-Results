/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    return s.split(" ").filter(word => word != "").at(-1).length
};
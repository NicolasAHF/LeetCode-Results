/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }
    const obj = new Map();
    for(char of s){
        obj.set(char, (obj.get(char) || 0) + 1);
    }

    for(char of t){
        if(!obj.has(char) || obj.get(char) === 0){
            return false;
        }
        obj.set(char, obj.get(char) - 1);
    }
    return true;
};
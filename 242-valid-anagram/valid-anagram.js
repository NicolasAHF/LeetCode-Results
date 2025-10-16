/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }
    let sAux = s.split('').sort().join('');
    let tAux = t.split('').sort().join('');

    return sAux == tAux
};
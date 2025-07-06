/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let aux = s.split(" ");
    let k = 0;
    let result = []
    for(let i = 0; i < aux.length; i++){
        if(aux[i] != ""){
            result[k] = aux[i];
            k++;
        }
    }
    console.log(result);
    return result[result.length - 1].length
};
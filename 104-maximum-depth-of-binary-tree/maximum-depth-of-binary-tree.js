/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let countIzq = 0;
    let countDer = 0;
    if(root === null){
        return 0;
    }else{
        if(root.left === null && root.right === null){
            return 1;
        }else{
            if(root.left){
                countIzq = maxDepth(root.left) + 1;
            }
            if(root.right){
                countDer = maxDepth(root.right) + 1;
            }
        }
    }
    
    if(countIzq > countDer){
        return countIzq;
    }else{
        return countDer;
    }
};
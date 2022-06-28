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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
let sum;
var rangeSumBST = function(root, low, high) {
    sum = 0;
    dfs(root, low, high);
    return sum;
};

function dfs(root, low, high){
    if(!root)
        return;
    if(root.val >= low && root.val <=high){
        sum = sum + root.val;
    }
    dfs(root?.left, low, high);
    dfs(root?.right, low, high);
    return;
}


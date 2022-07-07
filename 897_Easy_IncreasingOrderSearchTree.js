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
 * @return {TreeNode}
 */

function Node(val){
    this.val = val;
    this.right= null;
    this.left = null;
}

let root1,root2;
var increasingBST = function(root) {
    //let root1;
     root1 = root2 = null;
     inOrder(root);
    return root2;
    
};

function inOrder(root){
    if(!root)
        return root2;;
    inOrder(root.left);
   // console.log(root.val)
    if(!root1)
        root2 = root1  = new Node(root.val);
    
    else{
        root1.right = new Node(root.val);
        root1 = root1.right;
    }
    inOrder(root.right);
}
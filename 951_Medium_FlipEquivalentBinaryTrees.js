/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function(root1, root2) {
    
    if(root1?.val != root2?.val){
        return false;
    }
    
    return recursivlyCheck(root1, root2);
    
};

function recursivlyCheck(root1, root2){
    if(root1 == null && root2 == null){
        return true;
    }
    if((root1 == null && root2 != null) || (root1 != null && root2 == null)){
        return false;
    }
    
    
    if((root1?.left?.val == root2.left?.val) && (root1?.right?.val == root2.right?.val)){
       
    }
    
    else if((root1?.left?.val != root2?.left?.val) && 
        (root1?.left?.val == root2?.right?.val)){
          flip(root1, root2)
       }
    else{
        return false;
    }
    
    return true && recursivlyCheck(root1?.left, root2?.left) && recursivlyCheck(root1?.right, root2?.right);
    
   
}


function flip(root1, root2){
    let temp = root2?.left;
    root2.left = root2?.right;
    root2.right = temp;
}
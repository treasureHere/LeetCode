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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */

let parentx;
let parenty;
var isCousins = function(root, x, y) {
    let xdepth = depth(root, x, null, "parentx", 0);
    let ydepth = depth(root, y, null,  "parenty", 0);
    //console.log('xdepth--', xdepth, 'ydepth---', ydepth);
   // console.log('parentx--', parentx.val, 'parenty---', parenty.val);
    if(xdepth == ydepth && parentx != parenty)
        return true;
    return false;
    
};

function depth(root, k, parent, par, d){
    if(!root)
        return -1;
    if(root.val == k){
        if(par ==  "parentx")
            parentx = parent;
        else
           parenty = parent;
        return d;
    }
        
    let left_depth = depth(root?.left, k, root, par, 1+d);
    if(left_depth != -1){
        return left_depth;
    }
    return depth(root?.right, k, root, par, 1+d);
    
                                
                        
   
    
}
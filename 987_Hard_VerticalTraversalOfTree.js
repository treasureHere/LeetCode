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
 * @return {number[][]}
 */
let pos;
var verticalTraversal = function(root) {
    
    pos = new Map();
    assignPos(root, 0, 0);
    pos = new Map([...pos].sort(sorted));
   // console.log({pos})
    let op = [];
    for(let val of pos.values()){
        let innerArr = [];
        val = new Map([...val].sort(sorted));
        for(let val1 of val.values()){
            innerArr = innerArr.concat(val1);
           
        }
         //innerArr.sort(sortArr)
        op.push(innerArr)
       
    }
    return op;
    
};

function sorted(a,b){
    if(a[0]-b[0]>0)
        return 1;
    if(a[0]-b[0]<0)
        return -1;
    return 0;
}

function sortArr(a,b){
    if(a>b)
        return 1;
    else
        return -1;
}

function assignPos(root, row, col){
    if(!root)
        return;
    if(pos.has(col)){
        let colVal = pos.get(col);
        if(colVal.has(row)){
            let rowVal = colVal.get(row);
            rowVal.push(root.val);
            rowVal.sort(sortArr);
          // console.log(rowVal)
            colVal.set(row, rowVal)
            pos.set(col, colVal )
        }
        else{
            colVal.set(row, [root.val]);
            pos.set(col, colVal);
        }
        
    }
    else{
        let colVal = new Map();
        colVal.set(row, [root.val]);
        pos.set(col, colVal);
    }
    assignPos(root?.left, row+1, col-1);
    assignPos(root?.right, row+1, col+1)
    
}

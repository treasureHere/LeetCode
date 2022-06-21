/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let left = 0, right = s.length;
    let op = [];
    for(let i =0; i< s.length; i++){
        if(s[i] == "I")
            op.push(left++);
        else 
            op.push(right--);
    }
    op.push(left);
    return op;
    
};
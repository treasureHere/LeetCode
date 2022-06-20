/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let left, right;
    for(let i=0 ; i< pushed.length; i++){
        if(pushed[i] == popped[0]){
            left = i-1;
            right = i+1;
            pushed[i] = -1
            break;
        }
    }
    if(right == undefined && left == undefined)
        return false;
   
    let ind = 1;
    
    while(left >=-1 && right <= pushed.length && ind < popped.length){
     // console.log(left, right, ind)
        if(popped[ind]  == pushed?.[left]){
            pushed[left] = -1
            ind++;
            left--;
        }
        else if(popped[ind] == pushed?.[right]){
            pushed[right] = -1
            ind++;
            right++;
        }
        else if(pushed[left] <0 && left >=0){
            left--;
        }
        else if(pushed[right] <0 && right < pushed.length){
            right++;
        }
        else{
            right++;
            left = right;
            
        }
               
        
    }
  
    if(ind < popped.length){
        return false;
    }
    return true;
    
    
};
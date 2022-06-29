/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let stack = [];
   
    for(let i=0; i<s.length; i++){
        if(s[i] == "("){
             stack.push(s[i]);
          
            
        }
           
        else if(s[i] == ")" && stack.length >0){
            let top = stack.pop();
            
            if(top != "("){
                stack.push(top);
                stack.push(s[i]);
            }
        }
        else{
            stack.push(s[i]);
        }
    }
    return stack.length;
    
   
    
};
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if(arr.length <3)
        return false;
    let top;
    for(let i=1; i<arr.length; i++){
          if(arr[i] < arr[i-1]){
            top = i;
             break;
             
          }
        else if(arr[i] == arr[i-1]){
            return false;
        }
      }
    if(!top || (top ==1)){
        return false
    }



  
    for(let i=top; i< arr.length-1; i++){
        if(arr[i] <= arr[i+1]){
            return false;
        }
        
    }
    return true;
    
    
};
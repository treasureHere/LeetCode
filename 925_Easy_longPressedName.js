/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    
    let i =0, j = 0;
    if(typed.length < name.length){
        return false;
    }
    while(i<name.length){
        if(name[i] == typed[j]){
            i++;
            j++;
        }
        else if(typed[j] != typed?.[j-1]){
            return false;
        }
        else{
            j++;
        }
    }
    
   while(j<typed?.length){
         if(typed[j] != typed?.[j-1])
            return false;
         j++;
   }
   return true;
    
};
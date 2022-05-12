/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let truster = new Map();
    for(let i=0; i< trust.length; i++){
        truster.set(trust[i][0], 1);
    }
    let opEle, count =0;
    let max = 0;
    if(trust.length ==0 && n >1){
        return -1
    }
    else if(trust.length ==0 && n ==1)
        return 1;
    for(let i=0; i< trust.length; i++){
        if(!truster.has(trust[i][1])){
            if(opEle == trust[i][1]){
               count++;
              if(count >max){
                  max= count;
                  opEle = trust[i][1]
              }
             }
        else{
            count = 1;
            max= Math.max(count, max);
            opEle = trust[i][1];
        }
        
        }
        
    }
   if(max >= n-1){
       return opEle;
   }
    return -1;
};
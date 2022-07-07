/**
 * @param {number[]} fruits
 * @return {number}
 [1,1,0,1,2,2]
 */
var totalFruit = function(fruits) {
    //sliding window
    let start = 0;
    let max;
    let ind = new Map();
    let trees = [fruits[0]]; //length = 2
    ind.set(fruits[0], 0)
    let i;
    for(i=1; i< fruits.length; i++){
        if(fruits[i] == trees?.[0] || fruits[i] == trees[1]){
            ind.set(fruits[i], i)
           
        }
        else{
            if(trees?.length <2){
               trees[1] = fruits[i];
               ind.set(fruits[i], i)
               
             }
             else{
                 max = max? Math.max(max, i-start) : i-start;
                 //console.log(fruits[i], max, i)
                 if(trees[0] == fruits[i-1]){
                     
                     start = ind.get(trees[1])+1;
                     trees[1] = fruits[i];
                     ind.set(fruits[i], i);
                     
                 }
                 else{
                     start = ind.get(trees[0])+1;
                     trees[0] = fruits[i];
                     ind.set(fruits[i], i);
                     
                 }
                // console.log('atrt', start)

             }

        }
    }
    max = max? Math.max(max, i-start) : (i- start);
    return max;
    
    
    
};
/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    let dp = [];
    for(let i=1; i<= days[days.length-1]; i++){
        if(days.includes(i)){
            dp[i] = Math.min(
            (dp?.[i-1] ?? 0) + costs[0],
            (dp?.[i-7] ?? 0) + costs[1],
             (dp?.[i-30] ?? 0) + costs[2],
            )
        }
        else{
            dp[i] = dp[i-1];
        }
    }
    return dp[days[days.length-1]];
   
    
};

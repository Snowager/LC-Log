/**
 * @param {number[]} prices
 * @return {number}
 * 121
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/ */
var maxProfit = function(prices) {
    let end = prices.length - 1;
    let high = prices[end];
    let profit = 0;

    // while we haven't traversed array
    while (end > 0) {

        // set current high to be max of prices found so far
        high = Math.max(high, prices[end]);
        // set our profit to be max of our all time high minus our current pointer's low
        profit = Math.max(high - prices[end-1], profit);
        // because we traverse array, we will eventually compare our max high with the lowest low
        end--;
    }
    return profit;
};
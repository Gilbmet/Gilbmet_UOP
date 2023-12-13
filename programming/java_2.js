// Removed Java import statement as it's not applicable in JavaScript
// import java.util.ArrayList;

// Assuming this is where your JavaScript code starts
// ...

// Calculate the average stock price
function calculateAveragePrice(stockPrices) {
    let sum = 0;

    for (let price of stockPrices) {
        sum += price;
    }

    return sum / stockPrices.length;
}

// Find the maximum stock price
function findMaximumPrice(stockPrices) {
    let maxPrice = stockPrices[0];

    for (let price of stockPrices) {
        if (price > maxPrice) {
            maxPrice = price;
        }
    }

    return maxPrice;
}

// Determine the occurrence count of a specific price
function countOccurrences(stockPrices, targetPrice) {
    let count = 0;

    for (let price of stockPrices) {
        if (price === targetPrice) {
            count++;
        }
    }

    return count;
}

// Compute the cumulative sum of stock prices
function computeCumulativeSum(stockPrices) {
    let cumulativeSum = [];
    let sum = 0;

    for (let price of stockPrices) {
        sum += price;
        cumulativeSum.push(sum);
    }

    return cumulativeSum;
}

// Example usage with sample data
let stockPricesArray = [10.5, 12.3, 11.8, 13.2, 10.5, 12.0, 11.2, 13.5, 10.8, 12.5];

let averagePrice = calculateAveragePrice(stockPricesArray);
console.log("Average Stock Price:", averagePrice);

let maxPrice = findMaximumPrice(stockPricesArray);
console.log("Maximum Stock Price:", maxPrice);

let targetPrice = 12.0;
let occurrences = countOccurrences(stockPricesArray, targetPrice);
console.log(`Occurrences of ${targetPrice}:`, occurrences);

let cumulativeSum = computeCumulativeSum(stockPricesArray);
console.log("Cumulative Sum of Stock Prices:", cumulativeSum);


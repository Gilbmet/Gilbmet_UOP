import java.util.ArrayList;

public class StockAnalysis {

    // Calculate the average stock price
    public static float calculateAveragePrice(float[] stockPrices) {
        float sum = 0;

        for (float price : stockPrices) {
            sum += price;
        }

        return sum / stockPrices.length;
    }

    // Find the maximum stock price
    public static float findMaximumPrice(float[] stockPrices) {
        float maxPrice = stockPrices[0];

        for (float price : stockPrices) {
            if (price > maxPrice) {
                maxPrice = price;
            }
        }

        return maxPrice;
    }

    // Determine the occurrence count of a specific price
    public static int countOccurrences(float[] stockPrices, float targetPrice) {
        int count = 0;

        for (float price : stockPrices) {
            if (price == targetPrice) {
                count++;
            }
        }

        return count;
    }

    // Compute the cumulative sum of stock prices
    public static ArrayList<Float> computeCumulativeSum(ArrayList<Float> stockPrices) {
        ArrayList<Float> cumulativeSum = new ArrayList<>();
        float sum = 0;

        for (float price : stockPrices) {
            sum += price;
            cumulativeSum.add(sum);
        }

        return cumulativeSum;
    }

    public static void main(String[] args) {
        // Example usage
        float[] stockPricesArray = { 10.5f, 12.3f, 11.8f, 13.2f, 10.5f, 12.0f, 11.2f, 13.5f, 10.8f, 12.5f };

        ArrayList<Float> stockPricesArrayList = new ArrayList<>();
        for (float price : stockPricesArray) {
            stockPricesArrayList.add(price);
        }

        float averagePrice = calculateAveragePrice(stockPricesArray);
        System.out.println("Average Stock Price: " + averagePrice);

        float maxPrice = findMaximumPrice(stockPricesArray);
        System.out.println("Maximum Stock Price: " + maxPrice);

        float targetPrice = 12.0f;
        int occurrences = countOccurrences(stockPricesArray, targetPrice);
        System.out.println("Occurrences of " + targetPrice + ": " + occurrences);

        ArrayList<Float> cumulativeSum = computeCumulativeSum(stockPricesArrayList);
        System.out.println("Cumulative Sum of Stock Prices: " + cumulativeSum);
    }
}


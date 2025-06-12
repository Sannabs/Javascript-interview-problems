/**
 * Calculate the total price of a list of prices after applying a discount to the most expensive item.
 * @param {number[]} prices - List of prices
 * @param {number} discount - Discount percentage
 * @returns {number} Total price after discount
 */
function calculateTotalPrice(prices, discount) {
  if (!prices || prices.length === 0) return 0;

  const maxPrice = Math.max(...prices);

  const discountedPrice = maxPrice * (1 - discount / 100);

  return Math.floor(
    prices.reduce(
      (sum, price) => sum + (price === maxPrice ? discountedPrice : price),
      0
    )
  );
}

console.log(calculateTotalPrice([1, 2, 3, 4, 5], 10));


let prices = [5, 1, 3, 4, 6, 2];

function finalPrice(prices) {
  console.log('prices: ', prices);
  // Write your code here

  let discount_prices = [];
  let full_prices_indexes = [];
  let lowest_price_in_arr = Math.min(...prices);
  console.log('lowest_price_in_arr: ', lowest_price_in_arr);

  // compare
  prices.forEach((element, index) => {
    console.log('element, index: ', element, index);

    if ((index === prices.length - 1) || (element === lowest_price_in_arr)) {
      full_prices_indexes.push(element);
    } else {
      if (element > prices[index+1]) {
        let res = element - prices[index+1];
        discount_prices.push(res);
      } else {
        
      }
    }

    console.log('full_prices_indexes: ', full_prices_indexes);
    console.log('discount_prices: ', discount_prices);
  });

  // return full_prices_indexes;
}
finalPrice(prices);
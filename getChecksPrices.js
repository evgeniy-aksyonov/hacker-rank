const pricesObj = {
  check1: {
    currency: 'USD',
    amount: 100,
  },
  check2: {
    currency: 'EUR',
    amount: 300,
  },
  check3: {
    currency: 'EUR',
    amount: 100,
  },
  check4: {
    currency: 'USD',
    amount: 150,
  },
};

function getPrices(prices) {
  let reducedChecks = Object.values(prices).reduce(
    (acc, { currency, amount }) => {
      if (acc[currency]) {
        acc[currency] += amount;
      } else {
        acc[currency] = amount;
      }

      return acc;
    },
    {}
  );

  return Object.entries(reducedChecks);
}

console.log(getPrices(pricesObj)); // [['USD'], 250, ['EUR', 400]]

// {
//   USD: 250,
//   EUR: 400
// }

// [['USD', 250], ['EUR', 400]]

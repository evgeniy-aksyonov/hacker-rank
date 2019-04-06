let arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];
// let arr = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];

function sockMerchant(n, arr) {
  let pairs_counter = {};
  let result = 0;

  arr.forEach(elem => {
    if (!!pairs_counter[elem]) {
      pairs_counter[elem]++;
    } else {
      pairs_counter[elem] = 1;
    }
  });

  console.log('pairs_counter: ', pairs_counter);

  Object.values(pairs_counter).forEach(num => {
    if (num === 1) {
      return;
    } else if ((num % 2 === 0)) {
      result = num / 2;
    } else {
      result = result + Math.floor((num / 2));
    }

    console.log('result: ', result);
  });

  return result;
}

sockMerchant(9, arr);
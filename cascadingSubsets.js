function eachCons(array, n) {
  let result = [];

  // сгенерировать отдельные сабсеты
  for (let i = 0; i < array.length - (n - 1); i++) {

    const subset = [];

    for (let j = 0; j < n; j++) {
      subset.push(array[i+j]);
    }

    result.push(subset);
  }

  return result;
}

console.log(eachCons([1,2,3,4], 2)); // [[1,2], [2,3], [3,4]]
console.log(eachCons([1,2,3,4,5,6,7,8], 3)); // [[1,2,3], [2,3,4], [3,4,5]]
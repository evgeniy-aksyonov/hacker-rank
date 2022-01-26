// Older version of flatten

// only 1-level deep
const arr1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const arr2 = [[1, 2, 3], [4, 5, 6], [7, [8, [9]]]];

const flatValues = (data) => {
  return data.reduce((total, value) => {
    return total.concat(value);
  }, []);
}
console.log(flatValues(arr1));


// for deep flatten we will use reduce and concat
const flattenDeep = (arr) => {
   return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}

console.log(flattenDeep(arr2));

function areArraysAdaptable(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return 'no';
  }

  let offsets = [];
  for (let i = 0; i < arr1.length; i++) {
    offsets.push(arr2[i] - arr1[i]);
  }

  const offsetsWithoutZeros = offsets.filter((num) => num !== 0);

  if (offsetsWithoutZeros.length === 0) {
    return 'yes';
  }

  let uniqueOffsets = new Set(offsetsWithoutZeros);

  return uniqueOffsets.size === 1 ? 'yes' : 'no';
}

console.log(areArraysAdaptable([1, 3, 5, 7, 15], [1, 3, 7, 9, 15])); // yes
console.log(areArraysAdaptable([1, 1], [1, 1])); // yes
console.log(areArraysAdaptable([1, 5, 15], [1, 40, 7])); // no
console.log(areArraysAdaptable([1, 5, 8, 9, 20, 15], [1, 40, 17, 9, 50, 49])); // no

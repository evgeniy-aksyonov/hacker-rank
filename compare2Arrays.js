function compare(arr1, arr2) {
  if (!arr1 || !arr2) return;

  let result;

  arr1.forEach(e1 => arr2.forEach(e2 => {
    if (e1.length > 1 && e2.length) {
      result = compare(e1, e2);
    } else if (e1 !== e2) {
      result = false
    } else {
      result = true
    }
  }));

  return result;
}

console.log(compare([1, 2, 3], [1, 2, 3])); // true
console.log(compare([1, 2], [1, 2, 3])); // false
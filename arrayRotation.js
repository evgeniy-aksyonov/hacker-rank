let arr = [1, 2, 3, 4, 5];

function rotLeft(a, d) {
  if (d === a.length) { return a; }
  let fixed_d = d % a.length;

  return a.splice(fixed_d).concat(a).join(' ');
}

console.log(rotLeft(arr, 2));
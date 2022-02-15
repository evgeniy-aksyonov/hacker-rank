let arr = [1, 2, 3, 4, 5];

function chunk(arr, size) {
  if (size >= arr.length) {
    return arr;
  }

  let result_arr = [];
  let modulo = Math.floor(arr.length / size);
  let remainder = arr.length % size;

  for (let i = modulo; i-- > 0;) {
    result_arr.push(arr.splice(0, size));
  }

  if (remainder) {
    result_arr.push(arr);
  }

  return result_arr;
}

console.log(chunk(arr, 4));
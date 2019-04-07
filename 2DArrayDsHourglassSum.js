let arr = [
  [1, 1, 1, 0, 5, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 8, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 24, 0, 2, 0, 0],
  [0, 0, 1, 2, 7, 0],
];

function hourglassSum(arr) {
  let shift_count = 4;
  let hourglass_2d_arr = [];
  let final_result;
  let sums_of_all_arrays = [];

  for (let i = 0; i < shift_count; i++) {
    for (let j = 0; j < shift_count; j++) {
      let hg = [
        arr[i][j], arr[i][j+1], arr[i][j+2],
        arr[i+1][j+1],
        arr[i+2][j], arr[i+2][j+1], arr[i+2][j+2]
      ];
      hourglass_2d_arr.push(hg);
    }
  }

  hourglass_2d_arr.forEach(arr => {
    let arr_sum = arr.reduce((total, currentValue) => total + currentValue, 0);
    sums_of_all_arrays.push(arr_sum);
  });
  final_result = sums_of_all_arrays.sort((a, b) => b - a);

  return final_result[0];
}

console.log('hourglassSum(arr): ', hourglassSum(arr));
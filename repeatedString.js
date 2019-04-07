let s = 'aba';
let n = 10;

// Complete the repeatedString function below.
function repeatedString(s, n) {
  let len = s.length;
  let times = (n / len).toFixed();
  let remainder_chars = n - (len * times);
  let final_result = 0;

  let result_str = '';

  for (let index = 0; index < times; index++) {
    console.log('s: ', s);
    result_str = result_str.concat(s);
  }

  result_str = result_str.concat(s.substr(0, remainder_chars));

  console.log('result_str: ', result_str);

  let arr = result_str.split('');
  console.log('arr: ', arr);
  arr.forEach(letter => {
    if (letter === 'a') {
      final_result++;
    }
  });

  return final_result;
}

console.log(repeatedString(s, n));

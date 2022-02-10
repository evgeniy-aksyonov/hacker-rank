function highAndLow(numbers) {
  let numsArr = numbers.split(' ');
  const max = Math.max(...numsArr);
  const min = Math.min(...numsArr);

  return `${max} ${min}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); //  "42 -9"

function reverseNumber(int) {
  let result = int.toString().split('').reverse().join('');

  return parseInt(result, 10) * Math.sign(int);
}

console.log(reverseNumber(-75));

// function that counts the number of characters in a string
function countChars(str) {
  let result = {};

  if (str.length === 0) return result;

  for (let i = 0; i < str.length; i++) {
    if (result[str[i]]) {
      result[str[i]]++;
    } else {
      result[str[i]] = 1;
    }
  }

  return result;
}

console.log(countChars('aba'), { a: 2, b: 1 });
console.log(countChars(''), {});

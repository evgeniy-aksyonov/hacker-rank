function maxChars(str) {
  let map = new Map();

  str.split('').forEach(char => {
    if (map.has(char)) {
      map.set(char, (map.get(char) + 1));
    } else {
      map.set(char, 1);
    }
  });

  let max_char_count = [...map.values()].sort((a, b) => b - a)[0];
  let final_result;

  [...map.keys()].forEach(key => map.get(key) === max_char_count ? final_result = key : null);

  return final_result;
}

console.log(maxChars('Hello there!'));

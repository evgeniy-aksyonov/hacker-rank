function longestConsec(strarr, k) {
  // 1. handle exeptions
  if (k <= 0 || k > strarr.length) {
    return '';
  }

  // 2. concatenate strings
  const concatenatedStrings = [];

  for (let i = 0; i < strarr.length - (k - 1); i++) {
    let tempStr = '';
    for (let j = 0; j < k; j++) {
      tempStr += strarr[i+j];
    }
    concatenatedStrings.push(tempStr);
  }

  // 3. compare lengths of strings 
  let longestStr = '';
  let longestStrLength = 0;
  
  for (const [index, val] of concatenatedStrings.entries()) {
    if (val.length > longestStrLength) {
      longestStr = val;
      longestStrLength = val.length;
    }
  }

  // 4. and return first longest
  return longestStr;
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta")
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh")
// console.log(longestConsec([], 3), "")
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2), "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu")
// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "")
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz")
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15), "")
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0), "")

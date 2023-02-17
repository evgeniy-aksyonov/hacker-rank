let str1 = 'aaaaabbbbccccdd'; // should return 'abcd'
let str2 = 'fffffffbb'; // should return 'fb'

function removeDuplicates(str) {
  return [...new Set(str.split(''))].join('');
}

console.log(removeDuplicates(str1)); // abcd
console.log(removeDuplicates(str2)); // abcd

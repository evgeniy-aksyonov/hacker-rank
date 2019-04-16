let str1 = 'Hello there!';
let str2 = 'Why?';
let str3 = 'School';

function vowels(str) {
  const regex = /[aeiou]/gi;
  const matches = str.match(regex); // matches will be assigned to either array or null

  return matches ? matches.length : 0;
}

console.log(vowels(str1));

// Iterative solution:
// function vowels(str) {
//   let vowels = ['a', 'e', 'i', 'o', 'u'];
//   let obj = {};

//   let str_arr = str.toLowerCase().split('');

//   str_arr.forEach(el => {
//     if (vowels.includes(el)) {
//       obj[el] ? obj[el] += 1 : obj[el] = 1;
//     }
//   });

//   return Object.values(obj).reduce((partial_sum, el) => { return partial_sum + el}, 0);
// }
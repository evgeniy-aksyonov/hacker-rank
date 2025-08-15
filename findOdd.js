/* 
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/
// function findOdd(arr) {
//   const numCount = {};

//   for (const num of arr) {
//     numCount[num] = (numCount[num] || 0) + 1;
//   }

//   for (const [num, count] of Object.entries(numCount)) {
//     if (count % 2 === 1) {
//       return parseInt(num);
//     }
//   }

//   return null;
// }

// or more efficient one-liner with XOR:
// a ^ a = 0 (any number XORed with itself equals 0)
// a ^ 0 = a (any number XORed with 0 equals itself)
// 1. reduce((a, b) => a ^ b) XORs all numbers in the array together
// 2. Numbers that appear an even number of times will cancel out to 0
// 3. The number that appears an odd number of times will remain

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); // 5
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])); // -1
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); // 5
console.log(findOdd([10])); // 10
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])); // 10
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10])); // 1

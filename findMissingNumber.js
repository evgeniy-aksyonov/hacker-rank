// Given array is let's say from 1 to 100  [1-100]
// It's not sorted and we now that one of the numbers is missing
// We need to find it


// Let's take shorter array with only 10 numbers, but solution must work with bigger arrays
const arr = [5,1,2,4,3,6,10,8,7];

// We now that sum of numbers from 1 to n is equal: N*(N+1)/2
// Example: sum of all numbers in [1,2,3,4,5] is: 5*(5+1)/2 = 15

// So we will use it in our solution:
function sumNumbersInRange(numbersCount) {
  return numbersCount*(numbersCount + 1)/2;
}

function findMissingNumber(arr) {
  const sumOfFullArr = sumNumbersInRange(arr.length + 1); // +1 because in full array we'd have all 10 numbers and here one is missing. So +1
  const sumOfGivenArr = arr.reduce((accum, curr) => accum + curr); // sum of all elems in given array

  return sumOfFullArr - sumOfGivenArr; // The difference is our missing number
}

console.log(findMissingNumber(arr));

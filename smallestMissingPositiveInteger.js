// Write a function:

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

function smallestMissingPositiveInteger(A) {
  // Filter out non-positive numbers and duplicates
  const positiveNumbers = [...new Set(A.filter((num) => num > 0))];
  // If the array is empty or doesn't contain 1, return 1
  if (positiveNumbers.length === 0 || !positiveNumbers.includes(1)) {
    return 1;
  }
  // Sort the array and iterate over it to find the first missing positive number
  positiveNumbers.sort((a, b) => a - b);
  for (let i = 0; i < positiveNumbers.length; i++) {
    if (positiveNumbers[i] !== i + 1) {
      return i + 1;
    }
  }
  // If all positive numbers are present and in order, return the next integer
  return positiveNumbers[positiveNumbers.length - 1] + 1;
}

console.log(smallestMissingPositiveInteger([1, 2, 3])); // 4
console.log(smallestMissingPositiveInteger([-1, -2, 3])); // 1
console.log(smallestMissingPositiveInteger([1, 11, 2, 3, 9, 4, 6, 8, 7])); // 5

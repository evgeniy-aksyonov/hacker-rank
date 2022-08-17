// String prototype fn which alternate the case of each character in a string
// Input: string
// Output: string
// Constraints: none
// Edge Cases: empty string, all lowercase, all uppercase, all mixed case
// Time Complexity: O(n)
// Space Complexity: O(n)

String.prototype.toAlternatingCase = function () {
  let newString = '';

  for (let i = 0; i < this.length; i++) {
    if (this[i] === this[i].toUpperCase()) {
      newString += this[i].toLowerCase();
    } else {
      newString += this[i].toUpperCase();
    }
  }

  return newString;
};

console.log('hello world'.toAlternatingCase(), 'HELLO WORLD');
console.log('HELLO WORLD'.toAlternatingCase(), 'hello world');
console.log('hello WORLD'.toAlternatingCase(), 'HELLO world');
console.log('HeLLo WoRLD'.toAlternatingCase(), 'hEllO wOrld');
console.log('12345'.toAlternatingCase(), '12345');
console.log('1a2b3c4d5e'.toAlternatingCase(), '1A2B3C4D5E');
console.log(
  'String.prototype.toAlternatingCase'.toAlternatingCase(),
  'sTRING.PROTOTYPE.TOaLTERNATINGcASE'
);
console.log(
  'Hello World'.toAlternatingCase().toAlternatingCase(),
  'Hello World'
);

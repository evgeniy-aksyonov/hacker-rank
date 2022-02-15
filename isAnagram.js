let str1 = 'RAIL safety!!!';
let str2 = 'Fairy! tales!';

function isAnagram(s1, s2) {
  let charsRegex = /[A-Za-z]/gi;

  let string1 = s1.toLowerCase().match(charsRegex).sort().join('');
  let string2 = s2.toLowerCase().match(charsRegex).sort().join('');

  return string1 === string2;
}

console.log(isAnagram(str1, str2));
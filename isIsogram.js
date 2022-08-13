function isIsogram(str) {
  let letters = str.toLowerCase().split('');
  let uniqueLetters = [];
  for (let i = 0; i < letters.length; i++) {
    if (!uniqueLetters.includes(letters[i])) {
      uniqueLetters.push(letters[i]);
    }
  }
  return uniqueLetters.length === letters.length;
}

console.log(isIsogram("Dermatoglyphics"), true);
console.log(isIsogram("isogram"), true);
console.log(isIsogram("aba"), false, "same chars may not be adjacent");
console.log(isIsogram("moOse"), false, "same chars may not be same case");
console.log(isIsogram("isIsogram"), false);
console.log(isIsogram(""), true, "an empty string is a valid isogram");
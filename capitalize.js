let str1 = 'a simple example';
let str2 = 'awfawf, afa awd!';
let str3 = 'awkfg alfn! pl, afaw';

function capitalize(s) {
  let result = [];

  s.split(' ').forEach(word => result.push(word[0].toUpperCase().concat(word.slice(1))));

  return result.join(' ');
}

console.log(capitalize(str1));
console.log(capitalize(str2));
console.log(capitalize(str3));

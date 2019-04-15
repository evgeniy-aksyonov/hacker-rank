function pyramid(n) {
  let symbol = '#';
  let whitespace = ' ';

  if (n === 1) {
    console.log(symbol); 
  } else {
    for (let i = 1; i <= n; i++) {
      let chunk = whitespace.repeat(n-i).concat(symbol.repeat(i)).concat(whitespace.repeat(n-i));
      console.log(chunk);
    }
  }
}

pyramid(5);
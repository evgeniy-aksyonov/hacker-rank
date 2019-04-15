function steps(n) {
  let symbol = '#';
  let whitespace = ' ';

  for (let i = 1; i <= n; i++) {
    let chunk = symbol.repeat(i).concat(whitespace.repeat(n-i));
    console.log(chunk);
  }
}

steps(4);

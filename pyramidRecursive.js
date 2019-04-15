function pyramidRecursive(n, i = 1) {
  let symbol = '#';
  let whitespace = ' ';

  if (n === 0) {
    return;
  } else {
    let chunk = whitespace.repeat(n - 1).concat(symbol.repeat(i)).concat(whitespace.repeat(n - 1));
    console.log(chunk);

    pyramidRecursive(n - 1, i + 2);
  }
}

pyramidRecursive(7);
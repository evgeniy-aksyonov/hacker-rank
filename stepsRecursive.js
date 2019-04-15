function recursiveSteps(n, i = 1) {
  if (n === 0) {
    return;
  } else {
    let symbol = '#';
    let whitespace = ' ';

    let chunk = symbol.repeat(i).concat(whitespace.repeat(n-1));
    console.log(chunk);
    recursiveSteps(n - 1, i + 1);
  }
}

recursiveSteps(5);

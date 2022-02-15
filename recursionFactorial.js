const fact = (x) => { // same as function fact(x) {}
  if (x === 1) {
    return x;
  } else {
    return x * fact(x - 1);
  }
}

console.log(fact(5));
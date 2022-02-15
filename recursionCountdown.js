const countdown = (x) => {
  console.log(x);
  // base case
  if (x <= 0) {
    return;
  } else {
    countdown(x - 1);
  }
}

countdown(5);
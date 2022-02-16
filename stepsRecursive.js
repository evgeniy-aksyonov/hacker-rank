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

// Without recursion

function tower_builder(floors){
  let space,star, tower = [];
  for(i = 1; i <= floors; i++){
    space = " ".repeat(floors - i);
    star  = "*".repeat((2*i) - 1);
    tower.push(`${space}${star}${space}`);
  }
  return tower;
}

console.log(tower_builder(4));

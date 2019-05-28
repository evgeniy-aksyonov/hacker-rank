const arr1 = [3, 2, 1, 1, 1];
const arr2 = [4, 3, 2];
const arr3 = [1, 1, 4, 1];

function equalStacks(h1, h2, h3) {
  let sum1 = h1.reduce((total, curr) => total + curr, 0);
  let sum2 = h2.reduce((total, curr) => total + curr, 0);
  let sum3 = h3.reduce((total, curr) => total + curr, 0);

  let minHeight = Math.min(sum1, sum2, sum3);
  // const maxHeight = Math.max(height1, height2, height3);

  while(!(sum1 === sum2 && sum2 === sum3)){
    if(sum1>minHeight){
        sum1 -= h1.shift();
    }
    if(sum2>minHeight){
        sum2 -= h2.shift();
    }
    if(sum3>minHeight){
        sum3 -= h3.shift();
    }
    minHeight = Math.min(sum1,sum2,sum3);
  }

  return console.log(minHeight); 
}

console.log(equalStacks(arr1, arr2, arr3));

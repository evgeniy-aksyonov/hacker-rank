function lovefunc(flower1, flower2){
  
  let isFlower1Even;
  let isFlower2Odd;
  
  if (flower1 % 2 === 0) {
    isFlower1Even = true;
  }

  if (flower2 % 2 !== 0) {
    isFlower2Odd = true;
  }

  return (isFlower1Even && isFlower2Odd) || (!isFlower1Even && !isFlower2Odd);
}


console.log(lovefunc(1,4), true);
console.log(lovefunc(2,2), false);
console.log(lovefunc(0,1), true);
console.log(lovefunc(0,0), false);
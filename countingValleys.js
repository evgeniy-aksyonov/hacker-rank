const steps = 'UDDDUDUU';

// Complete the countingValleys function below.
function countingValleys(s) {
  let strArr = s.split('')

  let altitude = [];
  let counter = 0;
  let zero_indexes = [];
  let final_counter = 0;

  strArr.forEach(step => {
    (step === 'U') ? counter++ : counter--;
    altitude.push(counter);
  });

  altitude.forEach((el, index) => {
    if (el === 0) { zero_indexes.push(index); }
  });

  zero_indexes.forEach(elem => {
    if(altitude[elem - 1] === -1) {
      final_counter++;
    }
  });

  return final_counter;
}

console.log(countingValleys(steps));
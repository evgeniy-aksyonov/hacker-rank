let myArr = [1, 7, 3, 4];

function mutliplyAllExceptIndex(arr, index) {
  if (arr.length < 2) {
    throw new Error('Array is too short');
  }

  let result = 1;

  arr.forEach((element, idx) => {
    if (index === idx) {
      return;
    }

    result *= element;
  });

  return result;
}

console.log(mutliplyAllExceptIndex(myArr, 0));
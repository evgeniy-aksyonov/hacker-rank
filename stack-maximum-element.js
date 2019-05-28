// https://www.hackerrank.com/challenges/maximum-element/problem?isFullScreen=false

function processData(input) {
  (input = input.split('\n')).shift();
  let stack = [0];

  for (let i of input) {
    let [type, val] = i.split(' ').map(item => +item);
    let max = stack[stack.length - 1]; // top of stack i.e. peek()

    switch (type) {
      case 1:
        stack.push((val > max) ? val : max);
        break;
      case 2:
        stack.pop();
        break;
      case 3:
        console.log(max);
        break;

      default:
        break;
    }
  }
}

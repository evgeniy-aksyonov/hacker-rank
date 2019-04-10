// let queue = [2, 1, 5, 3, 4];
let queue1 = [5, 1, 2, 3, 7, 8, 6, 4];
let queue2 = [1, 2, 5, 3, 7, 8, 6, 4];

function minimumBribes(q) {
  let len = q.length
  let final_result = 0;

  for (let index = len; index-- > 0;) {
    if (q[index] - (index + 1) > 2) {
      final_result = "Too chaotic";
      break;
    }
    for (let j = Math.max(q[index]) - 2; j < index; j++) {
      if (q[j] > q[index])
        final_result++;
    }
  }
  console.log(final_result)
}

console.log(minimumBribes(queue2));

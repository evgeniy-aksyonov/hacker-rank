// https://www.hackerrank.com/challenges/dynamic-array/problem

let queries = [ [ 1, 0, 5 ], [ 1, 1, 7 ], [ 1, 0, 3 ], [ 2, 1, 0 ], [ 2, 1, 1 ] ];

function dynamicArray(n, queries) {
  let seq_arr = [];
  let lastAnswer = 0;

  for (let i = 0; i < n; i++) {
    seq_arr[i] = [];
  }

  queries.forEach(q => {
    let x = q[1];
    let y = q[2];
    let index = ((x ^ lastAnswer) % n);
    let target_seq = seq_arr[index];

    if (q[0] === 1) {
      target_seq.push(y);
    } else {
      lastAnswer = target_seq[(y % target_seq.length)];
      console.log(lastAnswer);
    }
  });
}

dynamicArray(2, queries);

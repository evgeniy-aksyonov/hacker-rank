const arr = [0, 0, 1, 0, 0, 1, 0];

function jumpingOnClouds(clouds) {
  console.log('clouds: ', clouds);
  let final_answer = 0;
  // let thunderheads_indexes = [];
  let curr_cloud_index = 0;

  while (curr_cloud_index < clouds.length - 1) {
    if (clouds[curr_cloud_index + 2] === 0) {
      curr_cloud_index = curr_cloud_index + 2;
    } else {
      curr_cloud_index = curr_cloud_index + 1;
    }
    console.log('curr_cloud_index: ', curr_cloud_index);
    final_answer += 1;
    console.log('final_answer: ', final_answer);
  }

  return final_answer;
}

jumpingOnClouds(arr);
// console.log(jumpingOnClouds(arr));
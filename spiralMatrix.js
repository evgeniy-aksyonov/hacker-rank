function spiralMatrix(n) {
  if (n === 0) {
    return;
  } else if (n === 1) {
    return [n];
  } else {
    const result_array = [];
  
    for (let i = n; i > 0; i--) {
      result_array.push([]);
    }
  
    let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;

    while (startColumn <= endColumn && startRow <= endRow) {
      // top row
      for (let i = startColumn; i <= endColumn; i++) {
        result_array[startRow][i] = counter;
        counter++;
      }
      startRow++;

      // right column
      for (let i = startRow; i <= endRow; i++) {
        result_array[i][endColumn] = counter;
        counter++;
      }
      endColumn--;

      // bottom row
      for (let i = endColumn; i >= startColumn; i--) {
        result_array[endRow][i] = counter;
        counter++;
      }
      endRow--;

      // left column
      for (let i = endRow; i >= startRow; i--) {
        result_array[i][startColumn] = counter;
        counter++;
      }
      startColumn++;
    }

    return result_array;
  }
}

console.log(spiralMatrix(4));

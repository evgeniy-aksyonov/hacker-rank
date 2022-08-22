interface Tree {
  value: number;
  children?: Tree[];
}

const tree: Tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [{ value: 4 }, { value: 5 }],
    },
    {
      value: 3,
      children: [{ value: 6 }, { value: 7 }],
    },
  ],
};

function median(tree: Tree): number {
  if (!tree.children) {
    return tree.value;
  }

  const values: number[] = [];
  const queue: Tree[] = [tree];

  while (queue.length) {
    const node: Tree | undefined = queue.shift();
    if (node) {
      values.push(node.value);
      if (node.children) {
        queue.push(...node.children);
      }
    }
  }
  console.log('values: ', values);

  const result = (values.length % 2 === 0)
    ? (values[values.length / 2] + values[values.length / 2 - 1]) / 2 // even length of values
    : values[Math.floor(values.length / 2)];  // odd length of values

  return result;
}

console.log(median(tree));
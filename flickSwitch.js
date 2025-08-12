function flickSwitch(arr) {
  let flag = true;

  return arr.map((item) => (item === 'flick' ? (flag = !flag) : flag));
}

console.log(flickSwitch(['codewars', 'flick', 'code', 'wars'])); // [true, false, false, false]
console.log(flickSwitch(['flick', 'chocolate', 'adventure', 'sunshine'])); // [false, false, false, false]
console.log(flickSwitch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick'])); // [true, true, false, false, true]
console.log(flickSwitch(['flick', 'flick', 'flick', 'flick', 'flick'])); // [false, true, false, true, false]
console.log(flickSwitch(['john, smith, susan', 'flick'])); // [true, false]
console.log(flickSwitch(['bicycle'])); // [true]
console.log(flickSwitch(['flick'])); // [false]

export const randomInt = (max: number) => {
  return Math.floor(Math.random() * Math.floor(max));
};
export const getShuffledArr = (arr: any[]) => {
  const newArr = arr.slice();
  for (let i = newArr.length - 1; i > 0; i--) {
    const rand = randomInt(i + 1);
    // ES6 的写法，不懂的同学移步下方链接学习
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
  }
  return newArr;
};

/*module.exports = function check(str, bracketsConfig) {
  const brArray = str.split('');
  const stack = [];
  const brConfig = {};
  bracketsConfig.forEach(bracket => {
    brConfig[bracket[1]] = bracket[0];
  });
  for (let i = 0; i < brArray.length; i++) {
    if (stack.length === 0) {
      stack.push(brArray[i]);
    } else {
      if (stack[stack.length - 1] === brConfig[brArray[i]]) {
        stack.pop();
      } else {
        stack.push(brArray[i]);
      }
    }
  }
  return (stack.length === 0) ? true : false;
}*/

module.exports = function check(str, bracketsConfig) {
  const brArray = str.split('');
  const stack = [];
  const brConfig = {};
  bracketsConfig.forEach(bracket => {
    brConfig[bracket[1]] = bracket[0];
  });
  for (let i = 0; i < brArray.length; i++) {
    if (stack.length === 0) {
      stack.push(brArray[i]);
    } else {
      if (stack[stack.length - 1] === brConfig[brArray[i]]) {
        stack.pop();
      } else {
        stack.push(brArray[i]);
      }
    }
  }
  return (stack.length === 0) ? true : false;
}

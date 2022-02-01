module.exports = function check(str, bracketsConfig) {
  let brArray = str.split('');
  Stack = [];
  const brConfig = {};
  bracketsConfig.forEach(bracket => {
    brConfig[bracket[1]] = bracket[0];
  });
  for (let i = 0; i < brArray.length; i++) {
    if (Stack.length === 0) {
      Stack.push(brArray[i]);
    } else {
      if (Stack[Stack.length - 1] === brConfig[brArray[i]]) {
        Stack.pop();
      } else {
        Stack.push(brArray[i]);
      }
    }
  }
  return (Stack.length === 0) ? true : false;
}


